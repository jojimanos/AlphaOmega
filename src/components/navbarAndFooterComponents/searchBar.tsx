import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../../styles/navbar.module.css";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { wordSearch } from '../../atom/wordSearch'
import { useRouter } from "next/router";

type SearchBarProps = {
  search: string;
};

const SearchBar: React.FC<SearchBarProps> = ({ search }) => {

  const inputSearch = useSetRecoilState(wordSearch)

  const searchValue = useRecoilValue(wordSearch)

  const router = useRouter()

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      inputSearch("")
    })

    return () => {
      router.events.off('routeChangeComplete', () => {
        inputSearch("")
      })
    }
  }, [])

  console.log(searchValue)

  return (
    <button

      id={styles.navSearch}
      onClick={() => { }} className={styles.navButton}>
      <Image
        className={styles.navButtonIcon}
        src="/search.png"
        alt=""
        height={120}
        width={120}
      />
      <span>
        <p className="sm:text-center">
          <input value={searchValue} className="w-20 bg-transparent" type="text" placeholder={search} onChange={(e) => inputSearch(prev => prev = e.target.value)} />
        </p>
      </span>
    </button>
  );
};

export default SearchBar;
