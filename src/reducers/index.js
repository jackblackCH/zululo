
const INIT_STATE = {
    countries: [
        {
            name: 'United Kingdom',
            shortName: 'uk',
            photo: '/assets/country/city.jpg'
        },
        {
            name: 'Switzerland',
            shortName: 'ch',
            photo: '/assets/country/switzerlandAlps.jpg'
        },
        {
            name: 'Poland',
            shortName: 'pl',
            photo: '/assets/country/krakow.jpg'
        },
    ]
};
const reducer = (state = INIT_STATE, action) => {
	switch (action.type) {

		default:
			return state;
	}
}


export default reducer;
