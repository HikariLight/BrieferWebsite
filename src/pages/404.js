import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"

// markup
const NotFoundPage = () => {
  return (
    <Layout>

      <Helmet>
          <title>Briefer | Not Found</title>
      </Helmet>

      <main className="notFoundMain">
        <h1>These aren't the pages you're looking for...</h1>
      </main>
    </Layout>
  )
}

export default NotFoundPage
