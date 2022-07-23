import Image from 'next/image'
import React from 'react'
import styles from "../styles/PortCard.module.scss"
const PortCard = ({ card }) => {

    return (
        <div className={styles.container}>
            <p className={styles.title} >{card.name}</p>
            <div className={styles.imgContainer}>
                <Image src={card.img} alt={card.name} layout="fill" objectFit="contain" />
            </div></div>
    )
}

export default PortCard