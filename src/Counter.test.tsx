import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('카운터 초기값이 0인지 확인', () => {
  render(<Counter />);
  expect(screen.getByText('카운터: 0')).toBeInTheDocument();
});

test('증가 버튼 클릭시 1 증가', () => {
  render(<Counter />);
  fireEvent.click(screen.getByText('증가'));
  expect(screen.getByText('카운터: 1')).toBeInTheDocument();
});