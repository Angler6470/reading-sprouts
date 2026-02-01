import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Reading Sprouts title', () => {
  render(<App />);
  const titles = screen.getAllByText(/Reading Sprouts/i);
  expect(titles.length).toBeGreaterThan(0);
});
