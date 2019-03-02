module.exports = {
  siteMetadata: {
    title: `Tyler Benning Product Designer`,
    author: `Tyler Benning`,
    description: `The portfolio and stories of Tyler Benning `,
    keywords: `ux design, ui, ux/ui, product, product design`,
    siteUrl: `http://tbenning.github.io/tylerbenning.com/`,
    social: {
      twitter: `tylerbenning_`,
    },
  },
  pathPrefix: '/tylerbenning.com',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tyler Benning Portfolio`,
        short_name: `tylerbenning.com`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        //icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**'],
        // Enables Google Optimize using your container Id
        //optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        //experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        //variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Any additional create only fields (optional)
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'tbenning.github.io/tylerbenning.com',
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-tagmanager`,
    //   options: {
    //     id: process.env.GOOGLE_TAGMANAGER_ID,
    //     // Include GTM in development.
    //     // Defaults to false meaning GTM will only be loaded in production.
    //     includeInDevelopment: false,

    //     // Specify optional GTM environment details.
    //     //gtmAuth: 'YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING',
    //     //gtmPreview: 'YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME',
    //   },
    //},
  ],
}
