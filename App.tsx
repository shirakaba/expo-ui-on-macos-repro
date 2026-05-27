import {
  Button,
  Form,
  Host,
  Picker,
  Section,
  Slider,
  Switch,
  Text,
  TextField,
} from "@expo/ui/swift-ui";
import { fixedSize } from "@expo/ui/swift-ui/modifiers";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

const THEMES = ["System", "Light", "Dark"];

export default function App() {
  const [name, setName] = useState("Nishan");
  const [notifications, setNotifications] = useState(true);
  const [haptics, setHaptics] = useState(false);
  const [themeIndex, setThemeIndex] = useState(0);
  const [volume, setVolume] = useState(0.6);

  return (
    <>
      <StatusBar style="auto" />
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
              onOptionSelected={({ nativeEvent: { index } }) =>
                setThemeIndex(index)
              }
            />
          </Section>

          <Section title="Volume">
            <Slider
              value={volume}
              min={0}
              max={1}
              onValueChange={setVolume}
              modifiers={[fixedSize()]}
            />
            <Text size={13}>{`${Math.round(volume * 100)}%`}</Text>
          </Section>

          <Section>
            <Button
              variant="glassProminent"
              onPress={() =>
                alert(
                  `Saved!\n\nName: ${name}\nTheme: ${THEMES[themeIndex]}\nNotifications: ${
                    notifications ? "on" : "off"
                  }\nHaptics: ${haptics ? "on" : "off"}\nVolume: ${Math.round(
                    volume * 100,
                  )}%`,
                )
              }
            >
              Save changes
            </Button>
          </Section>
        </Form>
      </Host>
    </>
  );
}
