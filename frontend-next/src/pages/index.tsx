import React, { useContext, useEffect } from "react";
import CompletedChalenges from "../components/CompletedChalenges";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import Countdown from "../components/Countdown";
import ChallengeBox from "../components/ChallengeBox";

import Head from "next/head";
import { ChallengesProvider } from "../contexts/ChallengeContext";
import { GetServerSideProps } from "next";
import { CountdownProvider } from "../contexts/CountdownContext";
import { HomeContainer, MainContainer } from "../styles/pages/Home";
import { darkTheme, lightTheme } from "../styles/Themes";
import { GlobalStyle } from "../styles/Global";
import ThemeTrigger from "../components/ThemeTrigger";
import {
  PersonalizedThemeContext,
  PersonalizedThemeProvider,
} from "../contexts/PersonalizedThemeContext";
import EditChallenges from "../components/EditChallenges";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  savedTheme: number;
}

export default function Home(props: HomeProps) {
  const { currentTheme } = useContext(PersonalizedThemeContext);

  useEffect(() => {
    console.log(currentTheme);
  }, [currentTheme]);

  return (
    <PersonalizedThemeProvider savedTheme={props.savedTheme}>
      <GlobalStyle />
      <ChallengesProvider
        level={props.level}
        currentExperience={props.currentExperience}
        challengesCompleted={props.challengesCompleted}
      >
        <HomeContainer>
          <Head>
            <title>Início | Home</title>
          </Head>
          <ExperienceBar />

          <CountdownProvider>
            <section>
              <MainContainer>
                <CompletedChalenges />
                <Countdown />
                <Profile />
              </MainContainer>
              <ChallengeBox />
            </section>
          </CountdownProvider>
        </HomeContainer>
        <EditChallenges />
      </ChallengesProvider>
    </PersonalizedThemeProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    level,
    currentExperience,
    challengesCompleted,
    savedTheme,
  } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
      savedTheme: Number(savedTheme),
    },
  };
};
