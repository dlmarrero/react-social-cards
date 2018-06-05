import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import * as TestUtils from 'react-dom/test-utils';
import { shallow, ShallowWrapper } from 'enzyme';

const SocialCard = require('../SocialCard');

describe('rendering', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<SocialCard />);
  });
  
  describe('avatar container', () => {
    it('should have div with class ".avatar-container"', () => {
      expect(wrapper.find('.avatar-container')).toHaveLength(1);
    });
  });

  describe('body component', () => {
    it('should have class ".body-container"', () => {

    });
  });

  describe('componentDidMount()', () => {
    describe('request for card data', () => {
      it('should be triggered', () => {

      });

      it('should set state with resolved card data', () => {

      });
    });
  });
});