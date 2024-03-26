import { Link } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Page() {
  return (
          <ScrollView className="bg-white">
        <View className="p-5">
          {/* House Images */}
          <View className="grid grid-cols-3 gap-4">
            <View className="bg-slate-500 h-[150px] w-full"></View>
            <View className="bg-slate-500 h-[150px] w-full"></View>
            <View className="bg-slate-500 h-[150px] w-full"></View>
            {/* Replace with your own image sources */}
            {/* <Image className="w-full h-40 rounded-lg" source={{ uri: 'your-image-url' }} /> */}
            {/* Repeat for all images */}
          </View>

          {/* Text Section */}
          <View className="p-4 mt-5 rounded-lg">
            <Text className="text-black text-2xl font-semibold text-center">New Place, New Home!</Text>
            <Text className="text-black mt-2 text-xl text-center">
              Are you ready to uproot and start over in a new area? <Text className="font-semibold">BrokerConnect</Text> will help you on your journey!
            </Text>
          </View>

          {/* Buttons */}
          <View className="flex justify-center mt-5">
            <TouchableOpacity className="bg-purple-500 font-bold py-4 px-4 rounded-3xl mb-4">
              <Link className="text-center text-white" href="/login">
                <Text>Log in</Text>
              </Link>
            </TouchableOpacity>
            <TouchableOpacity className="border border-purple-500 text-purple-500 font-bold py-4 px-4 rounded-3xl">
              <Link className="text-center" href="/signup">
                <Text>Sign up</Text>
              </Link>
            </TouchableOpacity>
          </View>
        </View>    
      </ScrollView>
      );
}
