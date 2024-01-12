// 導入ethers包
import { ethers } from "ethers";

// 利用ethers默認的Provider連接以太坊網路
// const provider = new ethers.getDegfaultProvider();
const ALCHEMY_MAINNET_URL = 'https://eth-mainnet.g.alchemy.com/v2/8azAA85YBz_bCgy4_zq2ZdQq1lAzEl1L'
const provider = new ethers.JsonRpcProvider(ALCHEMY_MAINNET_URL)

const main = async () => {
    // 查詢 Vitalik 的餘額
    const balance = await provider.getBalance(`vitalik.eth`);
    // 將餘額輸出在console
    console.log(`ETH Balance of vitalik: ${ethers.formatEther(balance)} ETH`;)
}
main()