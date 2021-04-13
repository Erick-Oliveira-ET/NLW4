import styled from "styled-components";

const ChallengeBoxContainer = styled.div`
  height: 100%;

  background: ${(props) => props.theme.backgroundChallengeBox};
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  @media screen and (max-width: 600px) {
    position: ${(props) => (props.active ? "fixed" : "")};
    z-index: ${(props) => (props.active ? 1 : "")};

    display: ${(props) => (props.active ? "flex" : "none")};
    padding: ${(props) => (props.active ? "2rem 2rem 4rem 2rem" : "0")};
    margin: 0;
    width: ${(props) => (props.active ? "100vw" : 0)};
    height: ${(props) => (props.active ? "100vh" : 0)};

    .challengeActive main {
      flex: ${(props) => (props.active ? "" : 2)};
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  .challengeNotActive {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .challengeNotActive strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
  }

  .challengeNotActive p {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.4;
    max-width: 70%;
    margin-top: 3rem;
  }

  .challengeNotActive p img {
    margin-bottom: 1rem;
  }

  .challengeActive {
    height: 100%;

    display: flex;
    flex-direction: column;
  }

  .challengeActive header {
    color: ${(props) => props.theme.blue};
    font-weight: 600;
    font-size: 1.25rem;
    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }

  .challengeActive main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .challengeActive main strong {
    font-size: 2rem;
    font-weight: 600;
    color: ${(props) => props.theme.title};
    margin: 1.5rem 0 1rem;
  }

  .challengeActive main p {
    line-height: 1rem;
  }

  .challengeActive footer {
    width: 350px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .challengeActive footer button {
    height: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 5px;

    color: ${(props) => props.theme.white};

    font-size: 1rem;
    font-weight: 600;

    transition: filter 0.2s;
  }

  .challengeActive footer button.challengeFailedButton {
    background: ${(props) => props.theme.red};
  }

  .challengeActive footer button.challengeCompletedButton {
    background: ${(props) => props.theme.green};
  }

  .challengeActive footer button:hover {
    filter: brightness(0.9);
  }
`;

export { ChallengeBoxContainer };
