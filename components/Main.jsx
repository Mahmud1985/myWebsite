import styles from "../styles/Main.module.scss";
import main_img from "../public/img/main_img.png";
import Image from "next/image";
import { MyThemeContext } from "../context/themeContext";

import Icons from "./Icons";
import ContactWidget from "./ContactWidget";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const Main = () => {
  const [{ darkMode }] = MyThemeContext();

  const backgroundStyle = {
    bgColor: {
      backgroundColor: darkMode ? "#5c6f70" : "#abf7f7",
      opacity: darkMode ? 0.75 : 0.85,
    },
  };

  const main_animation = useRef();
  useEffect(() => {
    gsap.to(main_animation.current, {
      // rotation: 360,
      //x: '30vw',
      ease: "bounce.out",
      yPercent: 30, // Move horizontally (percentage of element's width)
      duration: 2, // how long the animation lasts
      repeat: 1, // the number of repeats - this will play 3 times
      //yoyo: true, // this will alternate back and forth on each repeat. Like a yoyo
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.desc}>
          <h1>
            Hi, I am <span className={styles.name}>Mahmud Kaşgari</span>
          </h1>
          <p>
            I`m a <i>full-stack</i> web developer.
          </p>
          <p>
            Recently I engage in <strong>Next.js</strong> which is my favorite
            web develop framework.
          </p>
          <p>
            I love simple but efective solutions and trying to do all my coding
            in that way.
          </p>
          <p>welcome use one of these channel to contact me...</p>
        </div>
        <ContactWidget />
      </div>
      <div className={styles.right}>
        <div className={styles.imgContainer}>
          <div
            className={`${styles.main_img} ${styles.border}`}
            ref={main_animation}
          >
            <Image
              className={styles.img}
              style={backgroundStyle.bgColor}
              src={main_img}
              layout="fill"
              objectFit="contain"
              alt=""
            />
          </div>
          <Icons />
        </div>
      </div>
    </div>
  );
};
export default Main;
