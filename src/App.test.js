import { render, screen } from '@testing-library/react';
import App from './App';

test('render Hello', () => {
  render(<App />);
  const HelloElement = screen.getByText(/Hello/i);
  expect(HelloElement).toBeInTheDocument();
});
