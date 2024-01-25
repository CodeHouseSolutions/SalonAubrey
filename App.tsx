import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WebView from "react-native-webview";

export default function App() {
  return (
    <WebView
      source={{ uri: "https://salonaubrey.com/" }}
      style={styles.container}
    />
  );
}
/**
 * TODO: 
 * creating minimal webview app for barbershop
 * Add in account logo to save user information for streamlining 
 * prioritize booking page
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
