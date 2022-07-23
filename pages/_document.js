import { Html, Head, Main, NextScript } from "next/document";

import { actionType } from "../context/reducer";

//import styles from "../styles/darkMode.scss";
//className={darkMode ? styles.dark : styles.light}
export default function Document() {
  //const [{ darkMode }, dispatch] = useStateValue();
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
<link href="https://fonts.googleapis.com/css2?family=Edu+NSW+ACT+Foundation&family=Finger+Paint&display=swap" rel="stylesheet"/> 
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
