const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/returnzip",
    createProxyMiddleware({
      target: "https://qhautoformreact.herokuapp.com", 
      changeOrigin: true,
    })
  ); 
  app.use(
    "/getzip",
    createProxyMiddleware({
      target: "https://qhautoformreact.herokuapp.com", 
      changeOrigin: true,
    })
  ); 
  app.use(
    "/getmake",
    createProxyMiddleware({
      target: "https://qhautoformreact.herokuapp.com", 
      changeOrigin: true,
    })
  ); 
  app.use(
    "/getmodel",
    createProxyMiddleware({
      target: "https://qhautoformreact.herokuapp.com", 
      changeOrigin: true,
    })
  ); 
  
  app.use(
    "/genericPostlead.php",
    createProxyMiddleware({
      target: "https://leads.quotehound.com", 
      secure:false,
      changeOrigin: true,
    })
  );
};
