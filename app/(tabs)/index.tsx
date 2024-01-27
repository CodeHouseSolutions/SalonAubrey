import { StyleSheet } from "react-native";
import WebView from "react-native-webview";
import { useEffect, useRef } from "react";

export default function HomeScreen() {
  const webRef = useRef<WebView>(null);
  const hideElementsJS = `
  (function() {
    // Function to hide elements
    function hideElements() {
      var headerBanner = document.getElementsByClassName('w-cell header-banner-wrapper row')[0];
      var bookNowBanner = document.getElementById('WIUqfk');
      var footer = document.getElementById('RSyeth');
      
      // Check if elements exist and hide them
      if(headerBanner) headerBanner.style.display = 'none';
      if(bookNowBanner) bookNowBanner.style.display = 'none';
      if(footer) footer.style.display = 'none';
      
      // If all elements are found and hidden, clear the interval
      if(headerBanner && bookNowBanner && footer) {
        clearInterval(checkInterval);
      }
    }
    
    // Set an interval to check for elements every 100 milliseconds
    var checkInterval = setInterval(hideElements, 100);
    
    // Call hideElements immediately in case elements are already available
    hideElements();
  })()
  `;

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
      onLoadEnd={() => {
        if (webRef.current) {
          console.log("on load event - home");
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
