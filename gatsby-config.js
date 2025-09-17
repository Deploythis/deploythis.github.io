/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Deploy/this - Victor Hernandez`,
    siteUrl: `https://www.deploythis.co`,
    description: `Creative Technologist and Frontend Developer bridging technical execution with strategic vision`,
    author: `Victor Hernandez`,
    email: `victor@deploythis.co`,
    location: `Brookline, MA`,
    social: {
      linkedin: `https://www.linkedin.com/in/victorhernandezduran`,
      bluesky: `https://bsky.app/profile/deploythis.bsky.social`
    }
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-transformer-remark", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: 'Deploy/this - Victor Hernandez',
      short_name: 'Deploy/this',
      start_url: '/',
      background_color: '#FFFFFF',
      theme_color: '#FFE014',
      display: 'minimal-ui',
      icon: 'src/images/icon.png',
      icon_options: {
        purpose: 'any maskable',
      },
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "content",
      "path": "./content/"
    },
    __key: "content"
  }]
};