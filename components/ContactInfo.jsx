import React from 'react'
import styles from "../styles/ContactInfo.module.scss"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import ContactWidget from './ContactWidget';
const ContactInfo = ({ style = {} }) => {
    console.log(style.marginTop)
    return (
        <div className={styles.container}>
            <div className={styles.title} style={style}>
                Contact
            </div>
            <div className={styles.contactContainer}>
                <div className={styles.left}>
                    <span className={styles.left_title}>Let's connect</span>
                    <p>
                        Do you want a new website or upgrade exist one ? If you have a question, don't hesitate to contact me.
                    </p>
                    <p className={styles.location}><LocationOnIcon /><span >Istanbul-Turkiye</span ></p>
                    <p className={styles.email}><EmailIcon /><span >mahmudkasgari85@gmail.com</span ></p>
                    <p className={styles.whatsapp}><WhatsappIcon /><span >+905511512456</span ></p>
                    <ContactWidget />
                </div>
                <div className={styles.right}>
                    <form className={styles.form}>
                        <input className={styles.form_item} type="text" placeholder="Your Name" />
                        <input className={styles.form_item} type="email" placeholder="Your Email" />
                        <input className={styles.form_item} type="text" placeholder="Subject" />
                        <textarea className={styles.form_textarea} placeholder="Message" rows={5}></textarea>
                        <input className={styles.form_button} type="submit" value="Submit" />

                    </form>
                </div>
            </div></div>
    )
}

export default ContactInfo