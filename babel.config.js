module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin', ['module-resolver', {
      alias: {
        '#Assets': './src/assets',
        '#Types': './src/@types',
        '#Components': './src/components',
        '#Hooks': './src/hooks',
        '#Routes': './src/routes',
        '#Screens': './src/screens',
        '#Services': './src/services',
        '#Store': './src/store',
        '#Utils': './src/utils',
        '#Styles': './src/styles',
      }
    }]]
  };
};
