import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';

test('loads and the sign in button as active', async () => {
  // ARRANGE
  render(<App />);

  // ACT
  await screen.findByRole('tab', { selected: true })

  // ASSERT
  expect(screen.getByRole('tab', { selected: true })).toHaveTextContent('Sign In')
})