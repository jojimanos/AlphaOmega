import React, { useState, useRef, useEffect } from "react";
import styles from "../../../styles/Home.module.css";
import LanguageSwitch from "./language_switch";

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
    <div ref={dropdownRef} className="dropdown">
      <button
        className="
          dropdown-toggle
          leading-tight
          hover:bg-gray-200
          focus:bg-gray-300
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={handleButtonClick}
      >
        {props.languageswitch}
      </button>
      <nav>
        {open && (
          <ul>
            <li
              className="
              py-2
              px-4
              flex
              items-start
              text-left
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
            >
              <LanguageSwitch
                locales={props.locales}
                locale={props.locale}
                asPath={props.asPath}
                languageswitch={props.languageswitch}
              />
            </li>
            <li>
              <hr />
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
}

export default Dropdown;
