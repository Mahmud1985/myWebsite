import styles from "../styles/Icons.module.scss";
import React from 'react';
import react from "../public/img/react.svg";
import nextjs from "../public/img/nextjs.svg";
import nodejs from "../public/img/nodejs.svg";
import redux from "../public/img/redux.svg";
import html5 from "../public/img/html5.svg";
import css3 from "../public/img/css3.svg";
import javascript from "../public/img/javascript.svg";
import Image from "next/image";
import { MyThemeContext } from "../context/themeContext";
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
    ];
    return (
        <div className={styles.iconContainer}>
            {icons.map((item, i) => (
                <div className={`${styles.icons} ${styles.border}`} key={i}>
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
    )
}

export default Icons