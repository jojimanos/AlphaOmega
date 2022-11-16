import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from "styled-components"
import { useState } from 'react'
import { lightTheme, darkTheme, GlobalStyles } from "./ThemeConfig"
import Data from "./assets/main_data.json"
import Navbar from './components/navbarAndFooterComponents/navbar'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import '../styles/popup2.css'
import Footer from './components/navbarAndFooterComponents/footer'


function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  const { locale, locales, asPath } = useRouter();

return (
  <div className={styles.background}>
  <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
    <GlobalStyles />
    <div className='font-serif'>{Data.main_data
              .filter(p => p.locale === locale)
              .map(({menu, settings, search, themeswitch}, i) => {
              return <Navbar key={i} menu={menu} settings={settings} search={search} themeswitch={themeswitch} toggleTheme={toggleTheme} locales={locales} locale={locale} asPath={asPath}/>;
              })}
    </div>
        <Component {...pageProps} />
        <div className="font-serif">
          {Data.main_data
            .filter((p) => p.locale === locale)
            .map(({ powered }, i) => {
              return <Footer key={i} powered={powered} />;
            })}
        </div>
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
