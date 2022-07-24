import styles from "../styles/Footer.module.scss";
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return <div className={styles.container}>

    <footer className={styles.footer}>
      Made with ❤️, By  <strong>Mahmud Kaşgari</strong> , Open sourced on  <a href="https://github.com/Mahmud1985/myWebsite" target="_blank"><GitHubIcon /></a>
    </footer>
  </div >
};
export default Footer;
