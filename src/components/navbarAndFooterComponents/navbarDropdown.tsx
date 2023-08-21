import React, { useState, useRef, useEffect } from "react";
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
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={handleButtonClick}
      >
        <Image
          src="/mobileMenu.png"
          alt=""
          height={140}
          width={140}
        />
        <span>{text}</span>
      </button>
      {open ? (
          <div className="w-full">
            {children}
          </div>
      ) : null}
    </div>
  );
};

export default NavbarDropdown;
