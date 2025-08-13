import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";

interface ActionButtonsProps {
  isLoading: boolean;
  isExecuting: boolean;
  hasRoutes: boolean;
  hasSelectedRoute: boolean;
  isFormValid: boolean;
  onGetRoutes: () => void;
  onExecuteSwap: () => void;
  onClear: () => void;
}

const LoadingSpinner = () => (
  <View style={styles.spinner}>
    <View style={styles.spinnerInner} />
  </View>
);

export default function ActionButtons({
  isLoading,
  isExecuting,
  hasRoutes,
  hasSelectedRoute,
  isFormValid,
  onGetRoutes,
  onExecuteSwap,
  onClear,
}: ActionButtonsProps) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={onGetRoutes}
          disabled={isLoading || !isFormValid}
          style={[
            styles.button,
            styles.getRoutesButton,
            (isLoading || !isFormValid) && styles.buttonDisabled,
          ]}
        >
          {isLoading ? (
            <View style={styles.buttonContent}>
              <LoadingSpinner />
              <Text style={styles.buttonText}>Getting Routes...</Text>
            </View>
          ) : (
            <Text style={styles.buttonText}>Get Routes</Text>
          )}
        </TouchableOpacity>

        {hasRoutes && !isExecuting && (
          <TouchableOpacity
            onPress={onExecuteSwap}
            disabled={isLoading || !hasSelectedRoute}
            style={[
              styles.button,
              styles.executeButton,
              (isLoading || !hasSelectedRoute) && styles.buttonDisabled,
            ]}
          >
            {isLoading ? (
              <View style={styles.buttonContent}>
                <LoadingSpinner />
                <Text style={styles.buttonText}>Executing...</Text>
              </View>
            ) : (
              <Text style={styles.buttonText}>Execute Swap</Text>
            )}
          </TouchableOpacity>
        )}

        {(hasRoutes || isExecuting) && (
          <TouchableOpacity
            onPress={onClear}
            style={[styles.button, styles.clearButton]}
          >
            <Text style={styles.clearButtonText}>Clear</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 12,
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    minHeight: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  getRoutesButton: {
    backgroundColor: "#3B82F6", // blue-500
  },
  executeButton: {
    backgroundColor: "#10B981", // green-500
  },
  clearButton: {
    backgroundColor: "#F3F4F6", // gray-100
    paddingHorizontal: 24,
  },
  buttonDisabled: {
    backgroundColor: "#D1D5DB", // gray-300
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
  clearButtonText: {
    color: "#374151", // gray-700
    fontWeight: "500",
    fontSize: 16,
  },
  spinner: {
    width: 16,
    height: 16,
    borderWidth: 2,
    borderColor: "white",
    borderTopColor: "transparent",
    borderRadius: 8,
  },
  spinnerInner: {
    width: 16,
    height: 16,
    borderWidth: 2,
    borderColor: "white",
    borderTopColor: "transparent",
    borderRadius: 8,
  },
});
