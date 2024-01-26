import { StyleSheet } from "react-native";
import WebView from "react-native-webview";
import { useRef } from "react";
import OurCommunityScreen from "@/components/OurCommunityScreen";
import OurIdentityScreen from "@/components/OurIdentityScreen";
import OurMissionScreen from "@/components/OurMissionScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

export default function AboutScreen() {
  const webRef = useRef<WebView>(null);
  const hideElementsJS = `
  (function() {
    // Function to hide elements
    function hideElements() {
      var header = document.getElementsByClassName('w-block-background')[0];
      var bookNowBanner = document.getElementById('WIUqfk');
      var footer = document.getElementById('RSyeth');

      // Check if elements exist and hide them
      if(header) header.style.display = 'none';
      // if(bookNowBanner) bookNowBanner.style.display = 'none';
      if(footer) footer.style.display = 'none';
      
      // If all elements are found and hidden, clear the interval
      if(header && bookNowBanner && footer) {
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
          console.log("on load event - about");
          webRef.current.injectJavaScript(hideElementsJS);
        }
      }}
      ref={webRef}
      source={{ uri: "https://www.salonaubrey.com/#mtNUCP" }}
      style={styles.container}
    />
  );

  function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Our Mission" component={OurMissionScreen} />
        <Tab.Screen name="Our Identity" component={OurIdentityScreen} />
        <Tab.Screen name="Our Community" component={OurCommunityScreen} />
      </Tab.Navigator>
    );
  }
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
function createMaterialTopTabNavigator() {
  throw new Error("Function not implemented.");
}
