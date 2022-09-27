import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Checkout from "../Checkout";
import Register from "../Register";
import Login from "../Login";
import Voucher from "../Voucher";
import Cart from "../Cart";
import MainNavigator from "../MainNavigator";
import { useFonts } from "expo-font";
// import { AntDesign } from "@expo/vector-icons";
// import { Pressable } from "react-native";
import SearchVendor from "../SearchVendor/SearchVendor";

export default function PageNavigator() {
  const Stack = createNativeStackNavigator();

  const [fontsLoaded] = useFonts({
    "OpenSauceSans-ExtraBold": require("../../assets/fonts/OpenSauceSans-ExtraBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#F9F9F9",
        },
        headerTitleStyle: {
          fontSize: 20,
          fontFamily: "OpenSauceSans-ExtraBold",
        },
        // headerLeft: () => (
        //   <Pressable>
        //     <AntDesign name="left" size={24} color="black" />
        //   </Pressable>
        // )
      }}
    >
      <Stack.Group>
        {/* <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        /> 
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Main"
          component={MainNavigator}
          screenOptions={{
            statusbar: {
              color: "black",
            },
          }}
        />
        <Stack.Screen
          name="SearchVendor"
          component={SearchVendor}
          options={{
            headerShown: false
          }}
        /> */}
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            headerShown: true,
          }}
        />

        <Stack.Screen
          name="Checkout"
          component={Checkout}
          options={{
            headerShown: true,
            headerBackButtonMenuEnabled: true,
          }}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="Voucher"
          component={Voucher}
          options={{
            headerShown: true,
            headerBackVisible: true,
            headerBackButtonMenuEnabled: true,
            headerTitle: "Vouchers Available",
            headerTitleStyle: {
              fontWeight: "900",
              fontSize: 20,
            },
            animation: "slide_from_bottom",
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
