import Home from '@/app/page';
import { render, screen } from '@testing-library/react';

describe('Home', () => {
  it('should render the home page', () => {
    render(<Home />);

    const mainElement = screen.getByRole('main');
    const descriptionElement = screen.getByText(/Get started by editing/i);
    const logoElement = screen.getByAltText(/Next.js Logo/i);

    expect(mainElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(logoElement).toBeInTheDocument();
  });
});
