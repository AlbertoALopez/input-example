import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import SearchButton from './SearchButton';

describe('SearchButton', () => {
  it('renders a disabled button', () => {
    render(<SearchButton disabled={true} />);

    const button = screen.getByTestId('button');

    expect(button).toBeDisabled();
  });

  it('renders an enabled button', () => {
    render(<SearchButton disabled={false} />);

    const button = screen.getByTestId('button');

    expect(button).not.toBeDisabled();
  });
});
