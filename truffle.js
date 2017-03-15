// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // Match any network id
     gas:3000000

    },
    ropsten: {
      host: 'localhost',
      port: 8545,
      network_id: 3,
      from: "0xF1E240B49336b84a45bd5652D8E42Ff06a15c509"
    }
  }
}
