import styles from "./Card.module.css";
import { Image } from "../Image/Image";
import { Info } from "../Info/Info";

export const Card = ({ personalInfo }) => {
  return (
    <section>
      <div className={styles.card}>
        <Image />
        <Info personalInfo={personalInfo} />
      </div>
    </section>
  );
};
