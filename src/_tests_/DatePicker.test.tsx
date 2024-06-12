
import { screen, render, cleanup } from '@testing-library/react';
import DatePickerComponent from '../atoms/DatePicker';
afterEach(() => {
    cleanup();
  });

describe('DatePickerComponent', () => {
  test('renders label and id for accessibility', async() => {
    const htmlFor = 'datePickerInput';
    const label = 'Start Date';
    const id = 'datePickerInput';
    const name = 'datePickerInput';
    const minDate = new Date(2024, 3, 1);
    const maxDate = new Date(2024, 3, 30);
    const selectedDate = new Date("04/30/2024");
    const onChange = vi.fn();

    render(
      <DatePickerComponent
        htmlFor={htmlFor}
        label={label}
        id={id}
        name={name}
        minDate={minDate}
        maxDate={maxDate}
        selectedDate={selectedDate}
        onChange={onChange}
      />
    );
    
    const datePickerComponent = screen.getByLabelText('Start Date');
    expect(datePickerComponent).toBeInTheDocument();

    const datePickerInput = screen.getByRole('textbox');
    expect(datePickerInput).toHaveAttribute('id', id);
    expect(datePickerInput).toHaveAttribute('name', name);
    expect(datePickerInput).toHaveValue('04/30/2024');
  });
});