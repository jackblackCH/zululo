import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../style/App.css';

class ShowCountries extends Component {
    render() {
        return (
            <div className="App">
                <ul>
                    {this.props.countries.map(country => {
                        return (
                            <li id="country-main"><p>{country.name}</p><img id="main-photo" src={country.photo}></img></li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const countries = state.countries;
    return {
        countries
    };
};


export default connect(mapStateToProps)(ShowCountries)
