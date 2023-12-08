import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import '@typechain/hardhat'
import 'hardhat-deploy'
import 'dotenv/config'
import "hardhat-gas-reporter"
import "solidity-coverage"

const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY || ''
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL || ''
const ETHER_SCAN_API_KEY = process.env.ETHER_SCAN_API_KEY || ''

const config: HardhatUserConfig = {
  // solidity: "0.8.8",
  solidity: {
    compilers: [{ version: '0.8.8' }, { version: '0.6.6' }],
  },
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 31337,
    },
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [SEPOLIA_PRIVATE_KEY],
      chainId: 11155111,
    },
  },
   etherscan: {
    apiKey: ETHER_SCAN_API_KEY,
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
    outputFile: "gas-report.txt",
    noColors: true,
    // coinmarketcap: COINMARKETCAP_API_KEY,
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    player: {
      default: 1,
    },
  },
}

export default config
