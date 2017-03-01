import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ShowCountries from './ShowCountries';
import mainReducer from '../reducers';

const store = createStore(mainReducer);

const App = () => {
	return (
    <Provider store={store}>
		  <ShowCountries />
    </Provider>
	)
}

export default App;
