import { BaseWallet, WalletsModule } from "@dynamic-labs/client";
import { ChainType, EVM, createConfig, getChains } from "@lifi/sdk";
import {
  getWalletClient,
  switchChain,
  type WalletClient,
  type ViemChain,
} from "@wagmi/core";
import type { Config } from "wagmi";

export const initializeLiFiConfig = (
  wagmiConfig: Config,
  wallets: WalletsModule,
  viem: any
) => {
  return createConfig({
    integrator: "DynamicDemo1",
    providers: [
      EVM({
        getWalletClient: () => {
          const client = viem.createWalletClient({
            wallet: wallets.primary,
          });
          return client;
        },
        switchChain: async (chainId) => {
          try {
            console.log("switchChain", chainId);
            // if (!wallets.primary) {
            //   throw new Error("No primary wallet");
            // }
            await switchChain(wagmiConfig, { chainId });
            await wallets.switchNetwork({
              wallet: wallets.primary,
              chainId,
            });
            console.log("switched to chain", chainId);
            const client = viem.createWalletClient({
              wallet: wallets.primary,
            });
            return client;
          } catch (error) {
            console.error("Error switching chain:", error);
            throw error;
          }
        },
      }),
    ],
    apiKey: process.env.PUBLIC_LIFI_API_KEY,
  });
};

export const loadLiFiChains = async () => {
  try {
    const chains = await getChains({
      chainTypes: [ChainType.EVM],
    });
    return chains;
  } catch (error) {
    console.error("Error loading LiFi chains", error);
    return [];
  }
};
