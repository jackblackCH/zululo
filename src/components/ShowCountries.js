import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../style/App.css';

class ShowCountries extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.countries.map(country => {
                        return (
                            <li id="country-main">
                                <h2>{country.name}</h2>
                                <img className="fade" id="main-photo" src={country.photo}/>
                            </li>
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