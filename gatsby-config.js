module.exports = {
  siteMetadata: {
    title: `Kaktus Blog`,
    author: `Dmitrii Vasiliev`,
    description: `Katya Blog for my portfolio`,
    siteUrl: `https://katyakaktus.netlify.com`,
    social: {
      twitter: `akmid`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kaktus Blog`,
        short_name: `Kaktus blog`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#50c878`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId:'6cxcu1xjo77f',
        accessToken:'6x7nLz8lIw1b2w5Dg6-eJ3M7RS_l_Stl_zXl57xD7Vc'
      }
    },
    `@contentful/gatsby-transformer-contentful-richtext`,
  ],
}
