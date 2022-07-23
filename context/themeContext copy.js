import { createContext, ReactElement, useEffect, useState } from "react";

const MyThemeContext = createContext({
  isDarkTheme: true,
  toggleThemeHandler: () => {},
});

export function MyThemeContextProvider(props) {
  const [isDarkTheme, setIsDarkTheme] = useState();
  useEffect(() => initialThemeHandler(), []);

  function isLocalStorageEmpty() {
    //console.log(localStorage.getItem("isDarkTheme"));
    //return !localStorage.getItem("isDarkTheme");
    const themeInfo =
      localStorage.getItem("isDarkTheme") !== "undefined"
        ? JSON.parse(localStorage.getItem("isDarkTheme"))
        : false;

    return themeInfo;
  }

  function initialThemeHandler() {
    if (isLocalStorageEmpty()) {
      setIsDarkTheme(true);
      document.body.classList.add("dark");
      localStorage.setItem("isDarkTheme", `true`);
    } else {
      const isDarkTheme = JSON.parse(localStorage.getItem("isDarkTheme"));
      isDarkTheme && document.body.classList.add("dark");
      setIsDarkTheme(isDarkTheme);
    }
  }
  function toggleThemeHandler() {
    // const isDarkTheme = JSON.parse(localStorage.getItem("isDarkTheme"));
    let theme = JSON.parse(localStorage.getItem("isDarkTheme"));
    setIsDarkTheme(!theme);
    //console.log("theme : ", theme);
    toggleDarkClassToBody();
    //setValueToLocalStorage(theme);
    setValueToLocalStorage();
  }

  function toggleDarkClassToBody() {
    document.body.classList.toggle("dark");
  }

  function setValueToLocalStorage(theme) {
    //console.log("local : ", localStorage.getItem("isDarkTheme"));
    localStorage.setItem("isDarkTheme", `${!theme}`);
    //localStorage.setItem("isDarkTheme", `${isDarkTheme}`);
  }

  return (
    <MyThemeContext.Provider
      value={{ isDarkTheme: isDarkTheme, toggleThemeHandler }}
    >
      {props.children}
    </MyThemeContext.Provider>
  );
}

export default MyThemeContext;
