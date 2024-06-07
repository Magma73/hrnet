import { Link, useRouteError } from "react-router-dom";
import styles from "./Error.module.css";

interface RouteError {
  status?: number;
  statusText?: string;
}

/**
 * Function component Error - Represents an error page component.
 */
const ErrorRedirection : React.FC = () => {
  const error = useRouteError() as RouteError;
  return (
    <div>
      <h1 className={styles.h1} aria-level={1}>
        Error Page
      </h1>
      <main className={styles.main}>
        <h2 className={styles.h2}>
          Error {error.status} {error.statusText}
        </h2>
        <Link to="/">Back to Home Page</Link>
      </main>
    </div>
  );
};

export default ErrorRedirection;
