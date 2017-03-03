import React from 'react';
import List from '../components/list';
import {connect} from 'react-redux';

const homeTemplate = (props) => (
  <div className="c-home">
    <List items={props.items}></List>
  </div>
);

const mapStateToProps = state => {
  return {
    items: state.countries.items
  }
}

export default connect(mapStateToProps)(homeTemplate);
