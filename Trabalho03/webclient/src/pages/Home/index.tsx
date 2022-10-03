/**
 * Componente da Home - Responsável por renderizar a página inicial da aplicação.
 * */

// Libs
import { useEffect, useState } from 'react';
import { Table } from '../../components/Table';
import api from '../../services/api';

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
        api.get('/objects').then(response => {
            const lightsData: any[][] = []
            const tvsData: any[][] = []
            const airConditionersData: any[][] = []
            const temperatureSensorsData: any[][] = []
            response.data.forEach((device: any) => {
                switch (device.type) {
                    case "light":
                        return (lightsData.push([device.name, device.color, handleStatus(device.status), device.ip, device.port]))
                    case "tv":
                        return (tvsData.push([handleStatus(device.status), device.channel, device.volume, device.ip, device.port]))
                    case "airConditioner":
                        return (airConditionersData.push([handleStatus(device.status), device.temperature, device.mode, device.ip, device.port]))
                    case "temperatureSensor":
                        return (temperatureSensorsData.push([handleStatus(device.status), device.temperature, device.ip, device.port]))
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