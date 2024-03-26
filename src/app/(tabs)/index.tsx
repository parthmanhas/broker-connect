import PropertySearchComponent from '@/components/HomePage/PropertySearchComponent';
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';


export default function Tab () {
  return (
    <SafeAreaProvider>
      <ScrollView className="bg-slate-100 p-4">
      {/* Header */}
      <View className="p-4 flex">
        <Text className="text-xl mb-2">Find your place in</Text>
        <View className="flex-row items-center mb-4">
          <Icon name="location-outline" size={24} className="mr-2" />
          <Text className="text-lg">Surabaya, Indonesia</Text>
          <Icon name="chevron-down-outline" size={24} className="ml-2" />
        </View>
        <PropertySearchComponent />
        {/* Near Your Location Section */}
        <Text className="text-lg font-bold">Near your location</Text>
        <ScrollView horizontal className="mt-2">
          <View className="w-40 h-40 bg-gray-300 mr-2 rounded-lg" />
          <View className="w-40 h-40 bg-gray-300 mr-2 rounded-lg" />
          {/* Add more views as needed */}
        </ScrollView>
        {/* Top Rated in Surabaya Section */}
        <Text className="text-lg font-bold mt-4">Top rated in Surabaya</Text>
        <ScrollView horizontal className="mt-2">
          <View className="w-40 h-40 bg-gray-300 mr-2 rounded-lg" />
          <View className="w-40 h-40 bg-gray-300 mr-2 rounded-lg" />
          {/* Add more views as needed */}
        </ScrollView>        
      </View>
      </ScrollView>
    </SafeAreaProvider>
    
  );
};
