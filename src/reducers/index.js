import {combineReducers} from 'redux';
//import withCities from './withCities';
import withCountries from './withCountries';
import withAttractions from './withAttractions';
import { items, itemsIsLoading } from './withCities';

const rootReducer = combineReducers({
    //cities: withCities,
    countries: withCountries,
    attractions: withAttractions,
    items,
    itemsIsLoading
})

export default rootReducer;
