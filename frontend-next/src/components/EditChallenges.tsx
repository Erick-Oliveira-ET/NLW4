import React, { useContext, useState } from "react";
import { ChallengesContext } from "../contexts/ChallengeContext";
import {
  EditComponentContainer,
  MainEditChallengeContainer,
  MenuCircle,
} from "../styles/components/EditChallenges";

const EditChallenges = () => {
  const { challenges } = useContext(ChallengesContext);

  const [clicked, setClick] = useState(false);
  const [page, setPage] = useState(0);

  return (
    <EditComponentContainer>
      <MenuCircle active={clicked}>
        <div className={` ${clicked ? "row" : ""}`}>
          {clicked && <h2>Edit Challenges</h2>}
          <div className="clickedButton" onClick={(e) => setClick(!clicked)}>
            <div className={`bars ${clicked ? "active" : ""}`}></div>
            <div className={`bars ${clicked ? "active" : ""}`}></div>
            <div className={`bars ${clicked ? "active" : ""}`}></div>
          </div>
        </div>
        {clicked && (
          <MainEditChallengeContainer>
            <header>Ganhe {challenges[page].amount} xp</header>

            <main>
              <img src={`icons/${challenges[page].type}.svg`} alt="" />
              <strong>{challenges[page].description}</strong>
            </main>
            <footer>
              <img
                src="icons/arrow.svg"
                alt="back"
                onClick={(e) => setPage(page - 1 < 0 ? 0 : page - 1)}
              />
              <p>{`${page} / ${challenges.length - 1}`}</p>
              <img
                src="icons/arrow.svg"
                alt="next"
                onClick={(e) =>
                  setPage(page + 1 === challenges.length ? page : page + 1)
                }
              />
            </footer>
          </MainEditChallengeContainer>
        )}
      </MenuCircle>
    </EditComponentContainer>
  );
};

export default EditChallenges;
