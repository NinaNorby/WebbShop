import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import NavigationBar from './NavigationBar';

describe('NavigationBar component', () => {
  it('navigates to "Home" and "Shopping cart" when links are clicked', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <NavigationBar />
      </MemoryRouter>
    );

    // Kontrollerar att länken navigerar till HOME
    await userEvent.click(screen.getByText(/Home/i));
    expect(screen.getByText(/Home/i)).toBeInTheDocument();

    // KontrolleraR att länken navigerar till Shopping cart
    await userEvent.click(screen.getByText(/Shopping cart/i));
    expect(screen.getByText(/Shopping cart/i)).toBeInTheDocument();
  });
});
