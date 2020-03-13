module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "src/styles/declarations";',
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
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: './src/service-worker.js',
    },
    manifestPath: 'manifest.webmanifest',
    name: 'Guess the Hero',
    themeColor: '#1f2934',
    manifestOptions: {
      background_color: '#0c0d10',
      description: 'Guess DotA 2 heroes in public matches from stats.',
      start_url: './index.html',
      icons: [
        {
          src: './img/icons/icon-72x72.png',
          sizes: '72x72',
          type: 'image/png',
        },
        {
          src: './img/icons/icon-96x96.png',
          sizes: '96x96',
          type: 'image/png',
        },
        {
          src: './img/icons/icon-128x128.png',
          sizes: '128x128',
          type: 'image/png',
        },
        {
          src: './img/icons/icon-144x144.png',
          sizes: '144x144',
          type: 'image/png',
        },
        {
          src: './img/icons/icon-152x152.png',
          sizes: '152x152',
          type: 'image/png',
        },
        {
          src: './img/icons/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: './img/icons/icon-384x384.png',
          sizes: '384x384',
          type: 'image/png',
        },
        {
          src: './img/icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
  },
};
