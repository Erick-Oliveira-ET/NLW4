import React, { useContext } from "react";
import { ThemeTriggerContainer } from "../styles/components/ThemeTrigger";
import { ThemeContext } from "styled-components";
import { PersonalizedThemeContext } from "../contexts/PersonalizedThemeContext";

const ThemeTrigger = () => {
  const { changeTheme, currentTheme } = useContext(PersonalizedThemeContext);

  return (
    <ThemeTriggerContainer>
      <div onClick={changeTheme} className="toggle-btn" id="_1st-toggle-btn">
        <input
          type="checkbox"
          readOnly
          checked={currentTheme === 2 ? true : false}
        />
        <span></span>
      </div>
    </ThemeTriggerContainer>
  );
};

export default ThemeTrigger;
