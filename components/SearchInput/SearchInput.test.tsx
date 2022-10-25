import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import SearchInput from './SearchInput';

const onChange = jest.fn();

describe('SearchInput', () => {
  it('renders an input', () => {
    render(<SearchInput onChange={onChange} value='' />);

    const input = screen.getByTestId('input');

    expect(input).toBeInTheDocument();
  });

  it('renders an input with an error', () => {
    render(<SearchInput onChange={onChange} value='' hasError={true} />);

    const input = screen.getByTestId('input');

    expect(input).toHaveClass('inputError');
  });
});