import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Toggler from "./Toggler";
import { MyThemeContext } from "../context/themeContext";
import { actionType } from "../context/reducer";
const links = [
  {
    name: "Home",
    to: "/",
    active: "home",
  },
  {
    name: "About",
    to: "/about",
    active: "about",
  },
  {
    name: "Projects",
    to: "/projects",
    active: "projects",
  },
  {
    name: "Contact",
    to: "/contact",
    active: "contact",
  },
];
const Navbar = () => {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  //const themeCtx
  //console.log(themeCtx);
  const [{ darkMode }, dispatch] = MyThemeContext();
  //const [isDark, setIsDark] = useState(darkMode);
  const menuOpenHandler = (active) => {
    setActive(active);
    setMenuOpen(false);
  }
  const toggleThemeHandler = () => {
    if (darkMode) {
      dispatch({
        type: actionType.SET_TOGGLE,
        darkMode: !darkMode,
      });
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      localStorage.setItem("isDarkTheme", `${!darkMode}`);
    } else {
      dispatch({
        type: actionType.SET_TOGGLE,
        darkMode: !darkMode,
      });
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      localStorage.setItem("isDarkTheme", `${!darkMode}`);
    }

    //themeCtx.toggleThemeHandler();
    //setDarkMode(!darkMode);
  }

  useEffect(() => {
    //setDarkMode(localStorage.getItem("isDarkTheme"));
    let theme = JSON.parse(localStorage.getItem("isDarkTheme"));
    if (theme !== undefined || theme !== null) {
      if (theme) {
        dispatch({
          type: actionType.SET_TOGGLE,
          darkMode: theme,
        });
        document.body.classList.add("dark");
      } else {
        dispatch({
          type: actionType.SET_TOGGLE,
          darkMode: theme,
        });
        document.body.classList.add("light");
      }
    }
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href={'/'}>
          <h1>M.K.Dev</h1>
        </Link>
      </div>
      <div className={styles.nav__Links}>
        <ul className={styles.links}>
          {links.map((link, i) => (
            <Link href={link.to} passHref key={i}>
              {link.active === active ? (
                <li
                  onClick={() => setActive(link.active)}
                  className={styles.active}
                >
                  {link.name}
                </li>
              ) : (
                <li onClick={() => setActive(link.active)}>{link.name}</li>
              )}
            </Link>
          ))}
          <li style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>

            <Toggler darkMode={darkMode} handleClick={toggleThemeHandler} />
          </li>
        </ul>
        <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} >
          <div className={styles.lines}></div>
          <div className={styles.lines}></div>
          <div className={styles.lines}></div>
        </div>
        <ul className={styles.menu__nav} style={{ right: menuOpen ? "0" : "-50vw", backgroundColor: darkMode ? 'black' : 'white' }} >
          {links.map((link, i) => (
            <Link href={link.to} passHref key={i}>
              {link.active === active ? (
                <li
                  onClick={() => menuOpenHandler(link.active)}
                  className={styles.active}
                >
                  {link.name}
                </li>
              ) : (
                <li onClick={() => menuOpenHandler(link.active)}>{link.name}</li>
              )}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
