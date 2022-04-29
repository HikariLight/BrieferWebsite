import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import * as notFoundStyle from "../style/404.module.css"

// markup
const NotFoundPage = () => {
  return (
    <Layout>

      <Helmet>
          <title>Briefer | Not Found</title>
      </Helmet>

      <main className = {notFoundStyle.notFoundMain}>
        <h1 className="purpleText">These aren't the pages you're looking for...</h1>
      </main>
    </Layout>
  )
}

export default NotFoundPage
