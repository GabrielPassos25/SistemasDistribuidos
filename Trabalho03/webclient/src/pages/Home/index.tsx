/**
 * Componente da Home - Responsável por renderizar a página inicial da aplicação.
 * */

// Libs
import { useEffect, useState } from 'react';
import { Table } from '../../components/Table';
import api from '../../services/api';
import { ISmartObjectDetails, SmartObjectDetails, SmartObjectsList } from "../../messages/compiled";
import Switch from "react-switch";
// import ISmartObjectsList from '../../messages/compiled'

// Styles
import { Container, Title, Subtitle, StatusContainer, Status } from './styles';

// Renderer
export default function Home() {
    const [lights, setLights] = useState([] as any);
    const [tvs, setTvs] = useState([] as any);
    const [airConditioners, setAirConditioners] = useState([] as any);
    const [temperatureSensors, setTemperatureSensors] = useState([] as any);
    const [refresh, setRefresh] = useState<boolean>(false);

    const headers = [
        ["ID", "Name", "Color", "IP", "Port", "Status"],
        ["ID", "Channel", "Volume", "IP", "Port", "Status"],
        ["ID", "Temperature", "Mode", "IP", "Port", "Status"],
        ["ID", "Temperature", "IP", "Port", "Status"],
    ]

    const devices = ["Lights", "TV's", "Air Conditioning", "Temperature Sensor"]

    function changeStatus(device: any) {
        const message = SmartObjectDetails.create({ ...device, status: !device.status });
        const encodedMessage = SmartObjectDetails.encode(message).finish();
        api.put(`/objects/${device.id}`, encodedMessage, {
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
                {/* Criar requisição para o protobuff */}
                <Switch onChange={() => changeStatus(device)} checked={Boolean(device.status)} />
            </StatusContainer>
        );
    }

    function getData() {
        api.get('/objects', { responseType: 'arraybuffer', responseEncoding: "binary" }).then(response => {
            const objects = SmartObjectsList.decode(new Uint8Array(response.data))
            const lightsData: any[][] = []
            const tvsData: any[][] = []
            const airConditionersData: any[][] = []
            const temperatureSensorsData: any[][] = []
            objects.objects.forEach((device: any) => {
                const whichDevice = device.objectDetails
                const chosenDevice = device[whichDevice]
                switch (whichDevice) {
                    case "light":
                        return (lightsData.push([device.id, chosenDevice.name, chosenDevice.color, device.ip, device.port, handleStatus(device)]))
                    case "tv":
                        return (tvsData.push([device.id, chosenDevice.channel, chosenDevice.volume, device.ip, device.port, handleStatus(device)]))
                    case "ac":
                        return (airConditionersData.push([device.id, chosenDevice.temperature, chosenDevice.mode, device.ip, device.port, handleStatus(device)]))
                    case "tempSensor":
                        return (temperatureSensorsData.push([device.id, chosenDevice.temperature, device.ip, device.port, handleStatus(device)]))
                }

            })
            setLights(lightsData)
            setTvs(tvsData);
            setAirConditioners(airConditionersData);
            setTemperatureSensors(temperatureSensorsData);
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
                    <div key={device}>
                        <Subtitle>
                            {device}
                        </Subtitle>
                        <Table data={index === 0 ? lights : index === 1 ? tvs : index === 2 ? airConditioners : temperatureSensors} headers={headers[index]} />
                    </div>
                ))
            }
        </Container>
    );
}