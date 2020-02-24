module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData:
          '@import "src/styles/variables"; @import "src/styles/mixins";',
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        assets: 'src/assets',
      },
    },
  },
  publicPath: process.env.BASE_URL,
  pwa: {
    manifestPath: 'public/manifest.webmanifest',
  },
};
