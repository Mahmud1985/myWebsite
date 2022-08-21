import React, { useState } from 'react'
import styles from "../styles/ContactWidget.module.scss";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsappIcon from "@mui/icons-material/WhatsApp";
const ContactWidget = () => {
    const [contactOpen, setContactOpen] = useState(false);
    const [contact, setContact] = useState("mahmudkasgari85@gmail.com");
    const contactInfo = {
        "Gmail":"mahmudkasgari85@gmail.com",
        "LinkedIn":"https://www.linkedin.com/in/mahmud-kasgari-b9b646241/",
        "Telegram":"+905511512456",
        "Whatsapp":"+905511512456",
        
}

    const handleContact = (value)=>{
        setContactOpen(!contactOpen)
        setContact(value)
    }
    return (
        <>
            <div className={`${styles.contact} ${styles.border}`}>
                <span onClick={() => handleContact(contactInfo.Gmail)}>
                    Gmail: <EmailIcon />
                </span>
                <span onClick={() => handleContact(contactInfo.LinkedIn)}>
                    LinkedIn: <LinkedInIcon />
                </span>
                <span onClick={() => handleContact(contactInfo.Telegram)}>
                    Telegram: <TelegramIcon />
                </span>
                <span onClick={() => handleContact(contactInfo.Whatsapp)}>
                    Whatsapp: <WhatsappIcon />
                </span>
            </div>
            {contactOpen && (<div className={`${styles.contact_gmail} ${styles.border}`} >{contact==="https://www.linkedin.com/in/mahmud-kasgari-b9b646241/"
            ?<a href='https://www.linkedin.com/in/mahmud-kasgari-b9b646241/'><b>Click to this link to my LinkedIn</b></a>
            :contact}</div>)}
        </>
    )
}

export default ContactWidget