import styles from "../styles/Footer.module.scss";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return <div className={styles.container}>
    <div className={styles.title}>
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
    </div>
    <footer className={styles.footer}>
      Made with ❤️, By  <strong>Mahmud Kaşgari</strong> , Open sourced on  <a href="https://github.com/Mahmud1985/myWebsite" target="_blank"><GitHubIcon /></a>
    </footer>
  </div >
};
export default Footer;
