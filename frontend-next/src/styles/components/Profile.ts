import styled from "styled-components";

const Container = styled.div`
  a {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }

  > a > img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
  }

  a div {
    margin-left: 1.5rem;
  }

  a div strong {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${(props) => props.theme.title};
  }

  a div p {
    font-size: 1rem;
    margin-top: 0.5rem;
  }

  @media screen and (max-width: 700px) {
    height: 100%;

    display: flex;
    justify-self: flex-end;
  }
`;

export { Container };
