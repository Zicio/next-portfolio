import styles from "./Title.module.css";

const Title = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <strong className={styles.strong}>
            Hi, my name is <em className={styles.em}>Alexander</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className={styles.text}>
          <p>with passion for learning and creating.</p>
        </div>
        <button className={styles.btn}>Visit my GH repositories</button>
      </div>
    </header>
  );
};
export default Title;
