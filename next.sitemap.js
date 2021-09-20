module.exports = {
  changefreq: 'weekly',
  generateRobotsTxt: true,
  priority: 0.5,
  siteUrl: 'https://www.guessthehero.com',
  transform: (config, path) => ({
    loc: path,
    changefreq: path === '/game' ? 'always' : config.changefreq,
    priority: path === '/game' ? 0.7 : config.priority,
    lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    alternateRefs: config.alternateRefs ?? [],
  }),
};
