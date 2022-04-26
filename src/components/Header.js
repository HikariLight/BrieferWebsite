import * as React from "react"
import { Link } from "gatsby"
import "../style/global.css"

const Header = () =>{
    return(
        <header>
            <Link to="/"><img id="headerLogo" src="logo.png" alt="name"></img></Link>
            <nav>
                <ul>
                    <li><Link to="/" activeClassName="activeNavLink">Home</Link></li>
                    <li><Link to="/features" activeClassName="activeNavLink">Features</Link></li>
                    <li><Link to="/faq" activeClassName="activeNavLink">FAQ</Link></li>
                    <li><Link to="/contact" activeClassName="activeNavLink">Contact</Link></li>
                    <li><Link to="/blog" activeClassName="activeNavLink">Blog</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header