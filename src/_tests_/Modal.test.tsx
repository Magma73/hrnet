import { render, screen, cleanup } from '@testing-library/react';
import ModalComponent from '../molecules/Modal';

afterEach(() => {
  cleanup();
});

describe('Given I use the Modal Component in my App', () => {
  describe('When showModal is true', () => {
    test('Then, it should render Modal', () => {
      render(<ModalComponent showModal={true} closeModal={() => {}} />);
      expect(screen.getByText('Employee Created')).toBeInTheDocument();
      expect(screen.getByText('Close')).toBeInTheDocument();
      expect(screen.getByRole('img')).toBeInTheDocument();
      expect(screen.getByTestId('modal')).toBeInTheDocument();
    });
  });
});