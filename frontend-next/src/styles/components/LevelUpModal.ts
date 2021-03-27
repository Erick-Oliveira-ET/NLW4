import styled from "styled-components";

const LevelUpModalContainer = styled.div`
  background: ${(props) => props.theme.backgroundCountdown};
  width: 100%;
  max-width: 480px;
  padding: 2rem 3rem;
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  text-align: center;
  position: relative;

  header {
    font-size: 8.75rem;
    font-weight: 600;
    color: ${(props) => props.theme.blue};
    background: url("/icons/levelup.svg") no-repeat center;
    background-size: contain;
  }

  strong {
    font-size: 2.25rem;
    color: ${(props) => props.theme.title};
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme.text};
    margin-top: 0.25rem;
  }

  button {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    background: transparent;
    border: 0;
    font-size: 0px;
  }
`;

const Overlay = styled.div`
  background: ${(props) => props.theme.modalOpacityBackgroundColor};

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export { LevelUpModalContainer, Overlay };
