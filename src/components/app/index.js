import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import ListCountries from '../list';
import mainReducer from '../../reducers';
import './App.css';

const store = createStore(mainReducer);

const App = () => {
    return (
        <Provider store={store}>
            <ListCountries />
        </Provider>
    )
};

export default App;
