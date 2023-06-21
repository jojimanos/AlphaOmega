import Link from "next/link";
import Dropdown from "./dropdown";
import styles from "../../../styles/Home.module.css";
import NavButtons from "./navButtons";
import { useRouter } from "next/router";
import SwitchTheme from "./themeswitch";

type NavbarProps = {
  menu: string;
  settings: string;
  search: string;
  languageswitch: string;
  themeswitch: string;
  toggleTheme: () => void;
  locales: string[] | undefined;
  locale: string | undefined;
  asPath: string;
};

const Navbar: React.FC<NavbarProps> = ({
  menu,
  settings,
  search,
  languageswitch,
  themeswitch,
  toggleTheme,
  locales,
  locale,
  asPath,
}) => {
  const router = useRouter();

  return (
    <div>
      <div className="sm:grid grid-cols-4 text-1xl pb-5 pt-10">
        <NavButtons text={menu} path={"/"} />
        <SwitchTheme
          themeswitch={themeswitch}
          toggleTheme={() => toggleTheme()}
        />
        <div>
          <Dropdown
            locales={locales}
            locale={locale}
            asPath={asPath}
            languageswitch={languageswitch}
            toggleIt={() => toggleTheme()}
          />
        </div>
        <div>
          <p className="sm:text-center">
            <input type="text" placeholder={search} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
