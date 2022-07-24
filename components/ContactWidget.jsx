import React from 'react'
import styles from "../styles/ContactWidget.module.scss";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsappIcon from "@mui/icons-material/WhatsApp";
const ContactWidget = ({ contactOpen, setContactOpen }) => {
    return (
        <>
            <div className={`${styles.contact} ${styles.border}`}>
                <span onClick={() => setContactOpen(!contactOpen)}>
                    Gmail: <EmailIcon />
                </span>
                <span>
                    LinkedIn: <LinkedInIcon />
                </span>
                <span>
                    Telegram: <TelegramIcon />
                </span>
                <span>
                    Whatsapp: <WhatsappIcon />
                </span>
            </div>
            {contactOpen && (<div className={`${styles.contact_gmail} ${styles.border}`} >mahmudkasgari85@gmail.com</div>)}
        </>
    )
}

export default ContactWidget