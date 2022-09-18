import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/ContactWidget.module.scss";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsappIcon from "@mui/icons-material/WhatsApp";

import { gsap } from "gsap";

const ContactWidget = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const [contact, setContact] = useState("mahmudkasgari85@gmail.com");
  const contactInfo = {
    Gmail: "mahmudkasgari85@gmail.com",
    LinkedIn: "www.linkedin.com/in/mkashgari",
    Telegram: "+905511512456",
    Whatsapp: "+905511512456",
  };

  const gmail_animation = useRef();

  const handleContact = (value) => {
    setContactOpen(!contactOpen);
    setContact(value);
  };

  const animate = () => {
    gsap.to(gmail_animation.current, {
      y: 40,
      duration: 1.3,
      ease: "bounce.out",
      repeat: 1,
      yoyo: true,
    });
  };

  useEffect(() => {
    if (contactOpen) {
      animate();
    }
  }, [contactOpen]);

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
      {contactOpen && (
        <div
          className={`${styles.contact_gmail} ${styles.border}`}
          ref={gmail_animation}
        >
          {contact === "www.linkedin.com/in/mkashgari" ? (
            <a href="http://www.linkedin.com/in/mkashgari">
              <b>Click to this link to my LinkedIn</b>
            </a>
          ) : (
            contact
          )}
        </div>
      )}
    </>
  );
};

export default ContactWidget;
