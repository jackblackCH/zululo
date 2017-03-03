import Header from '../components/header';
import renderer from 'react-test-renderer';
import React from 'react';


describe('Component: Header', () => {

  it('should render the Header', () => {
    const tree = renderer.create(
      <Header></Header>
    ).toJSON();
    expect(tree).toMatchSnapshot()
  })

  it('should have a className', () => {
    const tree = renderer.create(
      <Header className='c-header'></Header>
    ).toJSON();
    expect(tree).toMatchSnapshot()
  })

})
