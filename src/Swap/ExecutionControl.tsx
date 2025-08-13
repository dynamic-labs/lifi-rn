import { RouteExtended } from "@lifi/sdk";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

interface ExecutionControlProps {
  activeRoute: RouteExtended | null;
  isExecuting: boolean;
  isRouteCompleted: boolean;
  onResumeRoute: () => void;
  onMoveToBackground: () => void;
  onStopRoute: () => void;
}

const LightningIcon = () => (
  <Svg
    style={styles.lightningIcon}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </Svg>
);

export default function ExecutionControl({
  activeRoute,
  isExecuting,
  isRouteCompleted,
  onResumeRoute,
  onMoveToBackground,
  onStopRoute,
}: ExecutionControlProps) {
  if (!activeRoute || isRouteCompleted) return null;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <LightningIcon />
        </View>
        <Text style={styles.title}>Route Execution Control</Text>
      </View>

      <View style={styles.buttonContainer}>
        {isExecuting ? (
          <>
            <TouchableOpacity
              onPress={onMoveToBackground}
              style={styles.moveToBackgroundButton}
            >
              <Text style={styles.moveToBackgroundText}>
                Move to Background
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onStopRoute} style={styles.stopButton}>
              <Text style={styles.stopButtonText}>Stop Execution</Text>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity onPress={onResumeRoute} style={styles.resumeButton}>
            <Text style={styles.resumeButtonText}>Resume Route</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          <Text style={styles.infoLabel}>Route ID:</Text>{" "}
          {activeRoute.id.slice(0, 8)}...
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.infoLabel}>Status:</Text>{" "}
          {isExecuting ? "Executing" : "Paused"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EFF6FF", // blue-50 equivalent
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 24,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "#BFDBFE", // blue-200
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    gap: 8,
  },
  iconContainer: {
    width: 24,
    height: 24,
    backgroundColor: "#3B82F6", // blue-500
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  lightningIcon: {
    width: 16,
    height: 16,
    color: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1E3A8A", // blue-900
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  moveToBackgroundButton: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    backgroundColor: "#DBEAFE", // blue-100
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  moveToBackgroundText: {
    color: "#1D4ED8", // blue-700
    fontWeight: "500",
    fontSize: 14,
  },
  stopButton: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    backgroundColor: "#FEE2E2", // red-100
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  stopButtonText: {
    color: "#B91C1C", // red-700
    fontWeight: "500",
    fontSize: 14,
  },
  resumeButton: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    backgroundColor: "#3B82F6", // blue-500
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  resumeButtonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 14,
  },
  infoContainer: {
    marginTop: 16,
    padding: 12,
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#BFDBFE", // blue-200
  },
  infoText: {
    fontSize: 14,
    color: "#1E40AF", // blue-800
    marginBottom: 4,
  },
  infoLabel: {
    fontWeight: "500",
  },
});
