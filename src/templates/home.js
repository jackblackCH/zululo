import React, { Component } from "react";
import List from "../components/list";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//import flags from 'svg-country-flags'

import { loadCities, itemsFetchData } from "../actions";
//console.log(flags);

const ROOT_URL = "https://restcountries.eu/rest/v2/all";


class homeTemplate extends Component {
  componentDidMount() {
    console.log('props',this.props);
    this.props.actions.loadCities( ROOT_URL);
    //this.props.fetchData();
    }


  render() {

    const countries = this.props.items.filter((item) => {
      return item.population > 42692393
    });
    console.log(this.props.items.length);
    console.log(countries.length);
    return (
      <div className="c-home">
        <List items={this.props.items} />
        <ul>
           {countries.map( item => (
               <li key={item.id}>
                   {item}
               </li>
           )
         )}
         </ul>
      </div>

    )
  }
}

const mapStateToProps = state => {
  //console.log(state);
  return {
    //items: state.cities.items,
    items: state.items,
    isLoading: state.itemsIsLoading
  };
};
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators( {loadCities}, dispatch)

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(homeTemplate);
