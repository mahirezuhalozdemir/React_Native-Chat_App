import { View, Text, Pressable } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../utils/styles";

//ChatComponent adında arrow function oluşturuldu 
const ChatComponent = ({ item }) => {
	const navigation = useNavigation();
	//useNavigation sayfalar arası yönlendirmeyi sağlar
	const [messages, setMessages] = useState({});
	const [topic,setTopic]=useState({});

	useLayoutEffect(() => {
		//React yeni DOM’u oluşturduktan sonra fakat tarayıcı daha DOM’u paint etmeden useLayoutEffect çalışır
		//useEffect'e benzer ama önce useLayoutEffect çalışır
		setMessages(item.messages[item.messages.length - 1]);
	}, []);

	const handleNavigation = () => {
		navigation.navigate("Messaging", {
			id: item.id,
			name: item.name,
		});
	};

	return (
		//press işlemlerinde kulanılır
		//onPressIn press aktif olduğunda
		//onPressOut press deaktif olduğunda kullanılır
		<Pressable style={styles.cchat} onPress={handleNavigation}>
			
			<Ionicons
			//Ionicons çeşitli ikonları kullanmak için import edilir
				name='person-outline'
				size={40}
				color='black'
				style={styles.cavatar}
			/>

			<View style={styles.crightContainer}>
				<View>
					<Text style={styles.cusername}>{item.name}</Text>

					<Text style={styles.cmessage}>
						{messages?.text ? messages.text : "Tap to start chatting"}
					</Text>
				</View>
				<View>
					<Text style={styles.ctime}>
						{messages?.time ? messages.time : "now"}
					</Text>
				</View>
			</View>
		</Pressable>
	);
};

export default ChatComponent;