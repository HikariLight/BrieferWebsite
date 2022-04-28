import * as React from "react"
import { Link } from "gatsby"
import "../style/global.css"
import * as headerStyle from "../style/Header.module.css"

const Header = () =>{
    return(
        <header>
            <Link to="/"><img id= {headerStyle.headerLogo} src="/logo.png" alt="name"></img></Link>
            <nav>
                <ul>
                    <li><Link to="/" activeClassName = {headerStyle.activeNavLink}>Home</Link></li>
                    <li><Link to="/features" activeClassName = {headerStyle.activeNavLink}>Features</Link></li>
                    <li><Link to="/faq" activeClassName = {headerStyle.activeNavLink}>FAQ</Link></li>
                    <li><Link to="/contact" activeClassName = {headerStyle.activeNavLink}>Contact</Link></li>
                    <li><Link to="/blog" activeClassName = {headerStyle.activeNavLink} partiallyActive = {headerStyle.activeNavLink}>Blog</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header