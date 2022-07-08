import React, {Component} from "react";
import Link from "next/link";

class Navbar extends Component {
    state = {  } 
    render() { 
        return (<div className="grid grid-cols-2 text-1xl pb-5 pt-1">
            <div><p className="text-left">
                <Link href="/">
                    <a className="">Menu</a>
                </Link>
            </p>
            </div>
            <div className="grid grid-cols-3">
            <p className="text-center">
                <Link href="/">
                    <a className="">Languages</a>
                </Link>
            </p>
            <p className="text-center">
                <Link href="/">
                    <a className="">Settings</a>
                </Link>
            </p>
            <p className="text-center">
                <Link href="/">
                    <a className="">Search</a>
                </Link>
            </p>
            </div>
      </div>);
    }
}
 
export default Navbar;