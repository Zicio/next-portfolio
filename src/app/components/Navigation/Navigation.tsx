import NavList from "../NavList/NavList";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <div className="container">
        <div className={styles["nav-row"]}>
          <a href="http://localhost:5173/" className={styles.logo}>
            <strong className={styles.strong}>Freelancer</strong> portfolio
          </a>
          <NavList />
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
