import React from 'react';
import List from '../components/list';
import {connect} from 'react-redux';

const AttractionsTemplate = (props) => {
    const item = props.items.find(item => item.name === props.params.attraction)
    return (
        <div className="c-city">
            <h1 className="c-city__title">{item.name}</h1>
            {/* <h2 className="c-city__subline">The Top Attractions are:</h2> */}
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
