import * as React from "react"
import Layout from "../components/Layout"
import Qa from "../components/QA"
import "../style/global.css"

const FAQ = () => {
  return (
    <Layout>
        <title>Lintern | FAQ</title>

        <section className="QnA">
        <Qa question="Who created this project?" answer="We're a team of 2 developers."></Qa>
        </section>
    </Layout>
  )
}

export default FAQ
