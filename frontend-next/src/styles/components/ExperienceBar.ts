import styled, { keyframes } from "styled-components";

const glowing = keyframes`
  0%,
    100% {
      box-shadow: 0px 0px 19px 2px rgba(76, 214, 43, 0.94);
    }
    50% {
      box-shadow: 0px 0px 19px 4px rgba(76, 214, 43, 0.94);
    }
`;

const ExperienceBarContainer = styled.header`
  margin-bottom: 25px;

  display: flex;
  align-items: center;

  > div {
    flex: 1;
    height: 4px;
    border-radius: 4px;
    margin: 0 1.5rem;
    position: relative;
    background: ${(props) => props.theme.emptyExperience};
  }

  > div > div {
    height: 4px;
    border-radius: 4px;
    background-color: ${(props) => props.theme.experience};
    box-shadow: 0px 0px 19px 3px rgba(76, 214, 43, 0.94);
    animation: ${glowing} 4s ease-in-out infinite;
  }

  span.currentExperience {
    position: absolute;
    top: 12px;
    transform: translateX(-50%);
  }
`;

export { ExperienceBarContainer };
