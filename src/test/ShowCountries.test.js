/**
 * Tests for the TodoItem
 */
 import React from 'react'
 import { List } from '../components/list'
 import renderer from 'react-test-renderer'


 describe('Component: Country list', () => {

   it('should render the list', () => {
     const tree = renderer.create(
       <List countries={[]}></List>
     ).toJSON();
     expect(tree).toMatchSnapshot()
   })

   it('should have a classname', () => {
     const tree = renderer.create(
       <List className='c-list' countries={[]}></List>
     ).toJSON();
     expect(tree).toMatchSnapshot()
   })

   it('should render items', () => {
     const tree = renderer.create(
       <List countries={[{
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
       }]} ></List>
     ).toJSON();
     expect(tree).toMatchSnapshot()
   })
});
