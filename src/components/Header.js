import * as React from "react"
import { Link } from "gatsby"
import "../style/global.css"

const Header = () =>{
    return(
        <header>
            <Link to="/"><img id="headerLogo" src="logo.png" alt="name"></img></Link>
            <nav>
                <ul>
                    <li><Link to="/" activeClassName="activeLink">Home</Link></li>
                    <li><Link to="/features" activeClassName="activeLink">Features</Link></li>
                    <li><Link to="/faq" activeClassName="activeLink">FAQ</Link></li>
                    <li><Link to="/contact" activeClassName="activeLink">Contact</Link></li>
                    <li><Link to="/blog" activeClassName="activeLink">Blog</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header