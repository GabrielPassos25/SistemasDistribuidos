/**
 * Componente da Home - Responsável por renderizar a página inicial da aplicação.
 * */

// Libs
import { useEffect, useState } from 'react';
import { Table } from '../../components/Table';
import api from '../../services/api';
import { SmartObjectDetails, SmartObjectsList } from "../../messages/compiled";
import Switch from "react-switch";
// import ISmartObjectsList from '../../messages/compiled'

// Styles
import { Container, Title, Subtitle, StatusContainer, Input, Button } from './styles';

// Renderer
export default function Home() {
    const [editingDevice, setEditingDevice] = useState<any>({});
    const [lights, setLights] = useState([] as any);
    const [luminositySensors, setLuminositySensors] = useState([] as any);
    const [airConditioners, setAirConditioners] = useState([] as any);
    const [temperatureSensors, setTemperatureSensors] = useState([] as any);
    const [sprinkler, setSprinkler] = useState([] as any);
    const [smokeSensors, setSmokeSensors] = useState([] as any);
    const [refresh, setRefresh] = useState<boolean>(false);
    const headers = [
        ["ID", "Name", "Color", "IP", "Port", "Status", ""],
        ["ID", "Name", "Leitura", "IP", "Port", "Status", ""],
        ["ID", "Temperature", "IP", "Port", "Status", ""],
        ["ID", "Temperature", "IP", "Port", "Status", ""],
        ["ID", "Name", "IP", "Port", "Status", ""],
        ["ID", "Name", "Leitura", "IP", "Port", "Status", ""],
    ]
    const devices = [
        { type: "Lights", data: lights, fields: ["name", "color"], typeName: "light" },
        { type: "Luminosity Sensors", data: luminositySensors, fields: ["name", "reading"], typeName: "luminositySensor" },
        { type: "Air Conditioners", data: airConditioners, fields: ["temperature"], typeName: "ac" },
        { type: "Temperature Sensors", data: temperatureSensors, fields: ["temperature"], typeName: "tempSensor" },
        { type: "Sprinkler", data: sprinkler, fields: ["name"], typeName: "sprinkler" },
        { type: "Smoke Sensors", data: smokeSensors, fields: ["name", "reading"], typeName: "smokeSensor" },
    ]
    function changeStatus(device: any) {
        const message = SmartObjectDetails.create({ ...device, status: !device.status });
        const encodedMessage = SmartObjectDetails.encode(message).finish();
        api.put(`/objects/${device.id}`, encodedMessage.slice(0, encodedMessage.length), {
            headers: {
                'content-type': 'application/x-protobuf'
            }
        }).then(() => {
            setRefresh(!refresh);
        })
    }

    function handleStatus(device: any) {
        return (
            <StatusContainer>
                <Switch onChange={() => changeStatus(device)} checked={Boolean(device.status)} />
            </StatusContainer>
        );
    }

    function editField(device: any) {
        setEditingDevice(device);
    }

    function saveChanges() {
        const device = editingDevice;
        const message = SmartObjectDetails.create({ ...device });
        console.log(device)
        const encodedMessage = SmartObjectDetails.encode(message).finish();
        api.put(`/objects/${device.id}`, encodedMessage.slice(0, encodedMessage.length), {
            headers: {
                'content-type': 'application/x-protobuf'
            }
        }).then(() => {
            setEditingDevice({})
            setRefresh(!refresh);
        })
    }

    function dataMap(device: any, devices: any) {
        return [
            device.id,
            ...devices.fields.map((field: any) => {
                return device.id !== editingDevice.id ?
                    device[field] :
                    <Input defaultValue={device[field]} onChange={e => { editingDevice[devices.typeName][field] = e.target.value; editField(editingDevice) }} />
            }),
            device.ip,
            device.port,
            handleStatus(device.originalObject),
            <Button onClick={editingDevice.id === device.id ? () => saveChanges() : () => {
                if (device.id !== editingDevice.id && editingDevice.id !== undefined) {
                    alert("Finalize a edição do outro dispositivo antes de editar outro")
                    return;
                }
                setRefresh(!refresh);
                setEditingDevice(device.originalObject);
            }}>
                {editingDevice.id === device.id ? "Save" : "Edit"}
            </Button>
        ]
    }

    function getData() {
        api.get('/objects', { responseType: 'arraybuffer', responseEncoding: "binary" }).then(response => {
            const objects = SmartObjectsList.decode(new Uint8Array(response.data))
            const lightsData: any[] = [];
            const luminositySensor: any[] = []
            const airConditionersData: any[] = []
            const temperatureSensorsData: any[] = []
            const smokeSensor: any[] = []
            const sprinkler: any[] = []
            objects.objects.forEach((device: any) => {
                const whichDevice = device.objectDetails
                const chosenDevice = device[whichDevice]
                switch (whichDevice) {
                    case "light":
                        return (lightsData.push({id: device.id, name: chosenDevice.name, color: chosenDevice.color, ip: device.ip, port: device.port, status: device.status, originalObject: device}))
                    case "luminositySensor":
                        return (luminositySensor.push({id: device.id, name: chosenDevice.name, reading: chosenDevice.reading, ip: device.ip, port: device.port, status: device.status, originalObject: device}))
                    case "ac":
                        return (airConditionersData.push({
                            id: device.id,
                            temperature: chosenDevice.temperature,
                            ip: device.ip,
                            port: device.port,
                            status: device.status,
                            originalObject: device
                        }))
                    case "tempSensor":
                        return (temperatureSensorsData.push({id: device.id, temperature: chosenDevice.temperature, ip: device.ip, port: device.port, status: device.status, originalObject: device}))
                    case "smokeSensor":
                        return (smokeSensor.push({id: device.id, name: chosenDevice.name, reading: chosenDevice.reading, ip: device.ip, port: device.port, status: device.status, originalObject: device}))
                    case "sprinkler":
                        return (sprinkler.push({id: device.id, name: chosenDevice.name, ip: device.ip, port: device.port, status: device.status, originalObject: device}))
                }

            })
            setLights(lightsData)
            setLuminositySensors(luminositySensor);
            setAirConditioners(airConditionersData);
            setTemperatureSensors(temperatureSensorsData);
            setSmokeSensors(smokeSensor);
            setSprinkler(sprinkler);
        })
    }

    useEffect(() => {
        setTimeout(() => {
            setRefresh(!refresh);
        }, 10000);
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refresh])
    return (
        <Container>
            <Title>
                Registered Devices
            </Title>
            {
                devices.map((deviceGroup, index) => (
                    <div key={deviceGroup.type}>
                        <Subtitle>
                            {deviceGroup.type}
                        </Subtitle>
                        <Table data={deviceGroup.data.map((data: any) => dataMap(data, deviceGroup))} headers={headers[index]} />
                    </div>
                ))
            }
        </Container>
    );
}