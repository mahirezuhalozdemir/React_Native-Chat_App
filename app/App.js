import React from "react";

//👇🏻 app screens
import Login from "./screens/Login";
import Messaging from "./screens/Messaging";
import Chat from "./screens/Chat";

//👇🏻 React Navigation configurations
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
//stack navigator; oluşturulan her yeni ekranın bir yığının tepesine yerleştiği
//sayfalar arasında geçiş yapmayı sağlar.

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
				//Stack Screen -> stack'e sayfaları yerleştirir
					name='Login'
					component={Login}
					options={{ headerShown: false }}
				/>

				<Stack.Screen
					name='Chat'
					component={Chat}
					options={{
						title: "Chats",
						headerShown: false,
					}}
				/>
				<Stack.Screen name='Messaging' component={Messaging} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}