import Image from 'next/image'
import React from 'react'
import styles from "../styles/PortCard.module.scss"
import Link from 'next/link'
const PortCard = ({ card }) => {

    return (
        <div className={styles.container}>
            <p className={styles.title} >{card?.name}</p>
            <div className={styles.imgContainer}>
                <Link href={`/projects/${card?.id}`}>
                    <Image src={card?.img} alt={card?.name} layout="fill" objectFit="contain" />
                </Link>
            </div>
        </div >
    )
}

export default PortCard