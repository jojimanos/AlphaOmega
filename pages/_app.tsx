import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from "styled-components"
import { useState } from 'react'
import { lightTheme, darkTheme, GlobalStyles } from "./ThemeConfig"
import Data from "./assets/main_data.json"
import Navbar from './components/navbar'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import '../styles/popup2.css'
import Dropdown from './components/dropdown'
import SwitchTheme from './components/themeswitch'

function MyApp({ Component, pageProps }: AppProps) {


const [theme, setTheme] = useState('light')

const toggleTheme = () => {
  theme == 'light' ? setTheme('dark') : setTheme('light')
}

const{ locale, locales, asPath} = useRouter()

return (
  <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
    <GlobalStyles />
    <div className="">
        <div className="">
          {locales?.map((l, i) => {
            return (
              <span key={i} className={l === locale ? styles.selected : ''}>
                <Link href={asPath} locale={l}>
                  {l}
                </Link>
              </span>
            );
          })}
        </div>
    </div>
    <div>{Data.main_data
              .filter(p => p.locale === locale)
              .map((navbarsets, i) => {
              return <Navbar key={i} navbarsets={navbarsets}/>;
              })}
    </div>
    <SwitchTheme toggleTheme={toggleTheme}/>
    <Component {...pageProps} />
  </ThemeProvider>
)
}

export default MyApp
