import Footer from '../components/footer';
import renderer from 'react-test-renderer';
import React from 'react';


describe('Component: Footer', () => {

  it('should render the Footer', () => {
    const tree = renderer.create(
      <Footer></Footer>
    ).toJSON();
    expect(tree).toMatchSnapshot()
  })

  it('should have a className', () => {
    const tree = renderer.create(
      <Footer className='c-footer'></Footer>
    ).toJSON();
    expect(tree).toMatchSnapshot()
  })

  it('should have a link', () => {
    const tree = renderer.create(
      <Footer ><a className="c-footer__link" href="//github.com/jackblackCH/zululo"> Copyright  zululo 2017</a></Footer>
    ).toJSON();
    expect(tree).toMatchSnapshot()
  })

})
