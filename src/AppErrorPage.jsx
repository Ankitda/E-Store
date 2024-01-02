import { useRouteError } from "react-router-dom";
import styles from "./AppErrorPage.module.css"
const AppErrorPage = () => {

    const errorGet = useRouteError();
  
    return (
      <div className={styles["error-page"]}>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{errorGet.statusText || errorGet.message}</i>
        </p>
      </div>
  )
}

export default AppErrorPage