import * as React from "react"
import { Link } from "gatsby"
import "../style/global.css"

const Header = () =>{
    return(
        <header>
            <Link to="/"><img id="headerLogo" src="logo.png" alt="name"></img></Link>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/features">Features</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header