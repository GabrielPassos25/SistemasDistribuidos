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
        ["ID", "Name", "Color", "IP", "Port", "Status", "Edit"],
        ["ID", "Name", "Reading", "IP", "Port", "Status", "Edit"],
        ["ID", "Name", "Temperature", "IP", "Port", "Status", ""],
        ["ID", "Name", "Temperature", "IP", "Port", "Status", "Edit"],
        ["ID", "Name", "IP", "Port", "Status", "Edit"],
        ["ID", "Name", "Reading", "IP", "Port", "Status", "Edit"],
    ]
    const devices = [
        // { type: "Lights", data: lights },
        // { type: "Luminosity Sensors", data: luminositySensors },
        { type: "Air Conditioners", data: airConditioners },
        // { type: "Temperature Sensors", data: temperatureSensors },
        // { type: "Sprinkler", data: sprinkler },
        // { type: "Smoke Sensors", data: smokeSensors }
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

    function editField(key: string, value: any) {
        setEditingDevice({ ...editingDevice, ac: {...editingDevice.ac, [key]: value }});
        // console.log(editingDevice)
        // console.log({ ...editingDevice, ac: {...editingDevice.ac, [key]: value }})
        // setEditingDevice({ ...editingDevice, ac: {...editingDevice.ac, [key]: value }});
        // console.log(editingDevice)
    }

    function saveChanges() {
        const device = editingDevice;
        const message = SmartObjectDetails.create({ ...device });
        const encodedMessage = SmartObjectDetails.encode(message).finish();
        api.put(`/objects/${device.id}`, encodedMessage.slice(0, encodedMessage.length), {
            headers: {
                'content-type': 'application/x-protobuf'
            }
        }).then(() => {
            setRefresh(!refresh);
        })
    }

    function acMap(device: any) {
        return [
            device.id,
            device.id != editingDevice.id ?
                device.temperature :
                <Input defaultValue={device.temperature} onChange={e => editField("temperature", e.target.value)} />,
            device.ip,
            device.port,
            handleStatus(device),
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
            const lightsData: any[][] = [];
            const luminositySensor: any[][] = []
            const airConditionersData: any[] = []
            const temperatureSensorsData: any[][] = []
            const smokeSensor: any[][] = []
            const sprinkler: any[][] = []
            objects.objects.forEach((device: any) => {
                const whichDevice = device.objectDetails
                const chosenDevice = device[whichDevice]
                switch (whichDevice) {
                    case "light":
                        return (lightsData.push([device.id, chosenDevice.name, chosenDevice.color, device.ip, device.port, device.status]))
                    case "luminositySensor":
                        return (luminositySensor.push([device.id, chosenDevice.name, chosenDevice.reading, device.ip, device.port, device.status]))
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
                        return (temperatureSensorsData.push([device.id, chosenDevice.temperature, device.ip, device.port, device.status]))
                    case "smokeSensor":
                        return (smokeSensor.push([device.id, chosenDevice.name, chosenDevice.reading, device.ip, device.port, device.status]))
                    case "sprinkler":
                        return (sprinkler.push([device.id, chosenDevice.name, device.ip, device.port, device.status]))
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
                devices.map((device, index) => (
                    <div key={device.type}>
                        <Subtitle>
                            {device.type}
                        </Subtitle>
                        <Table data={device.data.map(acMap)} headers={headers[index]} />
                    </div>
                ))
            }
        </Container>
    );
}