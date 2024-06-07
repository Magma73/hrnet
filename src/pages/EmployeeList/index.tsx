import { Link } from "react-router-dom";
import TableComponent from "../../molecules/Table";
import styles from "./EmployeeList.module.css";

/**
* Function component EmployeeList - Represent the EmployeeList Page
*/
const EmployeeList : React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Current Employees</h1>
      <main className={styles.main}>
        <TableComponent />
        <Link to="/" className={styles.homeLink}>
          Home
        </Link>
      </main>
    </div>
  );
};

export default EmployeeList;
