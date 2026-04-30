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
        <meta name="google-site-verification" content="Qb9Zh4zrvp92rgy8GObXKHf9X49UTtPNEdiXeV92ivM" />
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
            <div className="mt-6 pt-4 border-t border-gray-700">
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-3">Sieć Portali OZE</p>
              <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
                <a href="https://ecoaudyt.app" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">EcoAudyt.app – Audyt Energetyczny</a>
                <a href="https://czystepowietrze-dotacje.pl" className="hover:text-white transition-colors">CzystePowietrze-Dotacje.pl</a>
                <a href="https://portal-oze.pl" className="hover:text-white transition-colors">Portal-OZE.pl</a>
                <a href="https://rynek-oze.pl" className="hover:text-white transition-colors">Rynek-OZE.pl</a>
                <a href="https://solarfinanse.pl" className="hover:text-white transition-colors">SolarFinanse.pl</a>
                <a href="https://solarfinance.pl" className="hover:text-white transition-colors">SolarFinance.pl</a>
              </div>
            </div>
            <p className="mt-4">&copy; 2026 prawodoenergii.pl</p>
          </div>
        </footer>
      </body>
    </>
  );
};

export default Layout;
