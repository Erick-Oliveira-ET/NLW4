import React, { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengeContext";
import {
  ExperienceBarContainer,
  ExperienceContainer,
} from "../styles/components/ExperienceBar";
import ThemeTrigger from "./ThemeTrigger";

const ExperienceBar = () => {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <ExperienceContainer>
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
      <ThemeTrigger />
    </ExperienceContainer>
  );
};

export default ExperienceBar;
