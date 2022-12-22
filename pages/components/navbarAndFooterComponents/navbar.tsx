import Link from "next/link";
import Dropdown from './dropdown'
import styles from '../../../styles/Home.module.css'
import LanguageSwitch from "./language_switch";

function Navbar(props: any): JSX.Element {

    return (
        <div className={styles.container}>
            <div className="sm:grid grid-cols-4 text-1xl pb-5 pt-1">
                <div><p className="sm:text-left">
                    <Link href={"/" ?? ''}>
                        {props.menu}
                    </Link>
                </p>
                </div>
                <div className="">
                    <button onClick={() => props.toggleTheme()}>{props.themeswitch}</button>
                </div>
                <div>
                    <Dropdown locales={props.locales} locale={props.locale} asPath={props.asPath} languageswitch={props.languageswitch} toggleIt={() => props.toggleTheme()} />
                </div>
                <div>
                    <p className="sm:text-center">
                        <input type="text" placeholder={props.search} />
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
