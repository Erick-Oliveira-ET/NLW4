import styled from "styled-components";

const ThemeTriggerContainer = styled.div`
  .toggle-btn {
    position: relative;
    width: 58px;
    height: 30px;
    margin: 0 auto;
    border-radius: 40px;
  }

  input[type="checkbox"] {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    margin: 0px;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
  }

  /* First toggle btn */

  #_1st-toggle-btn span {
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    overflow: hidden;
    opacity: 1;
    background-color: #fff;
    border-radius: 40px;
    transition: 0.2s ease background-color, 0.2s ease opacity;
  }

  #_1st-toggle-btn span:before,
  #_1st-toggle-btn span:after {
    content: "";
    position: absolute;
    top: 1px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    transition: 0.5s ease transform, 0.2s ease background-color;
  }

  #_1st-toggle-btn span:before {
    background-color: #fff;
    transform: translate(-34px, 1px);
    z-index: 1;
  }

  #_1st-toggle-btn span:after {
    background-color: #000;
    transform: translate(1px, 1px);
    z-index: 0;
  }

  #_1st-toggle-btn input[type="checkbox"]:checked + span {
    background-color: #000;
  }

  #_1st-toggle-btn input[type="checkbox"]:active + span {
    opacity: 0.5;
  }

  #_1st-toggle-btn input[type="checkbox"]:checked + span:before {
    background-color: #000;
    transform: translate(23px, -3px);
  }

  #_1st-toggle-btn input[type="checkbox"]:checked + span:after {
    background-color: #fff;
    transform: translate(29px, 2px);
  }
`;

export { ThemeTriggerContainer };
