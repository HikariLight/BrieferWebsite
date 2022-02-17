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
          <Qa question="Will any of my personal data be collected?" answer="Nope! Lintern is designed to run completely locally. We do not collect any user data."></Qa>
          <Qa question="Will this extension drain my battery/memory?" answer="Nope! The extension doesn't run around the clock, it only does when you use it. So from our testing, the impact on memory and battery should be minimal."></Qa>
        </section>
    </Layout>
  )
}

export default FAQ
