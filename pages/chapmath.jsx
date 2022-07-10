import React, {Component} from 'react';
import Chapmath_tem from './/components/chap_tem';
import Navbar from './components/navbar';
import styles from '../styles/Home.module.css'
import Data from './assets/chap_data.json'
import {useRouter} from 'next/router'

function ChapMath () { 

    const{ locale, locales, asPath} = useRouter()

    {/*state = { 
    entries: [
    {id: 1, title: 'Ἡ Γενεαλογία τοῦ Ἰησοῦ Χριστοῦ', trans: 'Jesus Christ s Genealogy', linkto: '/parmath'},
    {id: 2, title: '', trans: '', linkto: '/'},
    {id: 3, title: '', trans: '', linkto: '/'},
    {id: 4, title: '', trans: '', linkto: '/'},
    {id: 5, title: '', trans: '', linkto: '/'},
    {id: 6, title: '', trans: '', linkto: '/'},
    {id: 7, title: '', trans: '', linkto: '/'},
    {id: 8, title: '', trans: '', linkto: '/'},
    {id: 9, title: '', trans: '', linkto: '/'},
    {id: 10, title: '', trans: '', linkto: '/'},
    {id: 11, title: '', trans: '', linkto: '/'},
    {id: 12, title: '', trans: '', linkto: '/'},
    {id: 13, title: '', trans: '', linkto: '/'},
    {id: 14, title: '', trans: '', linkto: '/'},
    {id: 15, title: '', trans: '', linkto: '/'},
    {id: 16, title: '', trans: '', linkto: '/'},
    {id: 17, title: '', trans: '', linkto: '/'},
    {id: 18, title: '', trans: '', linkto: '/'},
    {id: 19, title: '', trans: '', linkto: '/'},
    {id: 20, title: '', trans: '', linkto: '/'},
    {id: 21, title: '', trans: '', linkto: '/'},
    {id: 22, title: '', trans: '', linkto: '/'},
    {id: 23, title: '', trans: '', linkto: '/'},
    {id: 24, title: '', trans: '', linkto: '/'},
    {id: 25, title: '', trans: '', linkto: '/'},
    {id: 26, title: '', trans: '', linkto: '/'},
    {id: 27, title: '', trans: '', linkto: '/'},
    {id: 28, title: '', trans: '', linkto: '/'},
    ]
*/}
     
        return (
            <div>{Data.chap_data
                .filter(p => p.locale === locale)
                .map((chapsets, i) => {
                return <Chapmath_tem key={i} chapsets={chapsets}/>;
                })}
      </div>)
}
export default ChapMath;