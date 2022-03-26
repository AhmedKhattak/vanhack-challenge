import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "../src/pages/Home";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>VanHack</title>
        <meta name="description" content="No limits for talent" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage />
    </div>
  );
};

export default Home;
