const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter { title }
            fields { slug }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const postTemplate = path.resolve('src/templates/post.jsx');

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/posts${node.fields.slug}`,
      component: postTemplate,
      context: { slug: node.fields.slug },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    const slug = '/' + fileNode.name + '/';
    createNodeField({ name: 'slug', node, value: slug });
  }
};
