import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import './list.css';

export class List extends Component {
    render() {
        return (
            <ul className="c-list">
                {this.props.countries.map(country => {
                    const countryLink = `/country/${country.name}`;
                    return (
                        <li className="c-list__item" key={country.shortName}>
                            <div className="c-list__block">
                                <h2 className="c-list__title">{country.name}</h2>
                                <Link to={countryLink}>
                                    <img alt="{country.name}" className="c-list__image" src={country.photo}/>
                                </Link>
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
