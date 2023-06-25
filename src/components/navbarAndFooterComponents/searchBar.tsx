import React from "react";
import Image from "next/image";
import styles from "../../../styles/navbar.module.css";

type SearchBarProps = {
  search: string;
};

const SearchBar: React.FC<SearchBarProps> = ({ search }) => {
  return (
    <button onClick={() => {}} className={styles.navButton}>
      <Image
        className={styles.navButtonIcon}
        src="/search.png"
        alt=""
        height={120}
        width={120}
      />
      <span>
        <p className="sm:text-center">
          <input className="w-20" type="text" placeholder={search} />
        </p>
      </span>
    </button>
  );
};

export default SearchBar;
