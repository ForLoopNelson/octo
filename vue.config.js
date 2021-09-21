module.exports = {
  chainWebpack: config => config.resolve.set('symlinks', false),
  productionSourceMap: false,
  transpileDependencies: [
    // '@writewithocto/ink',
  ],
  pwa: {
    manifestOptions: {
      icons: [
        {
          src: './img/icons/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: './img/icons/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: './img/icons/android-chrome-maskable-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'maskable',
        },
        {
          src: './img/icons/android-chrome-maskable-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
        {
          src: './img/icons/apple-touch-icon-60x60.png',
          sizes: '60x60',
          type: 'image/png',
        },
        {
          src: './img/icons/apple-touch-icon-76x76.png',
          sizes: '76x76',
          type: 'image/png',
        },
        {
          src: './img/icons/apple-touch-icon-120x120.png',
          sizes: '120x120',
          type: 'image/png',
        },
        {
          src: './img/icons/apple-touch-icon-152x152.png',
          sizes: '152x152',
          type: 'image/png',
        },
        {
          src: './img/icons/apple-touch-icon-180x180.png',
          sizes: '180x180',
          type: 'image/png',
        },
        {
          src: './img/icons/apple-touch-icon.png',
          sizes: '180x180',
          type: 'image/png',
        },
        {
          src: './img/icons/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
        },
        {
          src: './img/icons/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
        {
          src: './img/icons/msapplication-icon-144x144.png',
          sizes: '144x144',
          type: 'image/png',
        },
        {
          src: './img/icons/mstile-150x150.png',
          sizes: '150x150',
          type: 'image/png',
        },
      ],
    },
    themeColor: "#121212",
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      clientsClaim: true,
      exclude: [
        /\.map$/,
      ],
      // solution for the current version of workbox plugin
      // https://forum.vuejs.org/t/vue-cli-plugin-pwa-additionalmanifestentries-error/89234/5
      manifestTransforms: [
        (originalManifest) => {
          const manifest = originalManifest.concat([
            { url: 'https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:wght@300;400;700&display=swap', revision: 'v1' },
          ]);
          // optionally set warning messages
          const warnings = [];
          return { manifest, warnings };
        },
      ],
      navigateFallback: '/index.html',
      runtimeCaching: [
        {
          urlPattern: new RegExp('^https\:\/\/cdnjs\.cloudflare\.com\/.*'),
          handler: 'staleWhileRevalidate',
          options: {
            cacheName: 'cloudflare-cache',
          },
        },
        {
          urlPattern: new RegExp('^https\:\/\/fonts\.gstatic\.com\/s\/.*'),
          handler: 'staleWhileRevalidate',
          options: {
            cacheName: 'font-cache',
          },
        },
      ],
      skipWaiting: true,
    },
  },
};
