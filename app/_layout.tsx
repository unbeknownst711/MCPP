import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";
import { MD3LightTheme, MD3DarkTheme, PaperProvider} from "react-native-paper";
import Index from "./index"

export default function RootLayout() {
    const {theme} = useMaterial3Theme();
    const colorScheme = useColorScheme();
    const paperTheme = colorScheme === 'dark' ? { ...MD3DarkTheme, colors: theme.dark } : { ...MD3LightTheme, colors: theme.light };
  return (
  <PaperProvider theme={paperTheme}>
  <Index />
  </PaperProvider>
  );
}
