import { render, screen } from '@testing-library/react';
import Page from '../../views/screens';
import { describe, test, expect } from 'vitest'
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe("[page]: home", ()=> {
  test("[text]: Get Text Heading", () => {
    render(
      <MemoryRouter>
        <Page/>
      </MemoryRouter>
    );
    //@ts-ignore
    expect(screen.getByText("Home")).toBeInTheDocument();

  });

  test('[navigation] redirects to /auth/login when Login button is clicked', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/auth/login" element={<div>Login Page</div>} />
        </Routes>
      </MemoryRouter>
    );

    const button = screen.getByRole('button', { name: /login/i });
    await user.click(button);

    expect(screen.getByText(/login page/i)).toBeInTheDocument();
  });
})
