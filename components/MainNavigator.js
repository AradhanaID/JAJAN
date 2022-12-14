import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "./Home/Home";
import Activity from "./Activity/Activity";

import Profile from "./Profile/Profile";
import { useFonts } from "expo-font";
import { StatusBar } from "react-native";
import { colorStyles } from "./Styling/GlobalStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useEffect } from "react";

const Tab = createBottomTabNavigator();

// Screens
const homeName = "Home";
const activityName = "Activity";
const profileName = "Profile";

export default function MainNavigator({ route }) {
  // use inset to account for the extra space at the botoom
  const insets = useSafeAreaInsets();

  const [fontsLoaded] = useFonts({
    "OpenSauceSans-Regular": require("../assets/fonts/OpenSauceSans-Regular.ttf"),
    "OpenSauceSans-Medium": require("../assets/fonts/OpenSauceSans-Medium.ttf"),
    "OpenSauceSans-SemiBold": require("../assets/fonts/OpenSauceSans-SemiBold.ttf"),
    "OpenSauceSans-Bold": require("../assets/fonts/OpenSauceSans-Bold.ttf"),
    "OpenSauceSans-ExtraBold": require("../assets/fonts/OpenSauceSans-ExtraBold.ttf"),
    "OpenSauceSans-Black": require("../assets/fonts/OpenSauceSans-Black.ttf"),
    "OpenSauceSans-Light": require("../assets/fonts/OpenSauceSans-Light.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let routeName = route.name;
          if (routeName === homeName) {
            iconName = focused ? "home" : "home-outline";
          } else if (routeName === activityName) {
            iconName = focused ? "reader" : "reader-outline";
          } else if (routeName === profileName) {
            iconName = focused ? "person" : "person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        // Navbar Styling
        tabBarActiveTintColor: "#59D9A8",
        tabBarInactiveTintColor: "grey",
        tabBarLabelStyle: {
          fontFamily: "OpenSauceSans-Regular",
        },
        tabBarStyle: {
          height: 60 + insets.bottom,
        },
        tabBarItemStyle: {
          padding: 5,
        },
        tabBarActiveTintColor: "#59D9A8",
        tabBarInactiveTintColor: colorStyles[50],
      })}
    >
      {/* Navbar Selections */}
      <Tab.Screen name={homeName} component={Home} />
      <Tab.Screen name={activityName} component={Activity} />
      <Tab.Screen name={profileName} component={Profile} />
    </Tab.Navigator>
  );
}
