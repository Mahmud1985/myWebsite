import Head from "next/head";
import Main from "../components/Main";
import Portfolio from "../components/Portfolio";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mahmud Kaşgari's Personal Website.</title>
        <meta
          name="This is Mahmud Kaşgari's Personal Website."
          content="Mahmud Kaşgari"
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Main />
        <Portfolio />
      </div>
    </>
  );
}
