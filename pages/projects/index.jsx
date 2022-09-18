import React from 'react';
import axios from 'axios';
import styles from "../../styles/Projects.module.scss";
import Portfolio from "../../components/Portfolio";
const Projects = ({ cards }) => {
    return (
        <div className={styles.container}>
            <Portfolio cards={cards} />
        </div>
    )
}

export const getServerSideProps = async () => {
    const API_URL = process.env.LOCAL_URL || process.env.HOST_URL;
    const res = await axios.get(
        `${API_URL}/api/projects`
    );

    //console.log("res:", res.data)
    return {
        props: {
            cards: res.data
        }
    }
}

export default Projects