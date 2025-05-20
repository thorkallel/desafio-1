import styles from "./Image.module.css";
import image from "../../assets/images/1729635612099.jpeg";

export const Image = () => {
  return (
    <div className={styles.profileImage}>
      <img src={image} alt="Imagen de perfil" />
    </div>
  );
};
