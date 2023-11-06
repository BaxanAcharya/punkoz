import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.hello}>Hello,</h1>

      <h3 className={styles.soon}>We are coming very soon.</h3>
      <p className={styles.contact}>
        Contact us at mailtohitmandu@gmail.com, 9801138122
      </p>
    </div>
  );
}
