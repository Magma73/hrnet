import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Error from '../pages/Error';

// Mock the useRouteError hook
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
  return {
    ...actual,
    useRouteError: () => ({
      status: 404,
      statusText: 'Not Found',
    }),
  };
});

describe('Given there is an error redirection', () => {
  test('Then, it should render error information and a link to the home page', () => {
    // Render the ErrorRedirection component within a BrowserRouter
    render(
      <BrowserRouter>
        <Error />
      </BrowserRouter>
    );

    // Check that the error title is rendered
    const mainHeading = screen.getByRole('heading', { level: 1 });
    expect(mainHeading).toBeInTheDocument();
    expect(mainHeading).toHaveTextContent('Error Page');

    // Check that the error details are rendered
    const errorDetails = screen.getByText(/Error 404 Not Found/i);
    expect(errorDetails).toBeInTheDocument();

    // Check for the link to the home page
    const linkToHome = screen.getByRole('link', { name: /Back to Home Page/i });
    expect(linkToHome).toBeInTheDocument();
    expect(linkToHome).toHaveAttribute('href', '/');
  });
});
