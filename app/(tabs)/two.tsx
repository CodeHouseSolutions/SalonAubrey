import { StyleSheet } from "react-native";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import WebView from "react-native-webview";
import { useRef } from "react";

export default function TabTwoScreen() {
  const webRef = useRef<WebView>(null);

  const hideElementsJS = `
  (function() {
    document.getElementById('nav').style.display = 'none';
      document.getElementsByClassName('logo')[0].style.display = 'none';
      document.getElementsByClassName('span12 p20')[1].style.display = 'none';
      document.getElementsByClassName('footer-wrapper')[0].style.display = 'none';
      document.getElementsByClassName('toolbar-wrapper')[0].style.display = 'none';
      true;
    })()`;

  return (
    <WebView
      cacheEnabled={false}
      onLoadEnd={() => {
        if (webRef.current) {
          console.log("on load event");
          webRef.current.injectJavaScript(hideElementsJS);
        }
      }}
      ref={webRef}
      source={{ uri: "https://salonaubrey.com/pages/book-an-appointment" }}
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
