import { Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import styles from "../../../styles/navbar.module.css";
import { useRouter } from "next/router";

type NavButtonsProps = {
  text: string;
  path: string;
};

const NavButtons: React.FC<NavButtonsProps> = ({ text, path }) => {
  const router = useRouter();

  return (
    <button onClick={() => router.push(path)} className={styles.navButton}>
      <Image
        className={styles.navButtonIcon}
        src="/scroll.png"
        alt=""
        height={40}
        width={100}
      />
      <span>{text}</span>
    </button>
  );
};

export default NavButtons;
