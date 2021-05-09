function Config() {
    return {
        API_PATH: "",
        API_KEY: "",
        CHAINS: [
            { chainName: "Ethereum Mainnet", id: 1 },
            { chainName: "Binance Smart Chain", id: 56 }
        ]
    };
}

export const config = Config;