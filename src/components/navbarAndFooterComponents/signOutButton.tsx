import { Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import styles from "../../../styles/navbar.module.css";
import { useRouter } from "next/router";

type SignOutButtonsProps = {
  text: string;
  onClick: () => void;
};

const SignOutButtons: React.FC<SignOutButtonsProps> = ({ text, onClick }) => {
  const router = useRouter();

  return (
    <button onClick={onClick} className={styles.navButton}>
      <Image
        className={styles.navButtonIcon}
        src="/scroll.png"
        alt=""
        height={120}
        width={120}
      />
      <span>{text}</span>
    </button>
  );
};

export default SignOutButtons;
