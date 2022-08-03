import React, { useState } from 'react'
import styles from "../styles/ContactInfo.module.scss"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import ContactWidget from './ContactWidget';
import axios from 'axios';
const ContactInfo = ({ style = {} }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [result, setResult] = useState(null);

    const handleClick = async (e) => {
        e.preventDefault();
        const data = {
            name,
            email,
            title,
            message,
        }

        //const JSONdata = JSON.stringify(data);
        const endpoint = '/api/form';
        try {
            const res = await axios.post(endpoint, data);
            //console.log(res.data)
            setResult(res.data.message);

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.title} style={style}>
                Contact
            </div>
            <div className={styles.contactContainer}>
                <div className={styles.left}>
                    <span className={styles.left_title}>Let`s connect</span>
                    <p>
                        Do you want a new website or upgrade exist one ? If you have a question, don`t hesitate to contact me.
                    </p>
                    <p className={styles.location}><LocationOnIcon /><span >Istanbul-Turkiye</span ></p>
                    <p className={styles.email}><EmailIcon /><span >mahmudkasgari85@gmail.com</span ></p>
                    <p className={styles.whatsapp}><WhatsappIcon /><span >+905511512456</span ></p>
                    <ContactWidget />
                </div>
                <div className={styles.right}>
                    <form className={styles.form} onSubmit={handleClick}>
                        <input className={styles.form_item} type="text" value={name} placeholder="Your Name" required minLength={3} onChange={(e) => setName(e.target.value)} />
                        <input className={styles.form_item} type="email" value={email} placeholder="Your Email" required onChange={(e) => setEmail(e.target.value)} />
                        <input className={styles.form_item} type="text" value={title} placeholder="Subject" required minLength={5} maxLength={350} onChange={(e) => setTitle(e.target.value)} />
                        <textarea className={styles.form_textarea} value={message} placeholder="Message" rows={5} required maxLength={1000} onChange={(e) => setMessage(e.target.value)} ></textarea>
                        <button className={`${styles.form_button} ${styles.border}`} type="submit" >Submit</button >

                    </form>
                    {result && <div className={styles.result}>{result}</div>}
                </div>
            </div></div>
    )
}

export default ContactInfo