import React from 'react';
import { mount } from 'enzyme';
import App from 'App';
import { NavigationButton } from 'components/HTML';

it('renders navigation buttons when app starts', () => {
  const wrapper = mount(<App />);
  const navigationButtons = wrapper.find(NavigationButton);
  expect(
    wrapper.containsMatchingElement(
      <NavigationButton route={'/'}
                        label={'Home'}
      />,
    ),
  ).toBeTruthy();
  expect(
    wrapper.containsMatchingElement(
      <NavigationButton route={'/heroes'}
                        label={'Heroes'}
      />,
    ),
  ).toBeTruthy();
  expect(navigationButtons).toHaveLength(2);
});
