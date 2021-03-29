import styled from "styled-components";

const HomeContainer = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;

  section {
    flex: 1;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;
  }

  @media screen and (max-width: 700px) {
    flex: 1;
    section {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  }
`;

const MainContainer = styled.div`
  padding-top: 20px;

  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  > div:nth-child(3) {
    align-items: flex-end;
  }
`;

export { HomeContainer, MainContainer };
