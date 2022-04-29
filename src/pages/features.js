import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import FeatureCard from "../components/FeatureCard"
import "../style/global.css"
import * as featuresStyle from "../style/Features.module.css"

const Features = () => {
  return (
    <Layout>

        <Helmet>
          <title>Briefer | Features</title>
        </Helmet>

        <main className = {featuresStyle.featureMain}>
          <FeatureCard className="opaqueDarkBlueText" imgLink="simplify.svg" feature="Simplify" featureText="Take out all the annoying ads and auto-playing videos, and even bypass some paywalls!"></FeatureCard>
          <FeatureCard imgLink="summarize.svg" feature="Summarise" featureText="You already skim through most articles. This feature does it for you!"></FeatureCard>
          <FeatureCard imgLink="fuser.svg" feature="Fuse" featureText="Why read 5 pages when you can read just one summarised page with higher quality information?"></FeatureCard>
          <FeatureCard imgLink="save.svg" feature="Export" featureText="Save your simplified/summarised/fused pages as PDF for reading later."></FeatureCard>
        </main>
    </Layout>
  )
}

export default Features
