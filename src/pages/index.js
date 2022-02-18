import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import "../style/global.css"

const IndexPage = () => {
  return (
    <Layout>
        <title>Briefer | Home</title>
        
        <main className="indexMain">
          <img id="mainDiagram" src="main.png" alt="Explainer diagram"></img>
          <section>
            <h1>Make doing research easier</h1>
            <h3 id="subtitle">Simplify/Summarise/Fuse your web pages</h3>
            <button id="downloadButton"><Link to="https://chrome.google.com/webstore">Download</Link></button>
          </section>
        </main>
    </Layout>
  )
}

export default IndexPage
