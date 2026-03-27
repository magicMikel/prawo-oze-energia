/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: 'PrawoOZE',
    description: 'Portal prawny o odnawialnych źródłach energii w Polsce. Przepisy, dotacje, regulacje.',
    siteUrl: 'https://prawodoenergii.pl',
    author: 'Redakcja PrawoOZE',
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-filesystem',
      options: { name: 'posts', path: `${__dirname}/src/content/posts` },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/sitemap',
        createLinkInHead: true,
      },
    },

  ],
};
