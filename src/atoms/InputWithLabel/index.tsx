import styles from "./InputLabel.module.css";

interface InputItem {
  htmlFor: string;
  label: string;
  id: string;
  name: string;
  type: string;
  autoComplete?: string;
}

/**
 * Function component InputWithLabel - Represents an input field with a label.
 */

const InputWithLabel : React.FC<InputItem> = ({
  htmlFor,
  label,
  id,
  name,
  type,
  autoComplete,
}) => {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={htmlFor}>
        {label}
      </label>
      <input
        id={id}
        data-testid={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
      />
    </div>
  );
};

export default InputWithLabel;
