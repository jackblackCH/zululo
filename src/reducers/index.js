import { combineReducers } from 'redux';
import withCities from './withCities';
import withCountries from './withCountries';

const rootReducer = combineReducers({
  cities: withCities,
  countries: withCountries
})

export default rootReducer;
