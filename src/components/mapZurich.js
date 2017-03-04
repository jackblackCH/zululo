import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

export default class MapContainerZurich extends React.Component {
    /// STATE PRESENT LOCATION OF THE CITY (ZURICH IN THIS EXAMPLE)
    constructor() {
        super();
        this.state = {
            lat: 47.373,
            lng: 8.545,
            zoom: 13,
        };
    }

    render() {
        const position = [this.state.lat, this.state.lng];
        return (
            <Map center={position} zoom={this.state.zoom}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                <Marker position={position}>
                    <Popup>
                        <span>Zurich</span>
                    </Popup>
                </Marker>
            </Map>
        );
    }
}


///RENDER MAP OF ZURICH USING <MapContainerZurich /> AND IMPORT COMPONENT