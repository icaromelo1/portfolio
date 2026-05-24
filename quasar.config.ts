import { configure } from 'quasar/wrappers';

export default configure((/* ctx */) => {
  return {
    boot: [],

    css: ['app.css'],

    extras: [],

    build: {
      target: { browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'] },
      vueRouterMode: 'history',
      typescript: { strict: true },
    },

    devServer: {
      open: true,
      port: 9100,
    },

    framework: {
      config: {},
      plugins: [],
    },

    animations: [],

    ssr: { pwa: false },
    pwa: {},
    cordova: {},
    capacitor: { hideSplashscreen: true },
    electron: { inspectPort: 5858, bundler: 'packager' },
    bex: { extraScripts: [] },
  };
});
