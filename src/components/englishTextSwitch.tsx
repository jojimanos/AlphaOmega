import React, { SetStateAction } from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

type EnglishTextSwitchProps = {
  setEnglishText: React.Dispatch<SetStateAction<boolean>>;
  englishText: boolean;
};

const EnglishTextSwitch: React.FC<EnglishTextSwitchProps> = ({
  setEnglishText,
  englishText,
}) => {
  return (
    <div className={styles.textLanguageSwitch}>
      <Image src="/languages.png" alt="" width={50} height={50} />
      <button
        onClick={() => {
          setEnglishText(!englishText);
        }}
      >
        English Text
      </button>
      <Image src="/languages.png" alt="" width={50} height={50} />
    </div>
  );
};

export default EnglishTextSwitch;
