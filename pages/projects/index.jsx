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
    const res = await axios.get("http://localhost:3000/api/projects")
    //console.log("res:", res.data)
    return {
        props: {
            cards: res.data
        }
    }
}

export default Projects