/**
 * Componente da Home - Responsável por renderizar a página inicial da aplicação.
 * */

// Libs
import { useEffect, useState } from 'react';
import { Table } from '../../components/Table';
import api from '../../services/api';
import {ISmartObjectDetails, SmartObjectDetails, SmartObjectsList} from "../../messages/compiled";
// import ISmartObjectsList from '../../messages/compiled'

// Styles
import { Container, Title, Subtitle } from './styles';

// Renderer
export default function Home() {
    const [lights, setLights] = useState([] as any);
    const [tvs, setTvs] = useState([] as any);
    const [airConditioners, setAirConditioners] = useState([] as any);
    const [temperatureSensors, setTemperatureSensors] = useState([] as any);
    const [refresh, setRefresh] = useState<boolean>(false);

    const headers = [
        ["Name", "Color", "Status", "IP", "Port"],
        ["Status", "Channel", "Volume", "IP", "Port"],
        ["Status", "Temperature", "Mode", "IP", "Port"],
        ["Status", "Temperature", "IP", "Port"],
    ]

    const devices = ["Lights", "TV's", "Air Conditioning", "Temperature Sensor"]

    function handleStatus(status: number) {
        if (status === 0) {
            return "Off";
        }
        return "On";
    }

    function getData() {
        api.get('/objects', {responseType: 'arraybuffer', responseEncoding: "binary"}).then(response => {
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
                        return (lightsData.push([chosenDevice.name, chosenDevice.color, handleStatus(chosenDevice.status), device.ip, device.port]))
                    case "tv":
                        return (tvsData.push([handleStatus(chosenDevice.status), chosenDevice.channel, chosenDevice.volume, device.ip, device.port]))
                    case "ac":
                        return (airConditionersData.push([handleStatus(chosenDevice.status), chosenDevice.temperature, chosenDevice.mode, device.ip, device.port]))
                    case "tempSensor":
                        return (temperatureSensorsData.push([handleStatus(chosenDevice.status), chosenDevice.temperature, device.ip, device.port]))
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