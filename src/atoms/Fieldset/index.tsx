import { ReactNode } from "react";
import styles from "./Fieldset.module.css";

interface FieldsetItem {
  legend: string;
  children: ReactNode;
}

/**
* Function component Fieldset - Represent the Fieldset Component
*/

const Fieldset : React.FC<FieldsetItem> = ({ legend, children } ) => {
  return (
    <fieldset className={styles.fieldset}>
      <legend>{legend}</legend>
      {children}
    </fieldset>
  );
};

export default Fieldset;
