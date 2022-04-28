import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import "../style/global.css"
import * as indexStyle from "../style/Index.module.css";

const IndexPage = () => {
  return (
    <Layout>

      <Helmet>
        <title>Briefer | Home</title>
      </Helmet>
        
        <main className = {indexStyle.indexMain}>
          <img id = {indexStyle.mainDiagram} src="main.png" alt="Explainer diagram"></img>
          <section>
            <h1 id={indexStyle.indexTitle}>Make doing research easier</h1>
            <h3 id={indexStyle.subtitle}>Simplify/Summarise/Fuse your web pages</h3>
            <button id={indexStyle.downloadButton}><a href="https://github.com/HikariLight/Briefer/releases/download/v0.9/Briefer-v0.9.zip">Download</a></button>
          </section>
        </main>
    </Layout>
  )
}

export default IndexPage
