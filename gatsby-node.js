exports.createPages = require('./gatsby/create-pages');
exports.onCreateNode = require('./gatsby/on-create-node');

exports.onCreateWebpackConfig = ({
  actions: { replaceWebpackConfig },
  getConfig,
}) => {
  const config = getConfig();

  config.module.rules.push({
    test: /\.worker\.js$/,
    use: { loader: 'workerize-loader' },
  });

  config.output.globalObject = 'this';

  replaceWebpackConfig(config);
};
