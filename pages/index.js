import axios from "axios";
import Head from "next/head";
import ContactInfo from "../components/ContactInfo";
import Main from "../components/Main";
import Portfolio from "../components/Portfolio";
import styles from "../styles/Home.module.scss";


export default function Home({ cards }) {
  return (
    <>
      <Head>
        <title>Mahmud Kaşgari`s Personal Website.</title>
        <meta
          name="This is Mahmud Kaşgari's Personal Website."
          content="Mahmud Kaşgari"
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />

      </Head>
      <div className={styles.container}>
        <Main />
        <Portfolio cards={cards} />
        <ContactInfo />
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const API_URL = process.env.LOCAL_URL || process.env.HOST_URL;
  const res = await axios.get(
    `${API_URL}/api/projects/`
  );
  //console.log("res:", res.data)
  return {
    props: {
      cards: res.data
    }
  }
}