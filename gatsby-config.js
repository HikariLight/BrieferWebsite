require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
      title: `Briefer`,
    siteUrl: `https://briefer.netlify.app/`
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.STRAPI_API_URL || "http://localhost:1337",
        accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: [ `post` ]
      }
    }
  ],
};