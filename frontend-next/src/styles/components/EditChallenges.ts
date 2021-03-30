import styled from "styled-components";

const EditComponentContainer = styled.div``;

const MainEditChallengeContainer = styled.div`
  flex: 1;
  overflow: hidden;

  padding: 1.5rem 2rem;
  text-align: center;

  display: flex;
  flex-direction: column;

  width: 100%;

  header {
    width: 100%;
    color: ${(props) => props.theme.blue};
    font-weight: 600;
    font-size: 1.5rem;
    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }

  form {
    width: 100%;
    flex: 1;
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    header {
      input {
        width: 80px;
        height: 40px;

        font-size: 1.5rem;
        font-size: 1.5rem;
        font-weight: 600;
        color: ${(props) => props.theme.textHighlight};
      }
    }

    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      padding: 40px 0;
      width: 100%;

      img {
        padding-bottom: 10px;
      }

      select {
        margin: 10px;
        font-size: 1.2rem;
        font-size: 1.2rem;
        font-weight: 600;
        color: #646464;

        padding: 5px 30px;
        border: none;
        border-radius: 4px;
      }

      textarea {
        width: 100%;
        height: 140px;

        font-size: 1.5rem;
        font-size: 1.5rem;
        font-weight: 600;
        color: #363636;

        border: none;
        border-radius: 20px;

        padding: 10px;
        text-align: center;

        @media screen and (max-width: 600px) {
          flex: 1;
        }
      }
    }

    footer {
      button {
        padding: 10px 20px;
        background: ${(props) => props.theme.green};
        color: ${(props) => props.theme.white};

        border: none;
        border-radius: 10px;
      }
      img {
      }

      img:first-child {
      }
      img:last-child {
      }
    }
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
      margin: 0 20px;

      cursor: pointer;
    }

    img:first-child {
      transform: rotateZ(180deg);
    }
    img:last-child {
      margin: 0;
    }
  }
`;

const MenuCircle = styled.div`
  position: fixed;
  margin: ${(props) => (props.active ? "auto" : 0)};
  bottom: ${(props) => (props.active ? "50%" : "30px")};
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

  @media screen and (max-width: 600px) {
    width: ${(props) => (props.active ? "100vw" : "60px")};
    height: ${(props) => (props.active ? "100vh" : "60px")};
  }

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
