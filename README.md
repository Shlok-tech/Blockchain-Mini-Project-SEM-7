<hr />

# MediChain

Revolutionizing healthcare data management: blockchain-based medical record storage for patients and insurance companies.

**Created by Shlok, a 7th semester engineering student.**

## 🎥 Implementation Video

Check out the implementation video for a detailed walkthrough of the MediChain project:

[Implementation Video](./Implementation_mediChain.mov)

## 📄 Project Report

For a detailed project report, please refer to:

[MediChain Report](./MediChain-2.pdf)

## 📊 Presentation

For the project presentation, please refer to:

[MediChain Presentation](./mediChain_PPT.pdf)

## ℹ️ Problem Statement

The data privacy of patients is essential because it involves sensitive personal information, such as medical records, test results, and health history. If failed to do so it can result in various consequences, such as financial loss, identity theft, damage to reputation, and even physical harm. It can also lead to discrimination, as individuals with certain health conditions may face challenges in obtaining health insurance.

## ℹ️ About The Project

My project MediChain seeks to address these challenges by leveraging the power of blockchain to create a secure, decentralized platform for storing and sharing healthcare data. By doing so, I hope to empower patients and Insurance providers, to make more informed decisions, improve outcomes, and advance the field of healthcare as a whole.

### Features

- Secure storage of medical records on blockchain
- Decentralized platform for data sharing
- Integration with IPFS for file storage
- User roles: Patient, Doctor, Insurer
- Smart contracts written in Solidity

## ℹ️ Future Prospects

1. I will be implementing insurance policy as ERC-721 Standard (i.e Non-Fungible Tokens), so as to specify the uniqueness and ownership of each insurance policy.
2. I will be giving patients the flexibility to buy health insurance policy according to their preference instead of defined policies by the insurance provider.
3. I will predict policy annual premium amount using Machine Learning techniques based on factors like patient's age, location, etc.

## 🛠️ Built With

- [React](https://reactjs.org/) - Frontend framework
- [Solidity](https://soliditylang.org/) - Smart contract language
- [Truffle](https://trufflesuite.com/) - Development framework for Ethereum
- [Mocha](https://mochajs.org/) - Testing framework
- [Chai](https://chaijs.com/) - Assertion library
- [Infura](https://infura.io/) - IPFS and Ethereum infrastructure
- [Web3.js](https://web3js.readthedocs.io/) - Ethereum JavaScript API
- [Bootstrap](https://getbootstrap.com/) - CSS framework

## 📌 Installation

To set up the project locally, follow the steps below.

### Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (version 14 or higher)
- [Ganache](https://trufflesuite.com/ganache/) - Local Ethereum blockchain
- [MetaMask Wallet Extension](https://metamask.io/download/) or a Web3-enabled browser like Brave
- [Truffle](https://trufflesuite.com/docs/truffle/getting-started/installation) (will be installed globally)

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Shlok-tech/mediChain.git
   cd mediChain
   ```

2. **Install dependencies:**
   ```bash
   npm i -g truffle
   npm run client:install
   npm run truffle:install
   ```

3. **Set up Infura (for IPFS):**
   - Obtain Infura API Key and API Secret for IPFS from [Infura Dashboard](https://infura.io/).
   - Create a dedicated gateway for your project.
   - Set the environment variables in `client/.env` file. You can rename `client/.env.example` to `client/.env` if it exists.
     ```bash
     REACT_APP_INFURA_PROJECT_ID=your_project_id
     REACT_APP_INFURA_API_KEY_SECRET=your_api_key_secret
     REACT_APP_INFURA_DEDICATED_GATEWAY=your_dedicated_gateway
     ```

## 🚀 Running the Project

For detailed steps on running the project, refer to [run.txt](run.txt).

In summary:

1. Start Ganache (local Ethereum blockchain).
2. Run `npm run truffle:migrate` to deploy smart contracts.
3. Run `npm run client:start` to start the React app.
4. Connect MetaMask to Ganache network (RPC URL: http://127.0.0.1:8545, Chain ID: 1337).
5. Visit http://localhost:3000 in your browser.

## 📝 Usage

- Register as a Patient, Doctor, or Insurer.
- Patients can upload and manage their medical records.
- Doctors can access patient records with permission.
- Insurers can verify claims securely.

## 🧪 Testing

To run tests for the smart contracts:

```bash
npm run truffle:test
```

## ⚠️ Disclaimer

Note: There have been bugs with IPFS integration due to changes in Infura. Also, please be mindful that smart contracts have not undergone any audits and should not be used on Mainnet.
