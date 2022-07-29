import Link from "next/link";
import Dropdown from './dropdown'
import styles from '../../styles/Home.module.css'

function Navbar (props) {
            const {navbarsets} = props
        
            const {menu, settings, search} = navbarsets
        
        return (
            <div className={styles.container}>
            <div className="sm:grid grid-cols-2 text-1xl pb-5 pt-1">
            <div><p className="sm:text-left">
                <Link href="/">
                    <a className="">{menu}</a>
                </Link>
            </p>
            </div>
            <div className="sm:grid grid-cols-3">
            <p className="sm:text-center">
                <Link href="/">
                    <a className="">{}</a>
                </Link>
            </p>
            <Dropdown settings={settings}/>
            <p className="sm:text-center">
                
                <input type="text" placeholder={search}/>
                
            </p>
            </div>
      </div>
      </div>
      );
    }
 
export default Navbar;