import React, { useState, useRef, useEffect } from "react";
// import styles from "../../../styles/Home.module.css";
// import styles from "../../../styles/navbar.module.css";
import Image from "next/image";

type NavbarDropdownProps = {
  text: string;
  children: any;
};

const NavbarDropdown: React.FC<NavbarDropdownProps> = ({ text, children }) => {
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
    <div ref={dropdownRef} className="">
      <button
        ref={dropdownRef}
        // className={styles.navButton}
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={handleButtonClick}
      >
        <Image
          // className={styles.navButtonIcon}
          src="/mobileMenu.png"
          alt=""
          height={80}
          width={80}
        />
        <span>{text}</span>
      </button>
      {open ? (
        <ul>
          <li
          // className="
          // py-2
          // px-4
          // flex
          // items-start
          // text-left
          // bg-transparent
          // text-gray-700
          // hover:bg-gray-100
          // "
          >
            {children}
          </li>
          <li>
            <hr />
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default NavbarDropdown;
