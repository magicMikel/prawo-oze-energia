import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  const featured = posts.find(e => e.node.frontmatter.featured) ?? posts[0];
  const latest = posts.filter(e => e !== featured).slice(0, 8);

  return (
    <Layout title="PrawoOZE – Przepisy i Dotacje OZE w Polsce">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand to-brand-dark text-white py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-blue-200 text-sm font-semibold uppercase tracking-wider mb-2">Portal prawny</p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            Prawo energetyczne,<br className="hidden md:block" /> OZE i dotacje w Polsce
          </h1>
          <p className="text-blue-100 text-lg max-w-xl mb-6">
            Przepisy, regulacje, ulgi podatkowe i dofinansowania dla prosumentów i inwestorów OZE.
          </p>
          <Link to="/posts/" className="inline-block bg-white text-brand font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition">
            Przeglądaj artykuły →
          </Link>
        </div>
      </section>

      {/* Featured */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-xl font-bold text-gray-800 mb-4 border-l-4 border-brand pl-3">Polecany artykuł</h2>
        <Link to={`/posts${featured.node.fields.slug}`} className="group block bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden">
          <div className="p-6">
            {featured.node.frontmatter.category && (
              <span className="text-xs font-semibold text-brand uppercase tracking-wider">
                {featured.node.frontmatter.category}
              </span>
            )}
            <h3 className="text-2xl font-bold mt-1 mb-3 group-hover:text-brand transition">
              {featured.node.frontmatter.title}
            </h3>
            <p className="text-gray-600">{featured.node.frontmatter.excerpt ?? featured.node.frontmatter.description}</p>
            <p className="text-sm text-gray-400 mt-4">{featured.node.frontmatter.date}</p>
          </div>
        </Link>
      </section>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-14">
        <h2 className="text-xl font-bold text-gray-800 mb-4 border-l-4 border-brand pl-3">Najnowsze artykuły</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {latest.map(({ node }) => (
            <Link key={node.fields.slug} to={`/posts${node.fields.slug}`}
              className="group bg-white rounded-xl shadow hover:shadow-md transition flex flex-col overflow-hidden">
              <div className="p-5 flex-1">
                {node.frontmatter.category && (
                  <span className="text-xs font-semibold text-brand uppercase">{node.frontmatter.category}</span>
                )}
                <h3 className="font-semibold mt-1 text-gray-800 group-hover:text-brand transition leading-snug">
                  {node.frontmatter.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                  {node.frontmatter.excerpt ?? node.frontmatter.description}
                </p>
              </div>
              <div className="px-5 pb-4 text-xs text-gray-400">{node.frontmatter.date}</div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/posts/" className="inline-block bg-brand text-white font-semibold px-8 py-3 rounded-lg hover:bg-brand-dark transition">
            Wszystkie artykuły
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          fields { slug }
          frontmatter {
            title description excerpt date category featured image tags
          }
        }
      }
    }
  }
`;

export default IndexPage;
export const Head = () => <title>PrawoOZE – Przepisy i Dotacje OZE w Polsce</title>;
