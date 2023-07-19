import React, { useState, useRef, useEffect } from "react";
// import styles from "../../../styles/Home.module.css";
import LanguageSwitch from "./language_switch";
import styles from "../../../styles/navbar.module.css";
import Image from "next/image";

function Dropdown(props: any) {
  const dropdownRef = useRef<any>(null);
  const [open, setOpen] = useState<boolean>(false);
  const handleButtonClick = () => setOpen(!open);

  useEffect(() => {
    const pageClickEvent = (e: any) => {
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpen(!open);
      }
    };
    if (open) {
      window.addEventListener("click", pageClickEvent);
    }
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [open]);

  return (
    <>
      <button
        ref={dropdownRef}
        className={styles.navButton}
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={handleButtonClick}
      >
        <Image
          className={styles.navButtonIcon}
          src="/scroll.png"
          alt=""
          height={120}
          width={120}
        />
        {open ? (
          <ul>
            <li>
              <LanguageSwitch
                locales={props.locales}
                locale={props.locale}
                asPath={props.asPath}
                languageswitch={props.languageswitch}
              />
            </li>
          </ul>
        ) : <>{props.languageswitch}</>}
      </button>
    </>
  );
}

export default Dropdown;
