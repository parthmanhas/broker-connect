import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PropertySearchComponent = () => {
  const [isRentSelected, setIsRentSelected] = useState(true); // State to track selection

  return (
    <View>
      {/* Search Bar */}
      <View className="border-2 border-gray-200 rounded-full p-2 flex-row items-center mb-4 bg-slate-100">
          <Icon name="search-outline" size={24} className="mr-2" />
          <TextInput             
            placeholder="Search address, city, location" 
            className="flex-1 text-blac" 
          />
        </View>

      {/* Category Buttons */}  
      <Text className="text-xl mb-3 font-semibold">What do you need?</Text>

      <View className="border-2 border-gray-200 bg-slate-100 rounded-full p-4 flex-row justify-between items-center mb-4">
        <TouchableOpacity
          onPress={() => setIsRentSelected(true)}
          className={`rounded-3xl p-3 items-center ${isRentSelected ? 'bg-purple-700' : ''}`}
        >
          <Text className={`text-xl ${isRentSelected ? 'text-white' : 'text-gray-400'}`}>I need to rent</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setIsRentSelected(false)}
          className={`rounded-3xl p-3 items-center ml-2 ${!isRentSelected ? 'bg-purple-700' : ''}`}
        >
          <Text className={`text-xl ${!isRentSelected ? 'text-white' : 'text-gray-400'}`}>I need to buy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PropertySearchComponent;
