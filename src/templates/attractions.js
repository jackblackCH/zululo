import React from 'react';
import {connect} from 'react-redux';

const AttractionsTemplate = (props) => {
  const item = props.items.find(item => item.name === props.params.attraction)
  return (
    <div className="c-city">
      <h1 className="c-city__title">{item.name}</h1>
      <img alt="" src={item.photo} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    title: 'Attractions',
    items: state.attractions.items,
  }
}

export default connect(mapStateToProps)(AttractionsTemplate);
