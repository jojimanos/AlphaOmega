import styles from '../../styles/Home.module.css'

function SwitchTheme({toggleTheme}) {
    {/*const {themesets} = props
        
const {themeswitch} = themesets*/}

    return(
    <button className={styles.container} onClick={()=>toggleTheme()}>Switch</button>)
}

export default SwitchTheme;