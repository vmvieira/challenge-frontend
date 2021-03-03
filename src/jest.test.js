import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Searchbar from './components/Searchbar/Searchbar';
import { render } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Searchbar />, div);
});

it('renders correctly', () => {
  const { queryByPlaceholderText } = render(<Searchbar />);
  expect(queryByPlaceholderText('Search')).toBeTruthy();
});

it('matches snapshot', () => {
  const tree = renderer.create(<Searchbar />).toJSON();
  expect(tree).toMatchSnapshot();
});
