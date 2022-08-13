import Link from "next/link";
import Dropdown from './dropdown'
import styles from '../../styles/Home.module.css'

function Navbar (props) {
        
        return (
            <div className={styles.container}>
            <div className="sm:grid grid-cols-2 text-1xl pb-5 pt-1">
            <div><p className="sm:text-left">
                <Link href="/">
                    <a className="">{props.menu}</a>
                </Link>
            </p>
            </div>
            <div className="sm:grid grid-cols-3">
            <button className={styles.container} onClick={()=>props.toggleTheme()}>{props.themeswitch}</button>
            <Dropdown settings={props.settings}/>
            <p className="sm:text-center">
                
                <input type="text" placeholder={props.search}/>
                
            </p>
            </div>
      </div>
      </div>
      );
    }
 
export default Navbar;