import styles from "./Info.module.css";
import { useState } from "react";

export const Info = ({ personalInfo }) => {
  const [showInterests, setShowInterests] = useState(false);

  const handleShowInterests = () => {
    setShowInterests(!showInterests);
  };

  return (
    <div className={styles.profileInfo}>
      <h3>
        <b>Nombres y apellidos:</b> {personalInfo.name}
      </h3>
      <p>
        <b>Edad:</b> {personalInfo.age}
      </p>
      <p>
        <b>Profesión:</b> {personalInfo.profession}
      </p>
      <p>
        <b>Nacionalidad:</b> {personalInfo.nationality}
      </p>
      <p>
        <b>Email:</b>
        <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
      </p>

      <p>
        <button onClick={handleShowInterests}>Ver Intereses</button>
      </p>

      {showInterests && (
        <p>
          <b>Intereses:</b>
          <ul>
            {personalInfo.interests.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        </p>
      )}

      <a
        href={personalInfo.instagram}
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram
      </a>
    </div>
  );
};
