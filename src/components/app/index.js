import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import CountryList from '../list/';
import Country from '../Country';
import mainReducer from '../../reducers';
import './App.css';
import Footer from '../footer'
import Header from '../header'
import {
    browserHistory,
    Router,
    Route,
    IndexRoute,
} from "react-router";

const store = createStore(mainReducer);

const App = () => {
    return (
      <div>
        <Header />
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/" component={({ children }) => <div>{children}</div>}>
                    <Route path="country/:countryName" component={Country} />
                    <IndexRoute component={CountryList} />
                </Route>
            </Router>
        </Provider>
        <Footer />
      </div>
    )
};

export default App;
