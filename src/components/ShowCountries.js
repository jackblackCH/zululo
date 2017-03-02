import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../style/App.css';
import {countryList} from '../actions/index'

class ShowCountries extends Component {

  render() {
    return (
      <div className="App">
        <ul>
        {this.props.countries.map(country=> {
          return (
              <li>{country.name}</li>
          )
        })}
      </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const countries = state.countries
	return {
		countries
	};
};

export default connect(mapStateToProps)(ShowCountries)
