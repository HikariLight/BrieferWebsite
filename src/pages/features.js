import * as React from "react"
import Layout from "../components/Layout"
import FeatureCard from "../components/FeatureCard"
import "../style/global.css"

const Features = () => {
  return (
    <Layout>
        <title>Lintern | Features</title>

        <div className = "featureMain">
          <FeatureCard imgLink="simplify.svg" feature="Simplify" featureText="Take out all the annoying ads and auto-playing videos."></FeatureCard>
          <FeatureCard imgLink="summarise.svg" feature="Summarise" featureText="You already skim through most articles. This feature does it for you!"></FeatureCard>
          <FeatureCard imgLink="fuse.svg" feature="Fuse" featureText="Why read 5 pages when you can just read one?"></FeatureCard>
        </div>
    </Layout>
  )
}

export default Features
