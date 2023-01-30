import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, TextInput, Text, FlatList, Pressable, SafeAreaView } from "react-native";
import socket from "../utils/socket";
import MessageComponent from "../component/MessageComponent";
import { styles } from "../utils/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Messaging = ({ route, navigation }) => {
	const [user, setUser] = useState("");
	// ekranlar arasında navigate işlemi yaparken bazı verileri taşıması gerekir
	//bunun için route.params kullanılır
	//route.params-> ekrandaki parametreyi tutar
	const { name, id } = route.params;

	const [chatMessages, setChatMessages] = useState([]);
	const [message, setMessage] = useState("");
	const [topic,setTopic]=useState("");

	const getUsername = async () => {
		try {
			//belirlenen keye göre local storage'dan veri çeker
			const value = await AsyncStorage.getItem("username");
			if (value !== null) {
				setUser(value);
			}
		} catch (e) {
			console.error("Error while loading username!");
		}
	};

	const handleNewMessage = () => {
		const hour =
			new Date().getHours() < 10
				? `0${new Date().getHours()}`
				: `${new Date().getHours()}`;

		const mins =
			new Date().getMinutes() < 10
				? `0${new Date().getMinutes()}`
				: `${new Date().getMinutes()}`;
		
		if (user) {
			socket.emit("newMessage", {
				message,
				topic:topic,
				room_id: id,
				user,
				timestamp: { hour, mins },
			});
		}
	};

	useLayoutEffect(() => {
		navigation.setOptions({ title: name });
		//navigation.setOptions -> ekrandaki seçenekleri güncellemeyi sağlar
		getUsername();
		socket.emit("findRoom", id);
		//socket.emit -> belirlenen sokete veri gönderme
		socket.on("foundRoom", (roomChats) => setChatMessages(roomChats));
		//socket.on -> gelen veriyi yakalama işlemi
		//parametreleri (olayınadı, (gelen veri) => gelen veriye cevabımız)
	}, []);
	//sayfa sadece ilk yüklendiğinde yenileme yapar. 
	//çünkü boş bir array vermiş.

	useEffect(() => {
		socket.on("foundRoom", (roomChats) => setChatMessages(roomChats));
	}, [socket]);
	//socket değişkeni değiştiğinde useEffect çalışır içindeki kodlar çalışır.

	return (
		<View style={styles.messagingscreen}>
			<View
				style={[
					styles.messagingscreen,
					{ paddingVertical: 15, paddingHorizontal: 10 },
				]}
			>
				{chatMessages[0] ? (
					//flatlist listeleme yapan react native componentidir.
					<FlatList
						data={chatMessages}
						renderItem={({ item }) => (
							<MessageComponent item={item} user={user} />
						)}
						keyExtractor={(item) => item.id}
						//flatlist içindeki tüm verilere key olarak item.id verilir.
					/>
				) : (
					""
				)}
			</View>
			
			<View style={styles.messaginginputContainer}>
				<TextInput
					maxLength={8}
					placeholder="topic"
					style={styles.messagingtopic}
					onChangeText={(value) => setTopic(value)}/>
				<TextInput
					placeholder="message"
					style={styles.messaginginput}
					onChangeText={(value) => setMessage(value)} />
		
				<Pressable
					style={styles.messagingbuttonContainer}
					onPress={handleNewMessage}
				>
						<View>
						<Text style={{ color: "#f2f0f1", fontSize: 20}}>SEND</Text>
						</View>
				</Pressable>

			</View>

		</View>
	);
};

export default Messaging;