import * as React from "react"
import { Link } from "gatsby"
import "../style/global.css"

const Header = () =>{
    return(
        <header>
            <h1 id="title">Clearview</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="#">About</Link></li>
                    <li><Link to="#">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header