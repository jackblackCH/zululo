import React from 'react';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import mainReducer from "../../reducers";

import './App.css';
import templateHome from '../../templates/home.js';
import templateCountry from '../../templates/country.js';
import cityTemplate from '../../templates/city.js';
import AttractionsTemplate from '../../templates/attractions.js';
import Header from '../header';
import Footer from '../footer';
import {
    browserHistory,
    Router,
    Route,
} from "react-router";
// initialState is very needed
const initialState = {};
const store = createStore(
  mainReducer,
  initialState,
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
    return (
        <div>
            <Header />
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/" component={templateHome}/>
                    <Route path="/:country" component={templateCountry}/>
                    <Route path="/:country/:city" component={cityTemplate}/>
                    <Route path="/:country/:city/:attraction" component={AttractionsTemplate}/>
                </Router>
            </Provider>
            <Footer />
        </div>
    )
};

export default App;
