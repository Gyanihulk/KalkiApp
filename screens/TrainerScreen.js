import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  LocationMarkerIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/solid";
import { StarIcon } from "react-native-heroicons/solid";

import BasketIcon from "../components/BasketIcon";
import {useDispatch} from "react-redux"
import { setResturant } from "../features/restaurantSlice";
import SlotRow from "../components/SlotRow";
const TrainerScreen = () => {
  const navigation = useNavigation();
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      shortDescription,
      experience,
      slots,
    },
  } = useRoute();
  const dispatch=useDispatch();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  // useEffect(()=>{dispatch(setResturant({
  //   id,
  //   imgUrl,
  //   title,
  //   rating,
  //   shortDescription,
  //   experience,
  //   slots,
  // }))},[])

  return (
    <>
    <BasketIcon/>
    <ScrollView>
        <View className="relative">
        <Image
          source={{ uri: urlFor(imgUrl).url() }}
          className="w-full h-56 bg-gray-300"
          />
        <TouchableOpacity
          onPress={navigation.goBack}
          className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
          >
          <ArrowLeftIcon size={20} color="#00CCBB" />
        </TouchableOpacity>
      </View>
      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="text-3xl font-bold">{title}</Text>
          <View className="flex-row space-x-2 my-1">
            <View className="flex-row items-center space-x-1">
              <StarIcon color="green" opacity={0.5} size={22} />
              <Text className="text-xs text-gray-500">
                <Text className="text-green-500">{rating}</Text> . "category"
              </Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <LocationMarkerIcon color="gray" opacity={0.4} size={22} />
              <Text className="text-xs text-gray-500">experience </Text>
            </View>
          </View>

          <Text className="text-gray-500 mt-2 pb-4">{shortDescription}</Text>
        </View> 
        <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20}/>
            <Text className="pl-2 flex-1 text-md font-bold">
                Have a Injury?
            </Text>
            <ChevronRightIcon color="#00CCBB"/>
            </TouchableOpacity>       
      </View >
      <View className="pb-36">
        <Text className="px-4 pt-6 mb-3 font-bold text-xl ">Available Slots</Text>
        {slots.map((slot)=>(
            <SlotRow key={slot._id} id={slot._id} name={slot.name} description={slot.shortDescription} price={slot.price} category={slot.type} image={slot.type[0].image}/>
        ))}
      </View>
    </ScrollView>
          </>
  );
};

export default TrainerScreen;
