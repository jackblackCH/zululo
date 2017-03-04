import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

export default class MapContainerLublin extends React.Component {
    /// STATE PRESENT LOCATION OF THE CITY (LUBLIN IN THIS EXAMPLE)
    constructor() {
        super();
        this.state = {
            lat: 51.246,
            lng: 22.568,
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
                        <span>Lublin</span>
                    </Popup>
                </Marker>
            </Map>
        );
    }
}


///RENDER MAP OF LUBLIN USING <MapContainerLublin /> AND IMPORT COMPONENT