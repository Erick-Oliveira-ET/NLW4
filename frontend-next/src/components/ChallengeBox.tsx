import React, { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengeContext";
import { CountdownContext } from "../contexts/CountdownContext";
import { ChallengeBoxContainer } from "../styles/components/ChallengeBox";

const ChallengeBox = () => {
  const {
    activeChallenge,
    resetChallenge,
    completeChallenge,
    createChallenge,
  } = useContext(ChallengesContext);

  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeComplete() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFail() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <ChallengeBoxContainer active={activeChallenge ? true : false}>
      {activeChallenge ? (
        <div className="challengeActive">
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
            <strong>Novo Desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              onClick={handleChallengeFail}
              className="challengeFailedButton"
            >
              Falhei
            </button>
            <button
              type="button"
              onClick={handleChallengeComplete}
              className="challengeCompletedButton"
            >
              Completei
            </button>
            <button
              type="button"
              onClick={createChallenge}
              className="redoChallenge"
            >
              <img
                src="/icons/sincronize.svg"
                className="redoChallengeIcon"
                alt=""
              />
            </button>
          </footer>
        </div>
      ) : (
        <div className="challengeNotActive">
          <strong>Finalize um ciclo para receber um desafio.</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de nível completando desafios.
          </p>
        </div>
      )}
    </ChallengeBoxContainer>
  );
};

export default ChallengeBox;
