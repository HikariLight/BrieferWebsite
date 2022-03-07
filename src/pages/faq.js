import * as React from "react"
import Layout from "../components/Layout"
import Qa from "../components/QA"
import "../style/global.css"

const FAQ = () => {

  let githubProfiles = 
    <ul id="githubProfiles">
      <li><a href='https://github.com/HikariLight'>HikariLight</a></li>
      <li><a href='https://github.com/Rahuz7'>Rahuz</a></li>
    </ul>

  return (
    <Layout>
        <title>Briefer | FAQ</title>

        <section className="QnA">
          <Qa question="Who created this project?" answer = "We're a team of 2 developers. You can find us on Github!" extras={githubProfiles}></Qa>
          <Qa question="Why did we create this project?" answer = "They say the best software is the kind that solves your own problems. We thought Briefer could be useful to us, so why not share it with everyone else under an Open Source license too."></Qa>
          <Qa question="Will any of my personal data be collected?" answer="Nope! Briefer is designed to run completely locally. We do not collect any user data."></Qa>
          <Qa question="Will this extension drain my battery/memory?" answer="Nope! The extension doesn't run around the clock, it only does when you use it. So from our testing, the impact on memory and battery should be minimal."></Qa>
          <Qa question="What browsers does Briefer run on?" answer="Briefer supports all Chromium-based browsers. So Google Chrome, Microsoft Edge, Opera, Brave...etc are all supported."></Qa>
          <Qa question="Does this extension run on Firefox?" answer="Briefer does not support Firefox as of yet. Stay tuned for future updates, though!"></Qa>
        </section>
    </Layout>
  )
}

export default FAQ
