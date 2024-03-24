import { Link } from 'expo-router';
import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default function Footer() {
    const [loggedIn, setLoggedIn] = useState(true);
    return <>
        {!loggedIn ? <></> : < View className="flex-row justify-around items-center bg-white p-4" >
            <Link href="/home">
                <TouchableOpacity className="items-center">
                    <Icon name="home-outline" size={25} color="#8b5cf6" />
                    <Text className="text-xs">Home</Text>
                </TouchableOpacity>
            </Link>
            <TouchableOpacity className="items-center">
                <Icon name="compass-outline" size={25} color="#6b7280" />
                <Text className="text-xs">Explore</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center">
                <Icon name="chatbubble-outline" size={25} color="#6b7280" />
                <Text className="text-xs">Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center">
                <Icon name="heart-outline" size={25} color="#6b7280" />
                <Text className="text-xs">Saved</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center">
                <Icon name="person-outline" size={25} color="#6b7280" />
                <Text className="text-xs">Profile</Text>
            </TouchableOpacity>
        </View >
        }
    </>

}