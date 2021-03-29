import styled from "styled-components";

const EditComponentContainer = styled.div``;

const MainEditChallengeContainer = styled.div`
  flex: 1;
  overflow: hidden;

  padding: 1.5rem 2rem;
  text-align: center;

  display: flex;
  flex-direction: column;

  header {
    color: ${(props) => props.theme.blue};
    font-weight: 600;
    font-size: 1.5rem;
    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  main strong {
    font-size: 1.5rem;
    font-size: 1.5rem;
    font-weight: 600;
    color: ${(props) => props.theme.title};
    margin: 1.5rem 0 1rem;
  }

  footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    img {
      width: 40px;
      height: 40px;
      color: ${(props) => props.theme.text};

      cursor: pointer;
    }

    img:first-child {
      transform: rotateZ(90deg);
    }
    img:last-child {
      transform: rotateZ(-90deg);
    }
  }
`;

const MenuCircle = styled.div`
  position: fixed;
  margin: ${(props) => (props.active ? "auto" : 0)};
  bottom: ${(props) => (props.active ? "50%" : "10px")};
  right: ${(props) => (props.active ? "50%" : "60px")};
  transform: ${(props) => (props.active ? "translate(50%, 50%)" : "none")};

  border: 3px solid
    ${(props) => (props.active ? props.theme.experiece : "none")};
  border-radius: ${(props) => (props.active ? "20px" : "50%")};

  background-color: ${(props) => props.theme.backgroundChallengeBox};

  width: ${(props) => (props.active ? "600px" : "60px")};
  height: ${(props) => (props.active ? "600px" : "60px")};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  transition: filter 0.2s;
  transition: 0.3s;

  .row {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    h2 {
      color: ${(props) => props.theme.countdownButton};
      padding-left: 20px;
    }
  }

  > div:first-child {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 60px;
  }

  div .clickedButton {
    border: 3px solid
      ${(props) => (props.active ? "transparent" : props.theme.experiece)};
    position: relative;
    cursor: pointer;
    width: ${(props) => (props.active ? "60px" : "60px")};
    height: ${(props) => (props.active ? "60px" : "60px")};

    padding: 15px;
    margin: ${(props) => (props.active ? "10px 10px 0 0" : "0")};

    border-radius: 50%;

    background-color: ${(props) => props.theme.backgroundChallengeBox};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    align-self: flex-end;

    :hover {
      filter: brightness(1.5);
    }

    div.bars {
      background-color: ${(props) => props.theme.text};
      border-radius: 2px;
      width: 100%;
      height: 4px;
    }

    div:first-child.bars.active {
      position: absolute;
      width: 40%;
      transform: rotateZ(45deg);
    }

    div:nth-child(2).bars.active {
      display: none;
    }
    div:nth-child(3).bars.active {
      position: absolute;
      width: 40%;
      transform: rotateZ(-45deg);
    }
  }
`;

export { EditComponentContainer, MainEditChallengeContainer, MenuCircle };
