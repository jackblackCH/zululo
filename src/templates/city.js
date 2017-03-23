import React from 'react';
import List from '../components/list';
import {connect} from 'react-redux';



const cityTemlate = (props) => {
    const items = props.items.filter(item => item.city === props.params.city)
    return (
        <div className="c-city">
            
            <h1 className="c-city__title">Welcome to {props.params.city}</h1>
            <h2 className="c-city__subline">The Top Attractions are:</h2>
            <List prefix={`/${props.params.country}/${props.params.city}`} items={items}></List>

        </div>
    );
}

const mapStateToProps = state => {
    return {
        title: 'Cities',
        items: state.attractions.items,
    }
}


export default connect(mapStateToProps)(cityTemlate);
