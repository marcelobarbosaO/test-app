module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', '@babel/preset-react'],
    plugins: ['react-native-reanimated/plugin', ['module-resolver', {
      alias: {
        '#Types': './src/@types',
        '#Components': './src/components',
        '#Routes': './src/routes',
        '#Screens': './src/screens',
        '#Hooks': './src/hooks',
        '#Databases': './src/databases',
        '#Services': './src/services',
        '#Theme': './src/theme',
        '#Tests': './src/tests',
        '#Utils': './src/utils',
      }
    }]]
  };
};
