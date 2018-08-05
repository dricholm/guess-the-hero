module.exports = {
  baseUrl: process.env.BASE_URL,
  css: {
    loaderOptions: {
      sass: {
        data: '@import "src/styles/variables"; @import "src/styles/mixins";',
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
};
