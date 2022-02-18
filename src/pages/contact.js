import * as React from "react"
import Layout from "../components/Layout"
import ContactCard from "../components/ContactCard"
import "../style/global.css"

const Contact = () => {
  return (
    <Layout>
        <title>Briefer | Contact</title>

        <main className="contactMain">
          <ContactCard></ContactCard>
        </main>
    </Layout>
  )
}

export default Contact
