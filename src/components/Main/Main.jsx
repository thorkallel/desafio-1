import styles from "./Main.module.css";
import { Card } from "../Card/Card";

export const Main = ({ personalInfo }) => {
  return (
    <section>
      <main className={styles.main}>
        <Card personalInfo={personalInfo} />
      </main>
    </section>
  );
};
