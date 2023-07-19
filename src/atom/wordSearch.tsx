import { atom } from "recoil";

export const wordSearch = atom<string>({
    key: "wordSearch",
    default: ""
}) 

export const highlightStatus = atom<boolean[]>({
    key: "highlightStatus",
    default: []
})