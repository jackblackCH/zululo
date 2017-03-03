import cities from '../models/cities';

const filteredCities = cities.map( city => {
  return {
    id: city.name,
    name: city.name
  }
})

const INIT_STATE = {
    items: filteredCities
};

const reducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
}


export default reducer;
