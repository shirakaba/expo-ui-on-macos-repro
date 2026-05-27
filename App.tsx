import { Button, Host, VStack, Text } from "@expo/ui/swift-ui";
import { fixedSize } from "@expo/ui/swift-ui/modifiers";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Host style={{ flex: 1 }}>
        <VStack spacing={8}>
          <Text>Expo UI components on macOS</Text>
          <SaveButton />
        </VStack>
      </Host>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

function SaveButton() {
  return (
    <Button
      variant="glassProminent"
      onPress={() => alert("Hello from Expo UI!")}
      modifiers={[fixedSize()]}
    >
      Save changes
    </Button>
  );
}
