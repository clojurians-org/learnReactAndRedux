var getConfig = require('hjs-webpack');
var isDev = process.env.NODE_ENV !== 'production'
module.exports = getConfig({
  in: './index.js',
  out: 'dist',
  clearBeforeBuild: true,
  isDev: isDev,
  output: {
  	hash:true
  }
});