import { getExplorerUrl } from "./utils";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Linking } from "react-native";

interface StatusMessagesProps {
  error: string | null;
  txHash: string | null;
  chainId?: number;
}

export default function StatusMessages({
  error,
  txHash,
  chainId,
}: StatusMessagesProps) {
  return (
    <>
      {error && (
        <View style={styles.errorContainer}>
          <View style={styles.errorIconWrapper}>
            <View style={styles.errorIconBackground}>
              <Text style={styles.errorIconText}>!</Text>
            </View>
          </View>
          <View style={styles.errorContent}>
            <Text style={styles.errorTitle}>Error</Text>
            <Text style={styles.errorMessage}>{error}</Text>
          </View>
          <View style={styles.errorContent}>
            <Text style={styles.errorTitle}>Error</Text>
            <Text style={styles.errorMessage}>{error}</Text>
          </View>
        </View>
      )}
      {txHash && (
        <View style={styles.successContainer}>
          <View style={styles.successIcon}>
            <View style={styles.successIconBackground}>
              <Text style={styles.successIconText}>✓</Text>
            </View>
          </View>
          <View style={styles.successContent}>
            <Text style={styles.successTitle}>Swap Executed Successfully!</Text>
            <Text style={styles.successMessage}>
              Route execution has been completed successfully.
            </Text>
          </View>
          <Text style={styles.successMessage}>
            {txHash === "Execution completed" ? (
              "Route execution has been completed successfully."
            ) : (
              <>
                Transaction:{" "}
                {(() => {
                  const explorerUrl = getExplorerUrl(txHash, chainId);
                  if (explorerUrl) {
                    return (
                      <TouchableOpacity
                        onPress={() => Linking.openURL(explorerUrl)}
                      >
                        {txHash.slice(0, 10)}...{txHash.slice(-8)}
                      </TouchableOpacity>
                    );
                  }
                  return txHash;
                })()}
              </>
            )}
          </Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    backgroundColor: "#FEE2E2",
    borderWidth: 1,
    borderColor: "#FDA4AF",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  errorIcon: {
    width: 24,
    height: 24,
    backgroundColor: "#FDA4AF",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  errorIconBackground: {
    width: 16,
    height: 16,
    backgroundColor: "#FDA4AF",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  errorIconText: {
    color: "#B91C1C",
    fontSize: 16,
    fontWeight: "bold",
  },
  errorContent: {
    flex: 1,
  },
  errorTitle: {
    color: "#B91C1C",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  errorMessage: {
    color: "#B91C1C",
    fontSize: 14,
    marginBottom: 12,
  },
  successContainer: {
    backgroundColor: "#DCFCE7",
    borderWidth: 1,
    borderColor: "#16A34A",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  successIcon: {
    width: 24,
    height: 24,
    backgroundColor: "#16A34A",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  successIconBackground: {
    width: 16,
    height: 16,
    backgroundColor: "#16A34A",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  successIconText: {
    color: "#16A34A",
    fontSize: 16,
    fontWeight: "bold",
  },
  successTitle: {
    color: "#16A34A",
    fontSize: 16,
    fontWeight: "bold",
  },
  successMessage: {
    color: "#16A34A",
    fontSize: 14,
    marginBottom: 12,
  },
});
