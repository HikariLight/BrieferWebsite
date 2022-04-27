import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import "../style/global.css"

const IndexPage = () => {
  return (
    <Layout>

      <Helmet>
        <title>Briefer | Home</title>
      </Helmet>
        
        <main className="indexMain">
          <img id="mainDiagram" src="main.png" alt="Explainer diagram"></img>
          <section>
            <h1 id="indexTitle">Make doing research easier</h1>
            <h3 id="subtitle">Simplify/Summarise/Fuse your web pages</h3>
            <button id="downloadButton"><a href="https://github.com/HikariLight/Briefer/releases/download/v0.9/Briefer-v0.9.zip">Download</a></button>
          </section>
        </main>
    </Layout>
  )
}

export default IndexPage
