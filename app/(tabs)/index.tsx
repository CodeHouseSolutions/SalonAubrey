import { StyleSheet } from "react-native";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import WebView from "react-native-webview";

export default function TabOneScreen() {
  // JS code to remove the tab bar
  const jsCode = `
    document.addEventListener('DOMContentLoaded', function() {
      var navSection = document.getElementById('nav');
      if (navSection) {
        navSection.style.display = 'none';
      }
      document.getElementBy
      // Change the body background color for visual feedback
      document.getElementById('#transparency').style.backgroundColor = 'pink';
    });
    true;
  `;
  return (
    <WebView
      injectedJavaScriptBeforeContentLoaded={`
      window.onerror = function(message, sourcefile, lineno, colno, error) {
        alert("Message: " + message + " - Source: " + sourcefile + " Line: " + lineno + ":" + colno);
        return true;
      };
      true;
    `}
      injectedJavaScript={jsCode}
      javaScriptEnabled={true}
      source={{ uri: "https://salonaubrey.com/" }}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
