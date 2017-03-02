import React from 'react'

const INIT_STATE = {
  countries: [
    {
      name: 'United Kingdom',
      shortName: 'uk',
      flag: '/assets/country/city.jpg'
    },
    {
      name: 'Switzerland',
      shortName: 'ch',
      flag: '/assets/country/switzerlandAlps.jpg'
    },
    {
      name: 'Poland',
      shortName: 'pl',
      flag: '/assets/country/wawel-castle.jpg'
    },
  ]
}
const reducer = (state = INIT_STATE, action) => {
	switch (action.type) {

		default:
			return state;
	}
}

export default reducer;
