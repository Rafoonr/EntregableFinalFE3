import React from 'react';
import { render } from '@testing-library/react';
import { ContextProvider } from '../Components/utils/global.context';
import Home from '../Routes/Home';

test('renders Home component', () => {
  const { getByText } = render(
    <ContextProvider>
      <Home />
    </ContextProvider>
  );

  // Buscar el texto "Home" dentro del componente Navbar
  const homeText = getByText(/Home/, { selector: 'a' });

  expect(homeText).toBeInTheDocument();
});