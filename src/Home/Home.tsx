import { useReactiveClient } from "@dynamic-labs/react-hooks";
import { FC, useState } from "react";
import { client } from "../client";
import { LoginView } from "../LoginView";
import { DisplayAuthenticatedUserView } from "../DisplayAuthenticatedUserView";
import { Text, Button, View } from "react-native";

type ViewType = "login" | "authenticated" | "settings" | "profile";

export const Home: FC = () => {
  const { auth, sdk } = useReactiveClient(client);

  if (!sdk.loaded) {
    return <Text>Loading...</Text>;
  }

  if (auth.token) {
    return <DisplayAuthenticatedUserView />;
  }

  return <LoginView />;
};
