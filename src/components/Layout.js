import * as React from "react"
import { Helmet } from "react-helmet"
import Header from "./Header"
import Footer from "./Footer"
import "@fontsource/nunito/300.css"
import "../style/global.css"

const Layout = ({children}) => {
    return(
        <div>

        <Helmet>
          <meta charSet="utf-8"/>
          <meta name="author" content="Briefer Dev Team"/>
          <meta name="keywords" content="research, research tools, research helper, summariser, simplifier, fuser, research articles"/>
          <meta name="description" content="Briefer Browser Extension official website"/>
          <link rel="icon" type="image/png" sizes="32x32" href="logo.png"/>
        </Helmet>

            <Header />
                <div className="container">
                    { children }
                </div>
            <Footer />
        </div>
    )
}

export default Layout