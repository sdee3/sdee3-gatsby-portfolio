module.exports = {
  siteMetadata: {
    title: 'Blog - Stefan Djokic',
    description:
      'The official blog of Stefan Djokic, software developer and content manager. Read' +
      ' about all things marketing, productivity, and software development.',
    siteUrl: 'https://sdee3.com',
    author: 'sdee3',
    twitter: 'StefD96',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
              wrapperStyle: 'margin-bottom: 1.0725rem;',
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Blog - Stefan Djokic',
        short_name: 'Blog - Stefan Djokic',
        description:
          'The official blog of Stefan Djokic, software developer and content manager. Read' +
          ' about all things marketing, productivity, and software development.',
        homepage_url: 'https://sdee3.com',
        start_url: '',
        background_color: '#fff',
        theme_color: '#222',
        display: 'standalone',
        icons: [
          {
            src: '/img/favicon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/img/favicon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-112027701-1',
        head: true,
      },
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-twitter',
    'gatsby-transformer-sharp',
  ],
}
