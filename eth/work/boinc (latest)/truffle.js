module.exports = {
  build: {
    "index.html": "index.html",
    "app.js": [
      "javascripts/app.js"
    ],
    "app.css": [
      "stylesheets/app.css"
    ],
    "images/": "images/"
  },
  deploy: [
    
    "Reward"
  ],
  rpc: {
    host: "localhost",
  //  ethereum-js testrpc
    port: 8545
      // ethersim
 //  port: 8101
  }
};
