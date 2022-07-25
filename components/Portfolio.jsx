
import React from 'react'
import styles from "../styles/Portfolio.module.scss"
import PortCard from './PortCard'
const Portfolio = ({ cards }) => {
    /*  const cards = [{
         name: "project 1",
         img: "/portfolio/mock1.png",
     },
     {
         name: "project 2",
         img: "/portfolio/mock2.png",
     },
     {
         name: "project 3",
         img: "/portfolio/mock3.png",
     },
     {
         name: "project 4",
         img: "/portfolio/mock4.png",
     },
     {
         name: "project 5",
         img: "/portfolio/mock5.png",
     }]; */

    return (
        <div className={styles.container}>
            <h1 className={styles.title} >Portfolio</h1>
            <section className={styles.section}>
                {cards?.map((card, i) => (
                    <PortCard card={card} key={i} />
                )
                )}
            </section>
        </div>
    )
}

export default Portfolio;