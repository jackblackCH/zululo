import countries from '../models/countries';

const filteredCountries = countries.map( country => {
  return {
    ...country,
    id: country.name,
    image: country.photo
  }
})

const INIT_STATE = {
    items: filteredCountries
};

const reducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
}

export default reducer;
