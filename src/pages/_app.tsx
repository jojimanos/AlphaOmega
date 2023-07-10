import "../../styles/globals.css";
import "../../styles/Home.module.css";
import "../../styles/chapters.module.css";
import "../../styles/navbar.module.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { lightTheme, darkTheme, GlobalStyles } from "../../styles/ThemeConfig";
import Data from "./assets/main_data.json";
import Navbar from "../components/navbarAndFooterComponents/navbar";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "../components/navbarAndFooterComponents/footer";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  const { locale, locales, asPath } = useRouter() || {};

  return (
    <>
      <body>
        <div className={styles.background}>
          <div className={styles.container}>
            <ChakraProvider>
              <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
                <GlobalStyles />
                {Data.main_data
                  .filter((p) => p.locale === locale)
                  .map(
                    (
                      {
                        menu,
                        logout,
                        settings,
                        search,
                        themeswitch,
                        languageswitch,
                      },
                      i
                    ) => {
                      return (
                        <Navbar
                          key={i}
                          menu={menu}
                          logout={logout}
                          settings={settings}
                          search={search}
                          languageswitch={languageswitch}
                          themeswitch={themeswitch}
                          toggleTheme={toggleTheme}
                          locales={locales}
                          locale={locale}
                          asPath={asPath}
                        />
                      );
                    }
                  )}
                <Component {...pageProps} />
                {Data.main_data
                  .filter((p) => p.locale === locale)
                  .map((text, index) => (
                    <Footer key={index} powered={text.powered} />
                  ))}
              </ThemeProvider>
            </ChakraProvider>
          </div>
        </div>
      </body>
    </>
  );
}

export default MyApp;
