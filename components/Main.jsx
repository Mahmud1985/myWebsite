import styles from "../styles/Main.module.scss";
import main_img from "../public/img/main_img.png";
import react from "../public/img/react.svg";
import nextjs from "../public/img/nextjs.svg";
import nodejs from "../public/img/nodejs.svg";
import redux from "../public/img/redux.svg";
import html5 from "../public/img/html5.svg";
import css3 from "../public/img/css3.svg";
import javascript from "../public/img/javascript.svg";
import Image from "next/image";
import { MyThemeContext } from "../context/themeContext";

import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import { useState } from "react";

const Main = () => {
  const [{ darkMode }] = MyThemeContext();
  const [contactOpen, setContactOpen] = useState(false);
  const backgroundStyle = {
    bgColor: {
      backgroundColor: darkMode ? "#5c6f70" : "#abf7f7",
      opacity: darkMode ? 0.75 : 0.85,
    },
  };

  const icons = [
    {
      name: "react",
      src: react,
    },
    {
      name: "nextjs",
      src: nextjs,
    },
    {
      name: "nodejs",
      src: nodejs,
    },
    {
      name: "redux",
      src: redux,
    },
    {
      name: "html5",
      src: html5,
    },
    {
      name: "css3",
      src: css3,
    },
    {
      name: "javascript",
      src: javascript,
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.desc}>
          <h1>Hi, I am <span className={styles.name}>Mahmud Kaşgari</span></h1>
          <p>
            I'm a <i>full-stack</i> web developer.
          </p>
          <p>
            Recently I engage in <strong>Next.js</strong> which is my favorite web
            develop framework.
          </p>
          <p>
            I love simple but efective solutions and trying to do all my coding in
            that way.
          </p>
          <p>welcome use one of these channel to contact me...</p>
        </div>
        <div className={styles.contact}>
          <span onClick={() => setContactOpen(!contactOpen)}>
            Gmail: <EmailIcon />
          </span>
          <span>
            LinkedIn: <LinkedInIcon />
          </span>
          <span>
            Telegram: <TelegramIcon />
          </span>
          <span>
            Whatsapp: <WhatsappIcon />
          </span>
        </div>
        {contactOpen && (<div className={styles.contact_gmail} >mahmudkasgari85@gmail.com</div>)}
      </div>
      <div className={styles.right}>
        <div className={styles.imgContainer}>
          <div className={styles.main_img}>
            <Image
              className={styles.img}
              style={backgroundStyle.bgColor}
              src={main_img}
              layout="fill"
              objectFit="contain"
              alt=""
            />
          </div>
          <div className={styles.iconContainer}>
            {icons.map((item, i) => (
              <div className={styles.icons} key={i}>
                <Image
                  className={styles.icon}
                  src={item.src}
                  objectFit="contain"
                  layout="fill"
                  style={backgroundStyle.bgColor}
                  alt={item.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
