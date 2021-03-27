import React, { useContext } from "react";
import { CountdownContext } from "../contexts/CountdownContext";
import {
  CountdownButton,
  CountdownButtonActive,
  CountdownContainer,
} from "../styles/components/Countdown";

const Countdown = () => {
  const {
    minutes,
    seconds,
    isActive,
    hasFinished,
    resetCountdown,
    startCoutdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <CountdownContainer>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </CountdownContainer>

      {hasFinished ? (
        <CountdownButton>Ciclo Terminado</CountdownButton>
      ) : isActive ? (
        <CountdownButtonActive onClick={resetCountdown}>
          Abandonar Ciclo
        </CountdownButtonActive>
      ) : (
        <CountdownButton onClick={startCoutdown}>
          Iniciar um ciclo
        </CountdownButton>
      )}
    </div>
  );
};

export default Countdown;
