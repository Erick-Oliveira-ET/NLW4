import styles from "../styles/components/CompletedChalenges.module.css";

import React, { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengeContext";

const CompletedChalenges = () => {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <div className={styles.container}>
      <span>Desafios Completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
};

export default CompletedChalenges;
