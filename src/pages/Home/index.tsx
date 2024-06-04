import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const EmployeeForm = lazy(() => import("../../molecules/Form"));

/**
* Function component Home - Represent the Home Page
*/
const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1} aria-level={1}>
        HR Net
      </h1>
      <section className={styles.section}>
        <Link to="/employeelist">View Current Employees</Link>
        <h2 className={styles.h2} aria-level={2}>
          Create Employee
        </h2>

        <Suspense fallback={<div>Loading</div>}>
          <EmployeeForm />
        </Suspense>
      </section>
    </div>
  );
};

export default Home;
