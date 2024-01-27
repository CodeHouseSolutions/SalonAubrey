import OurCommunityScreen from "@/components/OurCommunityScreen";
import OurIdentityScreen from "@/components/OurIdentityScreen";
import OurMissionScreen from "@/components/OurMissionScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

export default function AboutScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        // SOME styles function differently on web.
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "grey",
        tabBarIndicatorStyle: {
          backgroundColor: "tan",
          height: "100%",
          borderRadius: 9,
          borderWidth: 2,
        },
      }}
      sceneContainerStyle={{ backgroundColor: "transparent" }}
    >
      <Tab.Screen name="Our Mission" component={OurMissionScreen} />
      <Tab.Screen name="Our Identity" component={OurIdentityScreen} />
      <Tab.Screen name="Our Community" component={OurCommunityScreen} />
    </Tab.Navigator>
  );
}
