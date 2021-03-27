import styled from "styled-components";

const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: ${(props) => props.theme.title};

  > div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: ${(props) => props.theme.backgroundCountdown};
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;
  }

  > div span {
    flex: 1;
  }

  > div span:first-child {
    border-right: 1px solid #44568d;
  }

  > div span:last-child {
    border-left: 1px solid #44568d;
  }

  > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }

  .countDownButton {
    width: 100%;
    height: 5rem;

    margin-top: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 5px;

    background: ${(props) => props.theme.countdownButton};
    color: ${(props) => props.theme.countdownButtonText};

    font-size: 1.25rem;
    font-weight: 600;

    transition: background-color 0.2;
  }

  .countDownButton:not(:disabled):hover {
    background: ${(props) => props.theme.countdownButtonHover};
  }

  .countDownButtonActive {
    background: ${(props) => props.theme.countdownButtonActive};
    color: ${(props) => props.theme.title};
  }

  .countDownButtonActive:not(:disabled):hover {
    background: ${(props) => props.theme.red};
    color: #ffffff;
  }

  .countDownButton:disabled {
    background: ${(props) => props.theme.white};
    color: ${(props) => props.theme.title};
    cursor: not-allowed;
  }
`;

const CountdownButton = styled.button`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  background: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.white};

  font-size: 1.25rem;
  font-weight: 600;

  transition: background-color 0.2;

  :not(:disabled):hover {
    background: ${(props) => props.theme.blueDark};
  }

  :disabled {
    background: ${(props) => props.theme.backgroundChallengeBox};
    color: ${(props) => props.theme.title};
    cursor: not-allowed;
  }
`;

const CountdownButtonActive = styled(CountdownButton)`
  background: ${(props) => props.theme.countdownButtonActive};
  color: ${(props) => props.theme.countdownButtonTextActive};

  :not(:disabled):hover {
    background: ${(props) => props.theme.countdownButtonActiveHover};
    color: #ffffff;
  }
`;

export { CountdownContainer, CountdownButton, CountdownButtonActive };
