import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DatePicker.module.css";

interface DatePickerItem {
  htmlFor: string;
  label: string;
  id: string;
  name: string;
  minDate?: Date;
  maxDate?: Date;
  selectedDate: Date | null;
  onChange: (date: Date | null) => void;
}

/**
 * Function component DatePickerComponent - Represents a date picker component.
 */

const DatePickerComponent: React.FC<DatePickerItem> = ({
  htmlFor,
  label,
  id,
  name,
  minDate,
  maxDate,
  selectedDate,
  onChange,
}) => {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={htmlFor}>
        {label}
      </label>
      <DatePicker
        className={styles.datepicker}
        id={id}
        name={name}
        minDate={minDate}
        maxDate={maxDate}
        selected={selectedDate}
        onChange={onChange}
      />
    </div>
  );
};

export default DatePickerComponent;
