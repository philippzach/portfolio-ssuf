module.exports = {
  _pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  _title: 'Swiss Startup Factory - Switzerlands #1 Startup Accelerator', // Navigation and Site Title
  _titleAlt: 'Swiss Startup Factory', // Title for JSONLD
  description: 'Switzerlands #1 Startup Accelerator',
  _url: 'https://www.swissstartupfactory.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/socialsharing.jpg', // Used for SEO
  defaultBanner: '/socialsharing.jpg',

  // JSONLD / Manifest
  favicon: 'src/factory.svg', // Used for manifest favicon generation
  shortName: 'Startup', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Swiss Startup Factory', // Author for schemaORGJSONLD
  themeColor: '#f7f7f7',
  backgroundColor: '#EBEDF2',

  twitter: '@S_S_UF', // Twitter Username
};
