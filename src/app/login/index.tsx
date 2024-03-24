import React from "react";
import { Button, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Page() {
    return (
        <View className="flex-1 bg-gradient-to-b from-purple-500 to-white p-4 justify-center items-center">
            <Text className="text-2xl font-bold text-black mb-4">Welcome Back!</Text>
            <Text className="text-center text-black mb-6">
                Log In to your BrokerConnect account to explore your dream place to live across the whole world!
            </Text>

            <TextInput
                className="bg-slate-100 rounded-3xl p-3 text-lg mb-4 w-full"
                placeholder="Username"
                placeholderTextColor="#9CA3AF"
                defaultValue="ericangelo1503@gmail.com"
            />

            <TextInput
                className="bg-slate-100 rounded-3xl p-3 text-lg mb-4 w-full"
                placeholder="Password"
                placeholderTextColor="#9CA3AF"
                secureTextEntry
                defaultValue="Insert your password here"
            />

            <TouchableOpacity className="bg-purple-700 w-full p-4 rounded-3xl">
                <Text className="text-white text-center text-lg font-bold">Log in</Text>
            </TouchableOpacity>

            <Text className="text-purple-700 mt-4">Forgot password?</Text>

            <View className="flex-row items-center my-4">
                <View className="flex-grow h-px bg-gray-300 mx-2"></View>
                <Text className="text-gray-500">OR</Text>
                <View className="flex-grow h-px bg-gray-300 mx-2"></View>
            </View>

            <TouchableOpacity className="mb-4 w-full p-4 rounded-3xl flex-row justify-center items-center bg-black">
                {/* Replace with Apple logo */}
                <Text className="text-white text-lg font-bold">Sign in with Apple</Text>
            </TouchableOpacity>

            <TouchableOpacity className="w-full p-4 rounded-3xl flex-row justify-center items-center bg-white border border-gray-300">
                {/* Replace with Google logo */}
                <Text className="text-gray-700 text-lg font-bold">Sign in with Google</Text>
            </TouchableOpacity>
        </View>

    );
}
