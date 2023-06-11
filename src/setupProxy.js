const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/SourceSeperator',
    createProxyMiddleware({
      target:'http://127.0.0.1:8000',  // the URL of Django backend
      changeOrigin: true,
    })
  );
};
