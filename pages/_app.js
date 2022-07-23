import Layout from "../components/Layout";
import "../styles/globals.scss";
import { MyThemeContextProvider } from "../context/themeContext";
import { initialState } from "../context/initialState";
import reducer from "../context/reducer";

function MyApp({ Component, pageProps }) {
  return (
    <MyThemeContextProvider initialState={initialState} reducer={reducer}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MyThemeContextProvider>
  );
}

export default MyApp;
