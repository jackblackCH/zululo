import React, { Component } from 'react';

export default class Country extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.params.countryName}</h1>
            </div>
        )
    }
}
