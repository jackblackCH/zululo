import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import mainReducer from '../../reducers';
import './App.css';
import templateHome from '../../templates/home.js';
import templateCountry from '../../templates/country.js';

import {
    browserHistory,
    Router,
    Route,
    IndexRoute,
} from "react-router";

const store = createStore(mainReducer);

const App = () => {
    return (
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/">
                    <Route path=":country" component={templateCountry} />
                    <IndexRoute component={templateHome} />
                </Route>
            </Router>
        </Provider>
    )
};

export default App;
