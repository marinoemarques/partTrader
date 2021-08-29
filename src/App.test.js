import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Parts Trader header', () => {
  render(<App />);
  const element = screen.getByText(/Find My Parts/i);
  expect(element).toBeInTheDocument();
});
