import styles from "../styles/Icons.module.scss";
import React, { useEffect, useRef } from "react";
import react from "../public/img/react.svg";
import nextjs from "../public/img/nextjs.svg";
import nodejs from "../public/img/nodejs.svg";
import redux from "../public/img/redux.svg";
import html5 from "../public/img/html5.svg";
import css3 from "../public/img/css3.svg";
import mongodb from "../public/img/mongodb.svg";
import firebase from "../public/img/firebase.svg";
import javascript from "../public/img/javascript.svg";
import Image from "next/image";
import { MyThemeContext } from "../context/themeContext";

import { gsap } from "gsap";

const Icons = () => {
  const [{ darkMode }] = MyThemeContext();
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
    {
      name: "mongodb",
      src: mongodb,
    },
    {
      name: "firebase",
      src: firebase,
    },
  ];

  const icon_animation = useRef();
  const q = gsap.utils.selector(icon_animation);
  //console.log(q(".icons"));
  useEffect(() => {
    gsap.to(q(".icons"), {
      keyframes: {
        x: [0, 0, 500, 500, 0],
        y: [0, -300, -300, 0, 0],
        easeEach: "power1.out", // <- customise the ease between each keyframe
      },
      rotation: 360,
      //x: '30vw',
      ease: "power1.out",
      //xPercent: -100,// Move horizontally (percentage of element's width)
      duration: 3.6, // how long the animation lasts
      stagger: 0.5, // stagger start times 0.5s
      repeatDelay: 1, // delay 1s
      repeat: 1, // the number of repeats - this will play 3 times
      //yoyo: true, // this will alternate back and forth on each repeat. Like a yoyo
    });
    /* gsap.to(q(".icons")[1], {
      keyframes: {
        x: [0, -40, -40, 460, 460, 0],
        y: [0, 0, -300, -300, 0, 0],
        easeEach: "power1.out", // <- customise the ease between each keyframe
      },
      rotation: 360,
      //x: '30vw',
      ease: "power1.out",
      //xPercent: -100,// Move horizontally (percentage of element's width)
      duration: 3.6, // how long the animation lasts
      stagger: 0.5, // stagger start times 0.5s
      repeatDelay: 1, // delay 1s
      repeat: 2, // the number of repeats - this will play 3 times 
      //yoyo: true, // this will alternate back and forth on each repeat. Like a yoyo
    });*/
    /* gsap.to(q(".icons")[2], {
      keyframes: {
        x: [0, -40, -40, 460, 460, 0],
        y: [0, 0, -300, -300, 0, 0],
        easeEach: "power1.out", // <- customise the ease between each keyframe
      },
      rotation: 360,
      //x: '30vw',
      ease: "power1.out",
      //xPercent: -100,// Move horizontally (percentage of element's width)
      duration: 3.6, // how long the animation lasts
      stagger: 0.5, // stagger start times 0.5s
      repeatDelay: 1, // delay 1s
      repeat: 2, // the number of repeats - this will play 3 times
      //yoyo: true, // this will alternate back and forth on each repeat. Like a yoyo
    }); */
  }, []);

  return (
    <div className={styles.iconContainer} ref={icon_animation}>
      {icons.map((item, i) => (
        <div className={`${styles.icons} ${styles.border} icons`} key={i}>
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
  );
};

export default Icons;
