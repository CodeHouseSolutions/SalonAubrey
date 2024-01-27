import { StyleSheet } from "react-native";
import WebView from "react-native-webview";
import { useRef } from "react";

export default function OurIdentityScreen() {
  const webRef = useRef<WebView>(null);

  const hideElementsJS = `
  (function() {
    // Function to hide elements
    function hideElements() {
      var headerBanner = document.getElementsByClassName('w-cell header-banner-wrapper row')[0];
      var footer = document.getElementById('RSyeth');
      
      // Check if elements exist and hide them
      if(headerBanner) headerBanner.style.display = 'none';
      if(footer) footer.style.display = 'none';
      
      // If all elements are found and hidden, clear the interval
      if(headerBanner && footer) {
        clearInterval(checkInterval);
      }
    }
    
    // Set an interval to check for elements every 100 milliseconds
    var checkInterval = setInterval(hideElements, 100);
    
    // Call hideElements immediately in case elements are already available
    hideElements();
  })()
  `;

  return (
    <WebView
      cacheEnabled={false}
      onLoadEnd={() => {
        if (webRef.current) {
          console.log("on load event - our identity");
          webRef.current.injectJavaScript(hideElementsJS);
        }
      }}
      ref={webRef}
      source={{ uri: "https://www.salonaubrey.com/about-salon-aubrey" }}
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
