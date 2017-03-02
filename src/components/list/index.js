import React, {Component} from 'react';
import {connect} from 'react-redux';
import './list.css';

class List extends Component {
    render() {
        return (
            <ul className="c-list">
                {this.props.countries.map(country => {
                    return (
                        <li className="c-list__item">
                            <div className="c-list__block">
                              <h2 className="c-list__title">{country.name}</h2>
                              <img className="c-list__image"  src={country.photo} />
                            </div>
                        </li>
                    )
                })}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    const countries = state.countries;
    return {
        countries
    };
};


export default connect(mapStateToProps)(List)
