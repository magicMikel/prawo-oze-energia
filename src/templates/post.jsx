import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';

const PostTemplate = ({ data }) => {
  const post = data.markdownRemark;
  const related = data.related?.edges ?? [];

  return (
    <Layout
      title={post.frontmatter.title}
      description={post.frontmatter.description}
      image={post.frontmatter.image}
      date={post.frontmatter.date}
      type="article"
    >
      <article className="max-w-3xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-brand">Strona główna</Link>
          <span className="mx-2">/</span>
          <Link to="/posts/" className="hover:text-brand">Artykuły</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{post.frontmatter.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-8">
          {post.frontmatter.category && (
            <span className="text-xs font-semibold text-brand uppercase tracking-wider">
              {post.frontmatter.category}
            </span>
          )}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mt-2 mb-4">
            {post.frontmatter.title}
          </h1>
          <p className="text-gray-500 text-sm">
            {post.frontmatter.date}
            {post.frontmatter.author && <span> · {post.frontmatter.author}</span>}
          </p>
          {post.frontmatter.excerpt && (
            <p className="text-gray-600 text-lg mt-4 border-l-4 border-brand pl-4 italic">
              {post.frontmatter.excerpt}
            </p>
          )}
        </header>

        {/* Content */}
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        {/* Tags */}
        {post.frontmatter.tags?.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-2">
            {post.frontmatter.tags.map(tag => (
              <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-10 bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
          <h3 className="font-bold text-lg text-gray-900 mb-2">Chcesz sprawdzić dostępne dofinansowania?</h3>
          <p className="text-gray-600 text-sm mb-4">Poznaj programy dotacyjne dla prosumentów i inwestorów OZE.</p>
          <a href="https://czystepowietrze-dotacje.pl/dotacje/"
            className="inline-block bg-brand text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-brand-dark transition">
            Sprawdź dotacje →
          </a>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Powiązane artykuły</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {related.map(({ node: r }) => (
                <Link key={r.fields.slug} to={`/posts${r.fields.slug}`}
                  className="group block bg-white rounded-lg shadow p-4 hover:shadow-md transition">
                  <h3 className="font-semibold text-sm group-hover:text-brand transition leading-snug">
                    {r.frontmatter.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">{r.frontmatter.date}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title description excerpt date category image tags author
      }
    }
    related: allMarkdownRemark(
      filter: { fields: { slug: { ne: $slug } } }
      limit: 3
    ) {
      edges {
        node {
          fields { slug }
          frontmatter { title date }
        }
      }
    }
  }
`;

export default PostTemplate;
export const Head = ({ data }) => <title>{data.markdownRemark.frontmatter.title} | PrawoOZE</title>;
