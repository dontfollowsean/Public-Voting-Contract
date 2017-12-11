var Voting = artifacts.require('./Voting.sol');
module.exports = function(deployer) {
	deployer.deploy(Voting, ['Chris', 'Nick', 'Mike'], { gas: 6700000 });
};
