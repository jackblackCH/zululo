import React from 'react';
import List from '../components/list';

const cityTemlate = (props) => (
  <div className="c-city">
    <h1 className="c-city__title">Welcome to {props.title}</h1>
    <h2 className="c-city__subline">The Top Attractions are:</h2>
    <List items={props.items}></List>
  </div>
);

const mapStateToProps = state => {
  return {
    title: 'Cities',
    items: state.cities.items,
  }
}

export default connect(mapStateToProps)(cityTemlate);
