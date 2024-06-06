import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import SelectComponent from '../atoms/SelectInput';
afterEach(() => {
  cleanup();
});

describe('Given I use the SelectComponent Component in my App', () => {
  describe('When I render InputWithLabel with specific props', () => {
    test('Then, it should render the InputWithLabel component with customized information', () => {
      const options = [
        { value: 'Sales', label: 'Sales' },
        { value: 'Marketing', label: 'Marketing' },
        { value: 'Engineering', label: 'Engineering' },
        { value: 'Human Resources', label: 'Human Resources' },
        { value: 'Legal', label: 'Legal' },
      ];
      const onChange = vi.fn();
      const newOption = [{ value : 'Legal', label: 'Legal' }];
      console.log(newOption[0]);

       render(
        <SelectComponent
          htmlFor="department"
          label="Department"
          inputId="department"
          name="department"
          defaultValue={options[0]}
          onChange={onChange}
          options={options}
          placeholder="Sales"
        />
      );

      const inputLabel = screen.getByLabelText('Department');
      expect(inputLabel).toBeInTheDocument();

      const inputLabelText = screen.getByText('Department');
      expect(inputLabelText).toBeInTheDocument();

      const inputRole = screen.getByRole('combobox');
      expect(inputRole).toHaveAttribute('id', 'department');
      expect(inputRole).toHaveAttribute('type', 'text');

      const inputPlaceholder = screen.getByDisplayValue('Sales');
      expect(inputPlaceholder).toBeInTheDocument();      

      fireEvent.change(inputRole, { target: { value: options[3].value } });
      expect(inputRole.value).toBe(options[3].value);
    });
  });
});