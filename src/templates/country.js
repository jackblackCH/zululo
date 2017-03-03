import React from 'react';
import List from '../components/list';
import {connect} from 'react-redux';

const countryTemplate = (props) =>
  <div className="c-country">
    <h1 className="c-country__title">Welcome to {props.params.country}</h1>
    <h2 className="c-country__subline">List all Cities:</h2>
    <List prefix={props.params.country} items={props.items}></List>
  </div>
;

const mapStateToProps = state => {
  return {
    title: 'test',
    items: state.cities.items,
  }
}

export default connect(mapStateToProps)(countryTemplate);
