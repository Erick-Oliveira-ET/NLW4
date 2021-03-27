import React from "react";
import CompletedChalenges from "../components/CompletedChalenges";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import Countdown from "../components/Countdown";
import ChallengeBox from "../components/ChallengeBox";

import Head from "next/head";
import { ChallengesProvider } from "../contexts/ChallengeContext";
import { GetServerSideProps } from "next";
import { CountdownProvider } from "../contexts/CountdownContext";
import { HomeContainer } from "../styles/pages/Home";
import { darkTheme, lightTheme } from "../styles/Themes";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/Global";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ThemeProvider theme={darkTheme}>
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
              <div>
                <CompletedChalenges />
                <Countdown />
                <Profile />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </HomeContainer>
      </ChallengesProvider>
    </ThemeProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
