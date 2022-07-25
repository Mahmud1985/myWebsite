import React from 'react'
import styles from "../../styles/About.module.scss"
import react from "../../public/img/react.svg";
import nextjs from "../../public/img/nextjs.svg";
import nodejs from "../../public/img/nodejs.svg";
import redux from "../../public/img/redux.svg";
import html5 from "../../public/img/html5.svg";
import css3 from "../../public/img/css3.svg";
import javascript from "../../public/img/javascript.svg";
import Image from 'next/image';
import { MyThemeContext } from "../../context/themeContext";
import Icons from '../../components/Icons';

const About = () => {
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
        <div className={styles.container}>
            <div className={styles.left}>
                <h1 className={styles.titleL}>About Me</h1>
                <div className={styles.desc}>
                    <p>
                        I am a Frontend Developer based in <b>Istanbul - Turkey</b> , Who likes to provide solutions for people`s projects and businesses which it is a challenge that I enjoy overcoming.</p>

                    <p>
                        I am a passionate person who pursues his dreams, who works hard and who is results oriented. As a matter of fact, I constantly work on improving myself seeking to achieve the best version of myself.
                    </p>
                    <div>
                        <p className={styles.titleS}>About Computer Languages:</p>
                        I build websites using <i>HTML, CSS, JavaScript</i>, and a other frameworks and libraries like <i>Next.js React.js</i> etc. I spend most days learning and building up, either start it from scratch or adding some customized features and functionality for outdated websites to make them shine again.
                        <p className={styles.titleS}>About Human Languages: </p>
                        I can smoothly translate between <b>Turkish</b> and <b>Chinese</b> , however not that smoothly in <b>English</b> to be honest. About <b>English</b> I can say enough for working and daily useage.
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <section className={styles.section}>
                    <p className={styles.titleL}>Skills</p>
                    <Icons />
                </section>
                <section className={styles.section}>
                    <p className={styles.titleL}>Languages</p>
                    <div className={styles.languages}>
                        <div className={`${styles.language} ${styles.border}`}>
                            Turkish
                        </div>
                        <div className={`${styles.language} ${styles.border}`}>
                            Chinese
                        </div>
                        <div className={`${styles.language} ${styles.border}`}>
                            English
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default About
