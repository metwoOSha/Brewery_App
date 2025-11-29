'use client';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { MapProps } from './Map.interface';

import cls from './Map.module.css';

export default function Map({ latitude, longitude, zoom = 13 }: MapProps) {
    const position: [number, number] = [latitude, longitude];
    return (
        <MapContainer center={position} zoom={zoom} className={cls.map}>
            <TileLayer
                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup></Popup>
            </Marker>
        </MapContainer>
    );
}
