import React, { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengeContext";
import { ExperienceBarContainer } from "../styles/components/ExperienceBar";
import ThemeTrigger from "./ThemeTrigger";

const ExperienceBar = () => {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "space-between",
      }}
    >
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
    </div>
  );
};

export default ExperienceBar;
