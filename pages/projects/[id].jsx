import axios from 'axios';
import React from 'react'
import styles from "../../styles/Project.module.scss"
import PortCard from "../../components/PortCard"
const Project = ({ card }) => {
    return (
        <div className={styles.container}>
            {card.error ?
                <div className={styles.error}>{card.error}</div> :
                <div className={styles.card}>
                    <PortCard card={card} />
                    <div className={styles.desc}>{card.desc}</div>
                </div>}
        </div>
    )
}

export const getServerSideProps = async ({ params }) => {
    //console.log(params.id);
    const res = await axios.get(
        `mkdev-rouge.vercel.app/api/projects/${params.id}`
    );
    //console.log("res from project ", res.data)
    return {
        props: {
            card: res.data,
        },
    };
};

export default Project