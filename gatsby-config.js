module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    'gatsby-plugin-next-seo',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Harrison Lau`,
        short_name: `Harrison`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#02aab0`,
        display: `standalone`,
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-175050282-2',
      },
    },
    {
      resolve: `gatsby-plugin-next-seo`,
      options: {
        openGraph: {
          type: 'website',
          locale: 'en_HK',
          title: 'Harrison Lau | Software Engineer',
          site_name: 'My personal portfolio',
          url: 'https://harrisonlau.com/',
          description: 'Harrison Lau, a full-stack software engineer based in Hong Kong.',
          images: [
            {
              url: 'https://i.imgur.com/Z3UIhyy.png',
              alt: 'My personal portfolio',
            },
          ],
        },
      },
    },
  ],
};
