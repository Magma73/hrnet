import Select from "react-select";
import styles from "./Select.module.css";

interface Option {
    value: string;
    label: string;
  }

interface SelectItem {
  htmlFor: string;
  label: string;
  inputId: string;
  name: string;
  defaultValue: Option | null;
  onChange:  (option: Option | null) => void;
  options: Option[];
  placeholder: string;
}

/**
* Function component SelectComponent - Represents a select input component.
*/

const SelectComponent = ({
  htmlFor,
  label,
  inputId,
  name,
  defaultValue,
  onChange,
  options,
  placeholder,
} : SelectItem) => {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={htmlFor}>
        {label}
      </label>
      <Select
        className={styles.select}
        inputId={inputId}
        name={name}
        defaultValue={defaultValue}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SelectComponent;
