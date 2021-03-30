import React, { createContext, ReactNode, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { darkTheme, lightTheme } from "../styles/Themes";
import { ThemeProvider } from "styled-components";

interface PersonalizedThemeContextData {
  currentTheme: any;
  changeTheme: () => void;
}

interface PersonalizedThemeContextProviderProps {
  children: ReactNode;
  savedTheme?: number;
}

export const PersonalizedThemeContext = createContext(
  {} as PersonalizedThemeContextData
);

export function PersonalizedThemeProvider({
  children,
  ...rest
}: PersonalizedThemeContextProviderProps) {
  // 1 dark theme, 2 light theme
  let [currentTheme, setCurrentTheme] = useState<number>(
    rest.savedTheme === undefined ? 1 : rest.savedTheme
  );

  function changeTheme() {
    setCurrentTheme(currentTheme === 1 ? 2 : 1);
  }

  useEffect(() => {
    Cookies.set("savedTheme", String(currentTheme), { expires: 365 * 10 });
  }, [currentTheme]);

  return (
    <PersonalizedThemeContext.Provider value={{ currentTheme, changeTheme }}>
      <ThemeProvider
        theme={
          currentTheme === 1 || currentTheme === undefined
            ? lightTheme
            : darkTheme
        }
      >
        {children}
      </ThemeProvider>
    </PersonalizedThemeContext.Provider>
  );
}
