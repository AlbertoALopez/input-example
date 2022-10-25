import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Courses from './Courses';

describe('Courses', () => {
  it('renders a title', () => {
    render(<Courses />);

    const title = screen.getByTestId('inputTitle');

    expect(title).toHaveTextContent('Course');
  });

  it('renders an input', () => {
    render(<Courses />);

    const input = screen.getByTestId('input');

    expect(input).toBeInTheDocument();
  });

  it('renders a button', () => {
    render(<Courses />);

    const button = screen.getByTestId('button');

    expect(button).toBeInTheDocument();
  });
});
