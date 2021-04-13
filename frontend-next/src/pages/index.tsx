import React from "react";
import CompletedChalenges from "../components/CompletedChalenges";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import Countdown from "../components/Countdown";
import ChallengeBox from "../components/ChallengeBox";

import Head from "next/head";
import { Challenge, ChallengesProvider } from "../contexts/ChallengeContext";
import { GetServerSideProps } from "next";
import { CountdownProvider } from "../contexts/CountdownContext";
import { HomeContainer, MainContainer } from "../styles/pages/Home";
import { GlobalStyle } from "../styles/Global";
import { PersonalizedThemeProvider } from "../contexts/PersonalizedThemeContext";
import EditChallenges from "../components/EditChallenges";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  savedTheme: number;
  stoppedChallengeIndex: number;
  challenges: Array<Challenge>;
}

export default function Home(props: HomeProps) {
  return (
    <PersonalizedThemeProvider savedTheme={props.savedTheme}>
      <GlobalStyle />
      <ChallengesProvider
        level={props.level}
        currentExperience={props.currentExperience}
        challengesCompleted={props.challengesCompleted}
        challenges={props.challenges}
        stoppedChallengeIndex={props.stoppedChallengeIndex}
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
  let {
    level,
    currentExperience,
    challengesCompleted,
    savedTheme,
    stoppedChallengeIndex,
    challenges,
  } = ctx.req.cookies;

  challenges = challenges == null ? null : JSON.parse(challenges);

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
      savedTheme: Number(savedTheme),
      challenges,
      stoppedChallengeIndex: Number(stoppedChallengeIndex),
    },
  };
};
