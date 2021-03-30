import React, { useContext, useState } from "react";
import { ChallengesContext } from "../contexts/ChallengeContext";
import {
  EditComponentContainer,
  MainEditChallengeContainer,
  MenuCircle,
} from "../styles/components/EditChallenges";

const EditChallenges = () => {
  const { challenges, updateChallenges } = useContext(ChallengesContext);

  const [clicked, setClick] = useState(false);
  const [page, setPage] = useState(0);

  function deleteChallenge(index: number) {
    let tempChallenges = [];
    console.log(index);
    challenges.forEach((challenge, i) => {
      console.log(i !== index);
      if (i !== index) {
        tempChallenges.push(challenge);
      }
    });
    updateChallenges(tempChallenges);
  }

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
              <img
                src="icons/trashCan.svg"
                onClick={(e) => deleteChallenge(page)}
              />
            </footer>
          </MainEditChallengeContainer>
        )}
      </MenuCircle>
    </EditComponentContainer>
  );
};

export default EditChallenges;
