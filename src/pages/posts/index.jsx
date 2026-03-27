import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../../components/Layout';

const PostsPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout title="Wszystkie artykuły – PrawoOZE">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <nav className="text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-brand">Strona główna</Link>
          <span className="mx-2">/</span>
          <span>Artykuły</span>
        </nav>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Artykuły – prawo energetyczne i OZE</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(({ node }) => (
            <Link key={node.fields.slug} to={`/posts${node.fields.slug}`}
              className="group bg-white rounded-xl shadow hover:shadow-md transition flex flex-col">
              <div className="p-5 flex-1">
                {node.frontmatter.category && (
                  <span className="text-xs font-semibold text-brand uppercase">{node.frontmatter.category}</span>
                )}
                <h2 className="font-bold text-lg mt-1 mb-2 group-hover:text-brand transition leading-snug">
                  {node.frontmatter.title}
                </h2>
                <p className="text-sm text-gray-500 line-clamp-3">
                  {node.frontmatter.excerpt ?? node.frontmatter.description}
                </p>
              </div>
              <div className="px-5 pb-4 text-xs text-gray-400">
                {node.frontmatter.date}
                {node.frontmatter.category && (
                  <span className="ml-2 bg-blue-100 text-blue-800 px-2 py-0.5 rounded">{node.frontmatter.category}</span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          fields { slug }
          frontmatter { title description excerpt date category image tags }
        }
      }
    }
  }
`;

export default PostsPage;
export const Head = () => <title>Artykuły – PrawoOZE</title>;
