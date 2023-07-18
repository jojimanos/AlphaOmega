import { atom } from "recoil";

export const wordSearch = atom<string>({
    key: "wordSearch",
    default: ""
})