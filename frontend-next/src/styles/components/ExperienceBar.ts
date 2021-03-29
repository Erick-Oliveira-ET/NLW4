import styled, { keyframes } from "styled-components";

const glowing = (color) => keyframes`
  0%,
    100% {
      box-shadow: 0px 0px 19px 2px ${color};
    }
    50% {
      box-shadow: 0px 0px 19px 4px ${color};
    }
`;

const ExperienceBarContainer = styled.header`
  width: 100%;
  padding-right: 20px;
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
    animation: ${(props) => glowing(props.theme.experienceGlowing)} 4s
      ease-in-out infinite;
  }

  span.currentExperience {
    position: absolute;
    top: 12px;
    transform: translateX(-50%);
  }
`;

const ExperienceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: space-between;

  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
`;

export { ExperienceBarContainer, ExperienceContainer };
