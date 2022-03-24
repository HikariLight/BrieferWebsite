import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import ContactCard from "../components/ContactCard"
import "../style/global.css"

const Contact = () => {
  return (
    <Layout>
        <Helmet>
          <title>Briefer | Contact</title>
        </Helmet>

        <main className="contactMain">
          <ContactCard></ContactCard>
        </main>
    </Layout>
  )
}

export default Contact
