import { StyleSheet } from "react-native";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import WebView from "react-native-webview";
import { useRef } from "react";

export default function ProductsScreen() {
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
      source={{ uri: "https://www.salonaubrey.com/hair-care-products" }}
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
