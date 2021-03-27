import React, { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengeContext";
import { ExperienceBarContainer } from "../styles/components/ExperienceBar";

const ExperienceBar = () => {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <ExperienceBarContainer>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span
          className="currentExperience"
          style={{ left: `${percentToNextLevel}%` }}
        >
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </ExperienceBarContainer>
  );
};

export default ExperienceBar;
