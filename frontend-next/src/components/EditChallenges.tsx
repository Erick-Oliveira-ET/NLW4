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
  const [type, setType] = useState<"body" | "eye">("body");
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");

  function deleteChallenge(index: number) {
    let tempChallenges = [];
    challenges.forEach((challenge, i) => {
      if (i !== index) {
        tempChallenges.push(challenge);
      }
    });
    updateChallenges(tempChallenges);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setClick(false);

    let tempChallenges = challenges;

    tempChallenges.push({ amount, description, type });

    updateChallenges(tempChallenges);
  }

  return (
    <EditComponentContainer>
      <MenuCircle active={clicked}>
        <div className={` ${clicked ? "row" : ""}`}>
          {clicked && <h2>Challenges</h2>}
          <div className="clickedButton" onClick={(e) => setClick(!clicked)}>
            <div className={`bars ${clicked ? "active" : ""}`}></div>
            <div className={`bars ${clicked ? "active" : ""}`}></div>
            <div className={`bars ${clicked ? "active" : ""}`}></div>
          </div>
        </div>
        {clicked && (
          <MainEditChallengeContainer>
            {page === challenges.length ? (
              <form onSubmit={(e) => handleSubmit(e)}>
                <header>
                  Ganhe{" "}
                  <input
                    type="number"
                    onChange={(e) => setAmount(Number(e.target.value))}
                    required
                  />{" "}
                  xp
                </header>

                <main>
                  <img src={`/icons/${type}.svg`} alt="" />
                  <select
                    name="type"
                    id="type"
                    required
                    onChange={(e) => setType(e.target.value as any)}
                  >
                    <option value="body">Body</option>
                    <option value="eye">Eye</option>
                  </select>
                  <textarea
                    required
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Digite as instruções para a sua atividade."
                  />
                </main>
                <footer>
                  <img
                    src="icons/arrow.svg"
                    alt="back"
                    onClick={(e) => setPage(page - 1 < 0 ? 0 : page - 1)}
                  />
                  <button type="submit">Adicionar</button>
                </footer>
              </form>
            ) : (
              <>
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
                    src={`icons/${
                      page + 1 === challenges.length ? "add" : "arrow"
                    }.svg`}
                    alt="next"
                    onClick={(e) =>
                      setPage(page === challenges.length ? page : page + 1)
                    }
                  />
                  <img
                    src="icons/trashCan.svg"
                    onClick={(e) => deleteChallenge(page)}
                  />
                </footer>
              </>
            )}
          </MainEditChallengeContainer>
        )}
      </MenuCircle>
    </EditComponentContainer>
  );
};

export default EditChallenges;
