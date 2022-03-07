import * as React from "react"
import { Link } from "gatsby"
import "../style/global.css"

const Header = () =>{
    return(
        <header>
            {/* <h1 id="title"><Link to="/">Briefer</Link></h1> */}
            <img id="headerLogo" src="name.svg" alt="name logo"></img>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/features">Features</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header