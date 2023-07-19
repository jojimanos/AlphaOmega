import React, { useEffect } from "react";
import Image from "next/image";
import styles from "../../../styles/navbar.module.css";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { wordSearch } from '../../atom/wordSearch'

type SearchBarProps = {
  search: string;
};

const SearchBar: React.FC<SearchBarProps> = ({ search }) => {

  const inputSearch = useSetRecoilState(wordSearch)

  const searchValue = useRecoilValue(wordSearch)

  useEffect(() => {
    // console.log("Word search", searchValue)
  })

  return (
    <button onClick={() => { }} className={styles.navButton}>
      <Image
        className={styles.navButtonIcon}
        src="/search.png"
        alt=""
        height={120}
        width={120}
      />
      <span>
        <p className="sm:text-center">
          <input className="w-20 bg-transparent" type="text" placeholder={search} onChange={(e) => inputSearch(prev => prev = e.target.value)} />
        </p>
      </span>
    </button>
  );
};

export default SearchBar;
