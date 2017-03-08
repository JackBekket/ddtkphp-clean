var DrugDiscoveryToken=artifacts.require("DrugDiscoveryToken.sol");

module.exports = function(deployer) {
  deployer.deploy(DrugDiscoveryToken);
};
