import {combineReducers} from 'redux';
import withCities from './withCities';
import withCountries from './withCountries';
import withAttractions from './withAttractions';

const rootReducer = combineReducers({
    cities: withCities,
    countries: withCountries,
    attractions: withAttractions
})

export default rootReducer;
