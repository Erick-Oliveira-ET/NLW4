import Cookies from "js-cookie";
import { createContext, ReactNode, useEffect, useState } from "react";

import defaultChallenges from "../../challenges.json";
import LevelupModal from "../components/LevelupModal";

export interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallengeContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  experienceToNextLevel: number;
  activeChallenge: Challenge;
  challenges: Array<Challenge>;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  closeLevelupModal: () => void;
  createChallenge: () => void;
  updateChallenges: (updatedChallenges: Challenge[]) => void;
}

interface ChallengeProviderProps {
  children: ReactNode;
  level?: number;
  currentExperience?: number;
  challengesCompleted?: number;
  stoppedChallengeIndex?: number;
  challenges?: Array<Challenge>;
}

export const ChallengesContext = createContext({} as ChallengeContextData);

export function ChallengesProvider({
  children,
  ...rest
}: ChallengeProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [challenges, setChallenges] = useState<Challenge[]>(
    rest.challenges ?? (defaultChallenges as any)
  );
  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience ?? 0
  );
  const [challengesCompleted, setChallengesCompleted] = useState(
    rest.challengesCompleted ?? 0
  );
  const [stoppedIndex, setStoppedIndex] = useState(
    rest.stoppedChallengeIndex ?? 0
  );

  const [activeChallenge, setActiveChallenge] = useState(null);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    Cookies.set("level", String(level), { expires: 365 * 10 });
    Cookies.set("currentExperience", String(currentExperience), {
      expires: 365 * 10,
    });
    Cookies.set("challengesCompleted", String(challengesCompleted), {
      expires: 365 * 10,
    });
    Cookies.set("stoppedChallengeIndex", String(stoppedIndex), {
      expires: 365 * 10,
    });
  }, [level, currentExperience, challengesCompleted, stoppedIndex]);

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }

  function closeLevelupModal() {
    setIsLevelUpModalOpen(false);
  }

  function createChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);
  }

  function startNewChallenge() {
    let challenge;
    if (localStorage.getItem("challenges") != undefined) {
      challenge = JSON.parse(localStorage.getItem("challenges"));
      challenge = challenge[stoppedIndex];
      setStoppedIndex(stoppedIndex + 1);
    } else {
      challenge = challenges[stoppedIndex];
      setStoppedIndex(stoppedIndex + 1);
    }

    setActiveChallenge(challenge);

    new Audio("/notification.mp3").play();

    if (Notification.permission === "granted") {
      new Notification("Novo Desafio!!", {
        body: `Valendo ${challenge.amount} xp!!!`,
      });
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }

    let finalExperience = currentExperience + activeChallenge.amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }

  function updateChallenges(updatedChallenges: Array<Challenge>) {
    setChallenges(updatedChallenges);

    Cookies.set("challenges", JSON.stringify(updatedChallenges), {
      expires: 365 * 10,
    });
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        levelUp,
        challenges,
        startNewChallenge,
        experienceToNextLevel,
        activeChallenge,
        resetChallenge,
        completeChallenge,
        closeLevelupModal,
        createChallenge,
        updateChallenges,
      }}
    >
      {children}
      {isLevelUpModalOpen && <LevelupModal />}
    </ChallengesContext.Provider>
  );
}
