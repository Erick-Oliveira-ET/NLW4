import CompletedChalenges from "../components/CompletedChalenges";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import Countdown from "../components/Countdown";
import ChallengeBox from "../components/ChallengeBox";

import styles from "../styles/pages/Home.module.css";
import Head from "next/Head";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | Home</title>
      </Head>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChalenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  );
}
