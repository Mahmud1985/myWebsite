import Image from 'next/image'
import React from 'react'
import styles from "../styles/PortCard.module.scss"
import Link from 'next/link'
const PortCard = ({ card, url = null }) => {

    return (
        <div className={styles.container}>
            <p className={styles.title} >{card?.name}</p>
            <div className={styles.imgContainer}>
                {url ?
                    <a href={card?.url} target="_blank" rel="noopener noreferrer" >
                        <Image src={card?.img} alt={card?.name} layout="fill" objectFit="contain" />
                    </a> :
                    <Link href={`/projects/${card?.id}`} passHref>
                        <Image src={card?.img} alt={card?.name} layout="fill" objectFit="contain" />
                    </Link>
                }
            </div>
        </div >
    )
}

export default PortCard