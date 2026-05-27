import {
  Button,
  Form,
  Host,
  Picker,
  Section,
  Switch,
  Text,
  TextField,
} from "@expo/ui/swift-ui";
import { useState } from "react";
import { Appearance, useColorScheme, type ColorSchemeName } from "react-native";

const THEMES = ["System", "Light", "Dark"];
const COLOR_SCHEMES: ColorSchemeName[] = [null, "light", "dark"];

export default function App() {
  const [name, setName] = useState("Nishan");
  const [notifications, setNotifications] = useState(true);
  const [haptics, setHaptics] = useState(false);
  const colorScheme = useColorScheme();
  const themeIndex = colorScheme === "dark" ? 2 : 1;

  return (
    <Host style={{ flex: 1 }}>
      <Form>
        <Section title="Profile">
          <TextField
            defaultValue={name}
            placeholder="Your name"
            onChangeText={setName}
          />
        </Section>
        <Section title="Preferences">
          <Switch
            value={notifications}
            label="Notifications"
            onValueChange={setNotifications}
          />
          <Switch
            value={haptics}
            label="Haptic feedback"
            onValueChange={setHaptics}
          />
          <Picker
            label="Appearance"
            variant="menu"
            options={THEMES}
            selectedIndex={themeIndex}
            onOptionSelected={({ nativeEvent: { index } }) => {
              Appearance.setColorScheme(COLOR_SCHEMES[index]);
            }}
          />
        </Section>

        <Section>
          <Button
            variant="glassProminent"
            onPress={() =>
              alert(
                `Saved!\n\nName: ${name}\nTheme: ${THEMES[themeIndex]}\nNotifications: ${
                  notifications ? "on" : "off"
                }\nHaptics: ${haptics ? "on" : "off"}`,
              )
            }
          >
            Save changes
          </Button>
        </Section>
      </Form>
    </Host>
  );
}
