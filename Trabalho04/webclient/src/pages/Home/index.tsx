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
import { Container, Title, Subtitle, StatusContainer, Input, SaveButton } from './styles';

// Renderer
export default function Home() {
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
        ["ID", "Name", "Temperature", "IP", "Port", "Status", "Edit"],
        ["ID", "Name", "Temperature", "IP", "Port", "Status", "Edit"],
        ["ID", "Name", "IP", "Port", "Status", "Edit"],
        ["ID", "Name", "Reading", "IP", "Port", "Status", "Edit"],
    ]

    const devices = [
        { type: "Lights", data: lights },
        { type: "Luminosity Sensors", data: luminositySensors },
        { type: "Air Conditioners", data: airConditioners },
        { type: "Temperature Sensors", data: temperatureSensors },
        { type: "Sprinkler", data: sprinkler },
        { type: "Smoke Sensors", data: smokeSensors }
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

    function saveChanges(device: any) {
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


    function getData() {
        api.get('/objects', { responseType: 'arraybuffer', responseEncoding: "binary" }).then(response => {
            const objects = SmartObjectsList.decode(new Uint8Array(response.data))
            const lightsData: any[][] = [];
            const luminositySensor: any[][] = []
            const airConditionersData: any[][] = []
            const temperatureSensorsData: any[][] = []
            const smokeSensor: any[][] = []
            const sprinkler: any[][] = []
            objects.objects.forEach((device: any) => {
                const whichDevice = device.objectDetails
                const chosenDevice = device[whichDevice]
                switch (whichDevice) {
                    case "light":
                        return (lightsData.push([device.id, chosenDevice.name, chosenDevice.color, device.ip, device.port, handleStatus(device)]))
                    case "luminosity_sensor":
                        return (luminositySensor.push([device.id, chosenDevice.name, <Input defaultValue={chosenDevice.reading} />, device.ip, device.port, handleStatus(device)]))
                    case "ac":
                        return (airConditionersData.push([device.id, <Input defaultValue={chosenDevice.temperature} />, device.ip, device.port, handleStatus(device), <SaveButton>Salvar</SaveButton>]))
                    case "temp_sensor":
                        return (temperatureSensorsData.push([device.id, <Input defaultValue={chosenDevice.temperature} />, device.ip, device.port, handleStatus(device)]))
                    case "smoke_sensor":
                        return (smokeSensor.push([device.id, chosenDevice.name, <Input defaultValue={chosenDevice.reading} />, device.ip, device.port, handleStatus(device)]))
                    case "sprinkler":
                        return (sprinkler.push([device.id, chosenDevice.name, device.ip, device.port, handleStatus(device)]))
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
                        <Table data={device.data} headers={headers[index]} />
                    </div>
                ))
            }
        </Container>
    );
}