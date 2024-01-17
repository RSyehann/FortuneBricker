import React, { useState } from 'react';
import './App.css'; // 確保 App.css 在正確的路徑
import { WalletConnect } from "@thirdweb-dev/wallets";
import { ThirdwebProvider, ConnectWallet, metamaskWallet, coinbaseWallet, walletConnect, localWallet, embeddedWallet } from "@thirdweb-dev/react";

// Header component
function Header({ connectWallet, account }) {
    return (
        <header>
            <h1>FortuneBricker</h1>
            <button id="connectButton" onClick={connectWallet}>
                {account ? `Connected: ${account}` : 'Connect to Metamask'}
            </button>
        </header>
    );
}


// TokenSelect 組件
function TokenSelect() {
    return (
        <select id="tokenSelect">
            <option value="token1">Ethereum</option>
            <option value="token2">Optimism</option>
            <option value="token3">AAVE</option>
            <option value="token4">MATIC</option>
            <option value="token5">Avalanche</option>
        </select>
    );
}

// PayaButton 組件
function PayButton() {
    const [selectedToken, setSelectedToken] = useState("token1");

    const handlePayment = () => {
        console.log(`Selected token: ${selectedToken}`);
        // 在這添加支付邏輯
        // ...
    };

    return (
        <div>
            <TokenSelect />
            <button id="payButton" onClick={handlePayment}>Confrim and Pay</button>
        </div>
    );
}

// App 主組件
function App() {
    const [account, setAccount] = useState(null);

    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setAccount(accounts[0]);
            } catch (error) {
                console.error(error);
            }
        } else {
            console.log('Please install MetaMask!');
        }
    }

    return (
    <div className="App">
        <Header connectWallet={connectWallet} account={account} />
        <PayButton />
        {/* 這裡可以根據需要添加更多內容 */}
    </div>
  )
};



export default App;
export default function App() {
return (
    <ThirdwebProvider
      activeChain="mumbai"
      clientId="YOUR_CLIENT_ID"
      locale={en()}
      supportedWallets={[
        metamaskWallet(),
        coinbaseWallet({ recommended: true }),
        walletConnect(),
        localWallet(),
        embeddedWallet({
          auth: {
            options: [
              "email",
              "google",
              "apple",
              "facebook",
            ],
          },
        }),
      ]}
    >
      <ConnectWallet
        theme={"dark"}
        modalSize={"wide"}
      />
    </ThirdwebProvider>
  );
}

// JSX code in a React component
function Welcome(props) {
    return <div>Hello, {props.name}</div>
}

// Render the component
ReactDOM.render(
    <Welcome name="John" />
    document.getElementById('root')
);

const MetaMaskIntegration = () => {
    // 定義 state 來儲存選擇的代幣
    const [selectedToken, setSelectedToken] = useState('token1');

    // 處理連接 MetaMask 錢包的邏輯
    const handleConnect = () => {
        console.log('Connecting to MetaMask');
        const wallet = new WalletConnect();

    wallet.connect();
        // 連接邏輯...
    }
};

    // 處理支付邏輯
const handlePayment = () => {
        console.log(`Paying with token: ${selectedToken}`);
        // 你的支付邏輯...
    };

    return (
        <>
            <select id="tokenSelect" value={selectedToken} onChange={(e) => setSelectedToken(e.target.value)}>
                <option value="token1">Ethereum</option>
                <option value="token2">MATIC</option>
                <option value="token3">AAVE</option>
                <option value="token4">Synthetic</option>
                <option value="token5">Compound</option>
                <option value="token6">USDC</option>
                <option value="token7">USDT</option>
                /* 可以接續更多的Tokens */
            </select>

            <button id="connectButton" onClick={handleConnect}>
                Connect to MetaMask
            </button>

            <button id="payButton" onClick={handlePayment}>
                Confirm and Pay
            </button>
        </>
    );
};

export default MetaMaskIntegration
