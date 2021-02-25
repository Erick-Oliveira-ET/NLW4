import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengeContext";
import styles from "../styles/components/Profile.module.css";

const Profile = () => {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.container}>
      <img
        src="https://avatars.githubusercontent.com/u/53864964?s=60&v=4"
        alt="Erick Tomaz"
      />
      <div>
        <strong>Erick Tomaz Oliveira</strong>
        <p>
          <img src="icons/level.svg" alt="" /> Level {level}
        </p>
      </div>
    </div>
  );
};

export default Profile;
