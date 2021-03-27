import React, { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengeContext";
import {
  LevelUpModalContainer,
  Overlay,
} from "../styles/components/LevelUpModal";

const LevelupModal = () => {
  const { closeLevelupModal, level } = useContext(ChallengesContext);

  return (
    <Overlay>
      <LevelUpModalContainer>
        <header>{level}</header>

        <strong>Parabéns!</strong>
        <p>Você alcançou o próximo nível.</p>

        <button type="button" onClick={closeLevelupModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </LevelUpModalContainer>
    </Overlay>
  );
};

export default LevelupModal;
