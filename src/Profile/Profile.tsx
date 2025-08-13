import { useReactiveClient } from "@dynamic-labs/react-hooks";
import { FC } from "react";
import { client } from "../client";
import { Button, StyleSheet, Text, View } from "react-native";

export const Profile: FC<{ setCurrentView: (view: string) => void }> = ({
  setCurrentView,
}) => {
  const { auth } = useReactiveClient(client);

  return (
    <View>
      <Text style={styles.section__heading}>User profile:</Text>
      <Button onPress={() => setCurrentView("main")} title="Back" />

      <View style={styles.section}>
        <View style={styles.content_section}>
          <Text>{JSON.stringify(auth.authenticatedUser, null, 2)}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.section__heading}>JWT:</Text>
        <View style={styles.content_section}>
          <Text>{auth.token}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: "stretch",
    gap: 40,
    padding: 20,
  },
  section: {
    gap: 5,
  },
  section__heading: {
    fontSize: 14,
    fontWeight: "bold",
  },
  content_section: {
    padding: 10,
    borderRadius: 6,
    backgroundColor: "#f9f9f9",
  },
  actions_section: {
    flexDirection: "column",
    gap: 6,
  },
  wallet_item: {
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eaeaea",
  },
  button_group: {
    marginTop: 8,
    gap: 8,
  },
});
