import reducer from '../reducers'

describe('reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
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
    });
  });
})
