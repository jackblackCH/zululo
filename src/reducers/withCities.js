import cities from "../models/cities";
import LOAD_COUNTRIES from '../actions'

// const filteredCities = cities.map(city => {
//   return {
//     ...city,
//     id: city.name,
//     image: city.photo
//   };
// });
//
// const INIT_STATE = {
//   items: filteredCities
// };
//
// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case LOAD_COUNTRIES:
//       console.log('action=', action);
//             return action.items;
//     default:
//       return state;
//   }
// };
//
// export default reducer;

export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
export function items(state = [], action) {
    switch (action.type) {
        case 'LOAD_COUNTRIES':
            return action.items;
        default:
            return state;
    }
}
