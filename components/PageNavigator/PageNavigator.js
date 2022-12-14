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
import VendorPage from "../vendorpage/VendorPage";
import Activity from "../Activity/Activity";
import ActivityDetail from "../Activity/ActivityDetail";

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
			}}>
			<Stack.Group>
				<Stack.Screen
					name='Login'
					component={Login}
					options={{
						headerShown: false,
					}}
				/>

				<Stack.Screen
					name='Register'
					component={Register}
					options={{
						headerShown: false,
					}}
				/>

				<Stack.Screen
					name='SearchVendor'
					component={SearchVendor}
					options={{
						headerShown: false,
					}}
				/>

				<Stack.Screen
					name='Vendor'
					component={VendorPage}
					options={({ route }) => ({
						// configure param component
						// https://reactnavigation.org/docs/headers/#setting-the-header-title
						title: route?.params?.vendor.name || "get title from route",
						headerShown: false,
						// headerBackButtonMenuEnabled: true,
					})}
				/>

				<Stack.Screen
					name='Main'
					component={MainNavigator}
					screenOptions={{
						statusbar: {
							color: "black",
						},
					}}
				/>

				<Stack.Screen
					name='Cart'
					component={Cart}
					options={{
						headerShown: true,
						headerBackTitle: "Vendor",
					}}
				/>

				<Stack.Screen
					name='Checkout'
					component={Checkout}
					options={{
						headerShown: true,
						headerBackButtonMenuEnabled: true,
					}}
				/>

				<Stack.Screen
					name='ActivityDetail'
					component={ActivityDetail}
					options={{
						headerShown: false,
					}}
				/>
			</Stack.Group>
			<Stack.Group screenOptions={{ presentation: "modal" }}>
				<Stack.Screen
					name='Voucher'
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
