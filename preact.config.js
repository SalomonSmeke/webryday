export default function (config) {
  if (process.env.NODE_ENV === 'production') {
    const publicPath = '/webryday/';
    // Preact bug: https://github.com/preactjs/preact-cli/issues/1390
    config.output.publicPath = publicPath;
    config.module.rules.push({
      test: /\.css/,
      loader: 'string-replace-loader',
      options: {
        search: /url\('\/assets\/(.*)?'\)/ig,
        replace: (_match, resource) => `url('${publicPath}assets/${resource}')`,
        flags: 'g',
      }
    });
  }
}
