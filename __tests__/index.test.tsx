import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Home from '../pages/index'
import { Courses as MockCourses } from 'pages/api/mocks';
import userEvent from '@testing-library/user-event';

describe('Home', function() {
  const user = userEvent.setup();

  beforeEach(() => {
    render(<Home courses={MockCourses}/>);
  });

  it('renders a heading', () => {    
    const heading = screen.getByTestId('inputTitle');

    expect(heading).toHaveTextContent('Course');
  });

  it('renders a button that is initially disabled', () => {
    const button = screen.getByRole('button');

    expect(button).toHaveTextContent('Submit');
    expect(button).toBeDisabled();
  });

  it('renders an enabled button when text is inputted', async () => {
    const input = screen.getByTestId('input');
    const button = screen.getByRole('button');

    await user.type(input, 'test');
    expect(button).toBeEnabled();
  });

  it('disables the submit button when text is deleted', async () => {
    const input = screen.getByTestId('input');
    const button = screen.getByTestId('button');

    await user.type(input, 'test');
    expect(button).toBeEnabled();

    await user.clear(input);
    expect(button).toBeDisabled();
  });

  it('displays an error label when course is not found', async () => {
    const button = screen.getByTestId('button');
    const input = screen.getByTestId('input');
    // initial state
    expect(screen.queryByTestId('errorLabel')).not.toBeInTheDocument();
    // after typing in input
    await user.type(input, 'test');
    await user.click(button);

    const errorLabel = screen.getByTestId('errorLabel');

    expect(errorLabel).toHaveTextContent('Error: Could not parse course');
    expect(errorLabel).toHaveClass('errorLabel');
  });
});
