import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import "../style/global.css"

const IndexPage = () => {
  return (
    <Layout>
        <title>ClearView</title>
        <img src="main.png" alt="Explainer diagram"></img>
        <section>
          <h1>Make doing research easier</h1>
          <h3 id="subtitle">Simplify/Summarise/Fuse your web pages</h3>
          <button id="downloadButton"><Link to="#">Download</Link></button>
        </section>
    </Layout>
  )
}

export default IndexPage
