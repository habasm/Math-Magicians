import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react'
import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

const Button = ({onClick, children}) => (
  <button onClick={onClick}>{children}</button>
)

describe('Check if it', () => {
  it('renders Quote component', () => {
    render(<Quote />);
  });
  const handleClick = jest.fn()
  render(<Button onClick={handleClick}>Click Me</Button>)
  fireEvent.click(screen.getByText(/click me/i))
  expect(handleClick).toHaveBeenCalledTimes(1)
});

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});
