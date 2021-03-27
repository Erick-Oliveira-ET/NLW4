import React, { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengeContext";
import { CompletedChallengesContainer } from "../styles/components/CompletedChallenges";

const CompletedChalenges = () => {
  const { challengesCompleted, level } = useContext(ChallengesContext);

  return (
    <CompletedChallengesContainer>
      <div className="row">
        <div>
          <img src="icons/level.svg" alt="" />
          <span>Level</span>
        </div>
        <span>{level}</span>
      </div>
      <div className="row">
        <span>Desafios Completos</span>
        <span>{challengesCompleted}</span>
      </div>
    </CompletedChallengesContainer>
  );
};

export default CompletedChalenges;
