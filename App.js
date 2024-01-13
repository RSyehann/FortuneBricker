import React, { useState } from 'react';
import './App.css';

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
