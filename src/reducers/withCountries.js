// import countries from '../models/countries';
import { LOAD_COUNTRIES } from '../actions'


// const filteredCountries = countries.map(country => {
//     return {
//         ...country,
//         id: country.name,
//         image: country.photo
//     }
// })

// const INIT_STATE = {
//     items: filteredCountries
// };
const INIT_STATE = {
  items: []
}

const reducer = (state = INIT_STATE, action) => {
  console.log('action', action);

    switch (action.type) {
      case LOAD_COUNTRIES:
          console.log('state', state);
          console.log('actions', action.payload)
          let newState = Object.assign({}, state);
          newState.items.push({aaa:'bb'})
          console.log('newState=', newState);
          return newState
        default:
            return state;
    }
}

export default reducer;
