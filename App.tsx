// Import polyfills first
import "./polyfills";

import { StatusBar } from "expo-status-bar";
import { FC } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { Home } from "./src/Home";
import { client } from "./src/client";
import { Buffer } from "buffer";
import "react-native-get-random-values";
import { Auth0Provider } from "react-native-auth0";
import { auth0Domain, auth0ClientId } from "./constants";
import { CreateConnectorFn, WagmiProvider } from "wagmi";
import { LiFiProvider } from "./src/Swap/service/lifi-provider";
import { config } from "./src/Swap/service/wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

global.TextEncoder = require("text-encoding").TextEncoder;
global.Buffer = Buffer;

const connectors: CreateConnectorFn[] = [];

const App: FC = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <client.reactNative.WebView />
      <StatusBar style="auto" />

      <Auth0Provider domain={auth0Domain} clientId={auth0ClientId}>
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <LiFiProvider wagmiConfig={config} connectors={connectors}>
              <SafeAreaView style={styles.main}>
                <ScrollView>
                  <Home />
                </ScrollView>
              </SafeAreaView>
            </LiFiProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </Auth0Provider>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});

export default App;
