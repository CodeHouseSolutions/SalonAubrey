import { StyleSheet } from "react-native";
import WebView from "react-native-webview";
import { useEffect, useRef } from "react";

export default function TabOneScreen() {
  const webRef = useRef<WebView>(null);
  const hideElementsJS = `
  (function() {
    // navbar
    // document.getElementById('8b637a10-ad27-11eb-9b3f-2f906f5af45e').style.display = 'none';
      document.getElementsByClassName('span12 p20')[1].style.display = 'none';
      document.getElementsByClassName('footer-wrapper')[0].style.display = 'none';
      document.getElementsByClassName('toolbar-wrapper')[0].style.display = 'none';
      true; 
    })()`;

  useEffect(() => {
    if (webRef.current) {
      webRef.current.injectJavaScript(hideElementsJS);
      console.log("Injected JS");
    }
  }, [webRef]);

  return (
    <WebView
      injectedJavaScriptBeforeContentLoaded={`
      window.onerror = function(message, sourcefile, lineno, colno, error) {
        alert("Message: " + message + " - Source: " + sourcefile + " Line: " + lineno + ":" + colno);
        return true;
      };
      true;
    `}
      cacheEnabled={false}
      javaScriptEnabled={true}
      onLoadEnd={() => {
        if (webRef.current) {
          console.log("on load event");
          webRef.current.injectJavaScript(hideElementsJS);
        }
      }}
      ref={webRef}
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
