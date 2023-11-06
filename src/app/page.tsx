import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.hello}>Hello,</h1>

      <h3 className={styles.soon}>We are coming very soon.</h3>
      <p className={styles.contact}>
        Contact us at{" "}
        <a
          className={styles.link}
          href="mailto:mailtohitmandu@gmail.com"
          target="_blank"
        >
          mailtohitmandu@gmail.com
        </a>{" "}
        ,{" "}
        <a className={styles.link} href="tel:+9779801138122" target="_blank">
          9801138122
        </a>
      </p>
    </div>
  );
}
