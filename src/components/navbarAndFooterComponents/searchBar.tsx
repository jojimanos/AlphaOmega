import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../../styles/navbar.module.css";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { wordSearch } from '../../atom/wordSearch'
import { useRouter } from "next/router";
// import {
// Popover,
// PopoverTrigger,
// PopoverContent,
// PopoverHeader,
// PopoverBody,
// PopoverFooter,
// PopoverArrow,
// PopoverCloseButton,
// PopoverAnchor,
// } from '@chakra-ui/react'

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

  const [onFocusStopAnimation, setOnFocusStopAnimation] = useState<string>(styles.navSearch)

  console.log(searchValue)

  return (
    <div
      id={onFocusStopAnimation}
      className={styles.navButton}>
      <Image
        className={styles.navButtonIcon}
        src="/search.png"
        alt=""
        height={120}
        width={120}
      />
      <span>
        <p className="sm:text-center">
          <input
            onClick={() => { setOnFocusStopAnimation("") }}
            value={searchValue} className="w-20 bg-transparent" type="text" placeholder={search} onChange={(e) => inputSearch(e.target.value)} />
        </p>
      </span>
    </div>
    // ) :
    // ( <Popover trigger="hover">
    // <PopoverTrigger> 
    // <button 
    // id={onFocusStopAnimation}
    // onClick={() => { }} className={styles.navButton}>
    // <Image 
    // className={styles.navButtonIcon}
    // src="/search.png"
    // alt=""
    // height={120}
    // width={120}
    // />
    // <span> 
    // <p className="sm:text-center">
    // <input  
    // onClick={() => { setOnFocusStopAnimation("") }} 
    // value={searchValue} className="w-20 bg-transparent" type="text" placeholder={search} onChange={(e) => inputSearch(prev => prev = e.target.value)} />
    // </p> 
    // </span>
    // </button>
    // </PopoverTrigger> 
    // <PopoverContent> 
    // <PopoverArrow /> 
    // <PopoverCloseButton /> 
    // <PopoverHeader>Confirmation!</PopoverHeader>
    // <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
    // </PopoverContent>
    // </Popover>)
    // }
    // </>
  );
};

export default SearchBar;
