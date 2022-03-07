module.exports = {
  siteMetadata: {
      title: `clearview`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-netlify-cms",
  {
    resolve: "gatsby-plugin-manifest",
    options: {
      name: "Briefer",
      short_name: "Briefer",
      start_url: "/",
      background_color: "#EBF2FA",
      theme_color: "#364954",
      display: "standalone",
      icon: "static/logo.png"
    }
  }
],
  
};