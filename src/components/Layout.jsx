import React from 'react';
import { Link } from 'gatsby';
import '../styles/global.css';

const Layout = ({ children, title, description, image, date, type = 'website' }) => {
  const siteUrl = 'https://prawodoenergii.pl';
  const siteName = 'PrawoOZE';

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {description && <meta name="description" content={description} />}
        <meta property="og:type" content={type} />
        <meta property="og:title" content={`${title} | ${siteName}`} />
        {description && <meta property="og:description" content={description} />}
        {image && <meta property="og:image" content={`${siteUrl}${image}`} />}
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content="pl_PL" />
        <meta name="twitter:card" content="summary_large_image" />
        {date && <meta property="article:published_time" content={date} />}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-blue-50 text-gray-900 font-sans">
        <header className="bg-brand sticky top-0 z-50 shadow-md">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link to="/" className="text-white font-bold text-xl tracking-tight">⚖️ PrawoOZE</Link>
            <div className="hidden md:flex gap-6 text-sm font-medium">
              <Link to="/posts/" className="text-blue-100 hover:text-white transition">Artykuły</Link>
              <Link to="/o-serwisie/" className="text-blue-100 hover:text-white transition">O serwisie</Link>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="bg-gray-900 text-gray-400 mt-16 py-10">
          <div className="max-w-6xl mx-auto px-4 text-center text-sm">
            <p className="text-white font-semibold mb-2">PrawoOZE – prawodoenergii.pl</p>
            <p>Portal prawny o odnawialnych źródłach energii w Polsce</p>
            <p className="mt-4">&copy; 2026 prawodoenergii.pl</p>
          </div>
        </footer>
      </body>
    </>
  );
};

export default Layout;
