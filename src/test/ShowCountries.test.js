/**
 * Tests for the TodoItem
 */
 import React from 'react'
 import { ShowCountries } from '../components/ShowCountries'
 import renderer from 'react-test-renderer'


 describe('<ShowCountries />', () => {
   it('should have a className', () => {
     const tree = renderer.create(
       <ShowCountries countries={[{
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
       }]} className='App'></ShowCountries>
     ).toJSON();
     expect(tree).toMatchSnapshot()
   })
   it('should render ShowCountries', () => {
     const tree = renderer.create(
       <ShowCountries countries={[]}></ShowCountries>
     ).toJSON();
     expect(tree).toMatchSnapshot()
   })
 })
