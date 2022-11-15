import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  ServerIcon,
  AdjustmentsIcon,
  SearchIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import TrainersRow from "../components/TrainersRow";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {}, []);

  return (
    <SafeAreaView className="bg-black pt-5">
      {/* Headers */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
        <Image
          source={require("./../asset/logo.png")}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        ></Image>
        <View className="flex-1">
          <Text className="font-bold text-xl text-gray-400 ">
            Freestyle Fitness Hub
          </Text>
          <Text className="font-bold text-3xl text-gray-400">
            Kalki Akhada
            <TouchableOpacity></TouchableOpacity>
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("UserDashboard")}>
          <UserIcon size={35} color="#00CCBB"></UserIcon>
        </TouchableOpacity>
      </View>

      {/* Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Categories */}
        <View className="grid bg-black">
          <Text className="font-bold text-xl text-gray-400  text-center">
            Fitness Categories
          </Text>
        </View>

        {/* Trainer */}
        <Categories />
        <View className="grid bg-black">
          <Text className="font-bold text-xl text-gray-400  text-center">
            Trainers
          </Text>
        </View>
        <TrainersRow />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
