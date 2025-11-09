module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Find the source-map-loader rule and exclude web3 to prevent warnings
      const sourceMapRule = webpackConfig.module.rules.find(
        (rule) => rule.loader && rule.loader.includes('source-map-loader')
      );
      if (sourceMapRule) {
        sourceMapRule.exclude = /node_modules\/web3/;
      }
      return webpackConfig;
    },
  },
};
