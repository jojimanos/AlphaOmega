import Link from "next/link";
import Dropdown from "./dropdown";
import styles from "../../../styles/Home.module.css";
import NavButtons from "./navButtons";
import { useRouter } from "next/router";
import SwitchTheme from "./themeswitch";
import MediaQuery from "react-responsive";
import NavbarDropdown from "./navbarDropdown";
import SearchBar from "./searchBar";

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
      <MediaQuery minWidth={641}>
        <div className="grid grid-cols-4 text-1xl pb-5 pt-10">
          <NavButtons text={menu} path={"/"} />
          <SwitchTheme
            themeswitch={themeswitch}
            toggleTheme={() => toggleTheme()}
          />
          <Dropdown
            locales={locales}
            locale={locale}
            asPath={asPath}
            languageswitch={languageswitch}
            toggleIt={() => toggleTheme()}
          />
          <SearchBar search={search} />
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={640}>
        <div className="grid grid-rows-1 text-1xl pb-5 pt-10 justify-center">
          <NavbarDropdown text=" ">
            <div className="pt-4 grid grid-rows-4 gap-6">
              <NavButtons text={menu} path={"/"} />
              <SwitchTheme
                themeswitch={themeswitch}
                toggleTheme={() => toggleTheme()}
              />
              <Dropdown
                locales={locales}
                locale={locale}
                asPath={asPath}
                languageswitch={languageswitch}
                toggleIt={() => toggleTheme()}
              />
            </div>
          </NavbarDropdown>
        </div>
      </MediaQuery>
    </div>
  );
};

export default Navbar;
