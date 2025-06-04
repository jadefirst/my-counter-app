import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('카운터 앱이 렌더링되는지 확인', () => {
  render(<App />);
  const counterElement = screen.getByText(/카운터:/i);
  expect(counterElement).toBeInTheDocument();
});