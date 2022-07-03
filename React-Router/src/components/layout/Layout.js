import styles from "./Layout.module.css";
import { MainNavigation } from "./MainNavigation";
export const Layout = function (props) {
  return (
    <>
      <MainNavigation />
      <main className={styles.main}>{props.children}</main>
    </>
  );
};
