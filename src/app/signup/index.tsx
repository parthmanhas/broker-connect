import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function Page() {
    return (
        <View className="flex-1 bg-gradient-to-b from-purple-500 to-white p-4 justify-center items-center">
            <Text className="text-2xl font-bold text-black mb-4">Let's explore together!</Text>
            <Text className="text-center text-black mb-6">
                Create your <Text className="font-semibold">BrokerConnect</Text> account to explore your dream place to live across the whole world!
            </Text>
            <View className='w-full'>
                <Text className="text-black text-lg mb-3 ml-3">Username</Text>
                <TextInput
                    className="bg-slate-100 rounded-3xl p-3 text-lg mb-4 w-full"
                    placeholder="Username"
                    placeholderTextColor="#9CA3AF"
                    defaultValue="ericangelo1503@gmail.com"
                />
            </View>

            <View className='w-full'>
                <Text className="text-black text-lg mb-3 ml-3">Password</Text>
                <TextInput
                    className="bg-slate-100 rounded-3xl p-3 text-lg mb-4 w-full"
                    placeholder="Password"
                    placeholderTextColor="#9CA3AF"
                    secureTextEntry
                    defaultValue="Insert your password here"
                />
            </View>

            <View className='w-full'>
                <Text className="text-black text-lg mb-3 ml-3">Mobile Number</Text>
                <TextInput
                    className="bg-slate-100 rounded-3xl p-3 text-lg mb-4 w-full"
                    placeholder="Phone number"
                    placeholderTextColor="#9CA3AF"
                    keyboardType="phone-pad"
                    defaultValue="Enter your phone number"
                />
            </View>

            <TouchableOpacity className="bg-purple-700 w-full p-4 rounded-lg">
                <Text className="text-white text-center text-lg font-bold">Create account</Text>
            </TouchableOpacity>

            <View className="flex-row items-center my-4">
                <View className="flex-grow h-px bg-gray-300 mx-2"></View>
                <Text className="text-gray-500">OR</Text>
                <View className="flex-grow h-px bg-gray-300 mx-2"></View>
            </View>

            <TouchableOpacity className="mb-4 w-full p-4 rounded-lg flex-row justify-center items-center bg-black">
                {/* Replace with Apple logo */}
                <Text className="text-white text-lg font-bold">Sign in with Apple</Text>
            </TouchableOpacity>

            <TouchableOpacity className="w-full p-4 rounded-lg flex-row justify-center items-center bg-white border border-gray-300">
                {/* Replace with Google logo */}
                <Text className="text-gray-700 text-lg font-bold">Sign in with Google</Text>
            </TouchableOpacity>
        </View>
    );
}
