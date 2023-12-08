const networkConfig = {
  rinkeby: {
    name: 'rinkeby',
    chainId: 4,
    ethUsdPriceFeed: '0x8A753747A1Fa494EC906cE90E9f37563A8AF630e',
    blockConfirmations: 2,
  },
  sepolia: {
    name: 'sepolia',
    chainId: 11155111,
    ethUsdPriceFeed: '0x694AA1769357215DE4FAC081bf1f309aDC325306',
    blockConfirmations: 6,
  },
}

const developmentChains = ['hardhat', 'localhost']
const DECIMALS = '18'
const INITIAL_ANSWER = '2000000000000000000000'

module.exports = {
  networkConfig,
  developmentChains,
  DECIMALS,
  INITIAL_ANSWER,
}
