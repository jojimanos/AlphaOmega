import React from "react";
import Link from "next/link";
import styles from "../../../styles/chapters.module.css";
type ChaptersButtonProps = {
  i: number;
  a: string;
  hrefTemplate: string;
};

const ChaptersButtons: React.FC<ChaptersButtonProps> = ({
  i,
  a,
  hrefTemplate,
}) => {
  return (
    <span className={styles.chapterNavButton}>
      <Link key={i} href={hrefTemplate + "[chapter]"} as={hrefTemplate + a}>
        {i + 1}
      </Link>
    </span>
  );
};

export default ChaptersButtons;
