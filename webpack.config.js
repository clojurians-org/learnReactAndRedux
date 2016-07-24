var getConfig = require('hjs-webpack');
var isDev = process.env.NODE_ENV !== 'production'
var config = getConfig({
  in: './index.js',
  out: 'dist',
  clearBeforeBuild: true,
  isDev: isDev,
  output: {
  	hash:true
  }
});

if(isDev){
  config.entry[0] = config.entry[0] + '?reload=true';
  config.entry.unshift('react-hot-loader/patch');
}

module.exports = config;