import styled from "styled-components";

const CompletedChallengesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 1.5rem 0rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #44568d;

  font-weight: 500;

  div.row img {
    margin-right: 10px;
  }
  div.row {
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  span:first-child {
    font-size: 1.25rem;
  }

  span:last-child {
    font-size: 1.5rem;
  }
`;

export { CompletedChallengesContainer };
