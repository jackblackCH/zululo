import React from 'react';
import {Link} from 'react-router';
import './list.css';

const List = (props) =>
    <ul className="c-list">
        {props.items.map(item => {
            return (
                <li className="c-list__item" key={item.id}>
                    <Link to={`${props.prefix ? `${props.prefix}/` : ''}${item.name}`}>
                        <div className="c-list__block">
                            <h2 className="c-list__title">{item.name}</h2>
                            <img alt={item.name} className="c-list__image" src={item.image}/>
                        </div>
                    </Link>
                </li>
            )
        })}
    </ul>

export default List
