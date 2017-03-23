import React from 'react';
import List from '../components/list';
import {connect} from 'react-redux';


const countryTemplate = (props) => {
    const currentCountry = props.countries.find(country => country.name === props.params.country);
    const items = props.items.filter(item => item.country_code === currentCountry.country_code)

    return (
        <div className="c-country">
            <h1 className="c-country__title">Welcome to {props.params.country}</h1>
            <h2 className="c-country__subline">List all Cities:</h2>
            <List prefix={props.params.country} items={items}></List>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        title: 'test',
        items: state.cities.items,
        countries: state.countries.items,
    }
}

export default connect(mapStateToProps)(countryTemplate);
