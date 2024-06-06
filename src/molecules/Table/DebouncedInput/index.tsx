import { useState, useEffect } from "react";

interface DebouncedInputItem {
  value: string;
  id: string;
  htmlFor: string;
  label: string;
  onChange: (value: string) => void;
  debounce: number;
  testId: string;
}

/**
* Function for input with debounce for value change.
*/

const DebouncedInput = ({
  value: initialValue,
  id,
  htmlFor,
  label,
  onChange,
  debounce = 500,
  testId,
  ...props
}: DebouncedInputItem) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value, debounce, onChange]);

  /**
   * Handles the value change of the input.
   * @param {object} event - The input change event.
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        {...props}
        value={value}
        id={id}
        data-testid={testId}
        onChange={handleChange}
      />
    </div>
  );
};

export default DebouncedInput;
