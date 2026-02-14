/** @type {import('next-sitemap').IConfig} */
const config = {
  changefreq: 'weekly',
  generateRobotsTxt: true,
  priority: 0.5,
  siteUrl: 'https://www.guessthehero.com',
  transform: (config, path) => ({
    loc: path,
    changefreq: path === '/play' ? 'always' : config.changefreq,
    priority: path === '/play' ? 0.7 : config.priority,
    lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    alternateRefs: config.alternateRefs ?? [],
  }),
};

export default config;
