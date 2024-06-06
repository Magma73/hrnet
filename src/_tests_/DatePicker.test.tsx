
import { screen, render, cleanup, waitFor } from '@testing-library/react';
import DatePickerComponent from '../atoms/DatePicker';
import {userEvent} from '@testing-library/user-event';
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
    const selectedDate = new Date(2024, 3, 30);
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
    const datePickerInput = screen.getByRole('textbox');
    // await userEvent.type(datePickerInput, selectedDate.toLocaleDateString());

    // Wait for asynchronous updates (if necessary)
    // await waitFor(() => expect(onChange).toHaveBeenCalled());

    const datePickerComponent = screen.getByLabelText('Start Date');
    expect(datePickerComponent).toBeInTheDocument();
      
    // const labelElement = screen.getByLabelText(label);
    // expect(labelElement).toBeInTheDocument();
    // expect(datePickerInput).toHaveAttribute('htmlFor', htmlFor);

    // const datePickerInput = screen.getByRole('textbox');
    expect(datePickerInput).toBeInTheDocument();
    // expect(inputElement).toHaveAttribute('htmlFor', htmlFor);
    expect(datePickerInput).toHaveAttribute('id', id);
    expect(datePickerInput).toHaveAttribute('name', name);
    // expect(datePickerInput).toHaveAttribute('selectedDate', selectedDate);
    expect(datePickerInput.value).toBe('04/30/2024');

  });
  
});