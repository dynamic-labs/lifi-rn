import {
  Button,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { Token } from "@lifi/sdk";
import { Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Svg, { Path } from "react-native-svg";

interface SimpleChain {
  id: number;
  name: string;
}

interface SwapFormProps {
  fromChain: SimpleChain | null;
  toChain: SimpleChain | null;
  fromToken: Token | null;
  toToken: Token | null;
  amount: string;
  chains: SimpleChain[];
  fromTokens: Token[];
  toTokens: Token[];
  isLoadingChains: boolean;
  isLoadingTokens: boolean;
  onFromChainChange: (chain: SimpleChain | null) => void;
  onToChainChange: (chain: SimpleChain | null) => void;
  onFromTokenChange: (token: Token | null) => void;
  onToTokenChange: (token: Token | null) => void;
  onAmountChange: (amount: string) => void;
}

const SvgIcon = ({ children, ...props }: any) => (
  <Svg {...props}>{children}</Svg>
);

export default function SwapForm({
  fromChain,
  toChain,
  fromToken,
  toToken,
  amount,
  chains,
  fromTokens,
  toTokens,
  isLoadingChains,
  isLoadingTokens,
  onFromChainChange,
  onToChainChange,
  onFromTokenChange,
  onToTokenChange,
  onAmountChange,
}: SwapFormProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Swap Configuration</Text>
      <View style={styles.grid}>
        <View style={styles.column}>
          <View style={styles.sectionHeader}>
            <View style={styles.fromIcon}>
              <Text style={styles.fromIconText}>→</Text>
            </View>
            <Text style={styles.sectionTitle}>From</Text>
          </View>
          <View style={styles.formSection}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Chain</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={fromChain?.id || ""}
                  onValueChange={(value) => {
                    const chainId = parseInt(value);
                    const chain = chains.find((c) => c.id === chainId);
                    onFromChainChange(chain || null);
                  }}
                  enabled={!isLoadingChains}
                  style={styles.picker}
                >
                  <Picker.Item
                    value=""
                    label={
                      isLoadingChains ? "Loading chains..." : "Select chain"
                    }
                  />
                  {chains.map((chain) => (
                    <Picker.Item
                      key={chain.id}
                      value={chain.id}
                      label={chain.name}
                    />
                  ))}
                </Picker>
              </View>
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Token</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={fromToken?.address || ""}
                  onValueChange={(value) => {
                    const token = fromTokens.find((t) => t.address === value);
                    onFromTokenChange(token || null);
                  }}
                  enabled={!!fromChain && !isLoadingTokens}
                  style={styles.picker}
                >
                  <Picker.Item
                    value=""
                    label={
                      isLoadingTokens ? "Loading tokens..." : "Select token"
                    }
                  />
                  {fromTokens.map((token) => (
                    <Picker.Item
                      key={token.address}
                      value={token.address}
                      label={`${token.symbol} - ${token.name}`}
                    />
                  ))}
                </Picker>
              </View>
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Amount</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  value={amount}
                  onChangeText={onAmountChange}
                  placeholder="0.0"
                  editable={!!fromToken}
                  style={styles.textInput}
                  keyboardType="numeric"
                />
                <View style={styles.inputIcon}>
                  <TouchableOpacity style={styles.iconButton}>
                    <SvgIcon
                      style={styles.icon}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <Path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                      />
                    </SvgIcon>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.sectionHeader}>
            <View style={styles.toIcon}>
              <Text style={styles.toIconText}>←</Text>
            </View>
            <Text style={styles.sectionTitle}>To</Text>
          </View>
          <View style={styles.formSection}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Chain</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={toChain?.id || ""}
                  onValueChange={(value) => {
                    const chainId = parseInt(value);
                    const chain = chains.find((c) => c.id === chainId);
                    onToChainChange(chain || null);
                  }}
                  enabled={!isLoadingChains}
                  style={styles.picker}
                >
                  <Picker.Item
                    value=""
                    label={
                      isLoadingChains ? "Loading chains..." : "Select chain"
                    }
                  />
                  {chains.map((chain) => (
                    <Picker.Item
                      key={chain.id}
                      value={chain.id}
                      label={chain.name}
                    />
                  ))}
                </Picker>
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Token</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={toToken?.address || ""}
                  onValueChange={(value) => {
                    const token = toTokens.find((t) => t.address === value);
                    onToTokenChange(token || null);
                  }}
                  enabled={!!toChain && !isLoadingTokens}
                  style={styles.picker}
                >
                  <Picker.Item
                    value=""
                    label={
                      isLoadingTokens ? "Loading tokens..." : "Select token"
                    }
                  />
                  {toTokens.map((token) => (
                    <Picker.Item
                      key={token.address}
                      value={token.address}
                      label={`${token.symbol} - ${token.name}`}
                    />
                  ))}
                </Picker>
              </View>
            </View>
            <View style={styles.outputSection}>
              <View style={styles.outputPlaceholder}>
                <Text style={styles.outputPlaceholderText}>
                  Select tokens to see estimated output
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 8,
    marginBottom: 24,
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 24,
    textAlign: "center",
  },
  grid: {
    flexDirection: "row",
    gap: 16,
  },
  column: {
    flex: 1,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  fromIcon: {
    width: 32,
    height: 32,
    backgroundColor: "#FEE2E2",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  fromIconText: {
    color: "#DC2626",
    fontWeight: "bold",
    fontSize: 14,
  },
  toIcon: {
    width: 32,
    height: 32,
    backgroundColor: "#DCFCE7",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  toIconText: {
    color: "#16A34A",
    fontWeight: "bold",
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#111827",
  },
  formSection: {
    gap: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#374151",
    marginBottom: 8,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    backgroundColor: "white",
  },
  picker: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  inputContainer: {
    position: "relative",
  },
  textInput: {
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingRight: 48,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    backgroundColor: "white",
    fontSize: 16,
  },
  inputIcon: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    paddingRight: 12,
  },
  iconButton: {
    padding: 4,
  },
  icon: {
    width: 20,
    height: 20,
    color: "#9CA3AF",
  },
  outputSection: {
    paddingTop: 32,
  },
  outputPlaceholder: {
    backgroundColor: "#F9FAFB",
    borderRadius: 8,
    padding: 16,
    borderWidth: 2,
    borderColor: "#D1D5DB",
    borderStyle: "dashed",
  },
  outputPlaceholderText: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
  },
});
