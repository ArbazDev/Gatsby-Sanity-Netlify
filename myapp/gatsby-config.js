module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    // `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-image`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },

  `gatsby-plugin-gatsby-cloud`,

  {
    resolve: `gatsby-source-sanity`,
    options: {
      projectId: `swpzetls`,
      dataset: `production`,
      overlayDrafts: true,
      watchMode: true,
      // a token with read permissions is required
      // if you have a private dataset
      token: 'sk8Bb7lHzc2988NYL0VmKuCAFyRwzdY5gih5HLBDYuFhUe1a7iPIKh3HJQBWefJuB4LJnCwtXIlLkL1nw9XoGx9Ah2GMwftSF7hvArG8EUqOLDtB9n0QD7alpNQnRc5Bpkiglb4GR9Biz6w9dahpJzhqxBmYLdKFzjZCeowaTiYBbeicczkP',

      // If the Sanity GraphQL API was deployed using `--tag <name>`,
      // use `graphqlTag` to specify the tag name. Defaults to `default`.
      graphqlTag: 'default',
    },
  },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
