import Dropdown from "./dropdown";
import navstyles from "../../../styles/navbar.module.css";
import NavButtons from "./navButtons";
import { useRouter } from "next/router";
import SwitchTheme from "./themeswitch";
import MediaQuery from "react-responsive";
import NavbarDropdown from "./navbarDropdown";
import SearchBar from "./searchBar";
import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../../firebaseConfig";
import SignOutButtons from "./signOutButton";

type NavbarProps = {
  menu: string;
  logout: string;
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
  logout,
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

  const [signOut, loading, error] = useSignOut(auth);

  return (
    <div className={navstyles.navbarContainer}>
      <MediaQuery minWidth={641}>
        <div className="grid grid-cols-5 text-1xl pb-5 pt-10">
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
          <SignOutButtons
            text={logout}
            onClick={async () => {
              const success = await signOut();
              localStorage.removeItem("user");
              router.push("/");
            }}
          />
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={640}>
        <div className="text-1xl pb-2 pt-2 w-full">
          <div className="flex justify-center w-full">
          <NavbarDropdown text="">
            <div className="grid grid-cols-1 w-full">
              <div className="pt-8 pb-8 grid grid-rows-5 gap-20 w-full">
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
                <SignOutButtons
                  text={logout}
                  onClick={async () => {
                    const success = await signOut();
                    localStorage.removeItem("user");
                    router.push("/");
                  }}
                />
              </div>
            </div>
          </NavbarDropdown>
</div>
        </div>
      </MediaQuery>
    </div>
  );
};

export default Navbar;
