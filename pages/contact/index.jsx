import React from 'react'
import ContactInfo from "../../components/ContactInfo";
import styles from "../../styles/Contact.module.scss";
const Contact = () => {
    return (
        <div className={styles.container}>
            <ContactInfo style={{ marginTop: "5rem" }} />
        </div>
    )
}

export default Contact