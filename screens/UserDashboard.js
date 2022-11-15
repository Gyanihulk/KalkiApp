import React, { useEffect, useLayoutEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const headerImage = require("../asset/bar.png");
const UserDashboard = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
};

const Header = () => (
  <View style={styles.header}>
    <ImageContainer image={headerImage}></ImageContainer>
    <HeaderTitle />
  </View>
);

const HeaderTitle = () => (
  <View style={styles.title}>
   
    <Text style={styles.bigTitle}>Hi, User</Text>
    <Text style={styles.smallTitle}>Oct 26</Text>
  </View>
);
const ImageContainer = ({ image }) => (
  <View style={styles.imageContainer}>
    <Image source={image} style={styles.image}></Image>
  </View>
);
const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { borderWidth: 1, padding: 15, flexDirection: "row" },
  image: { height: "100%", width: "100%" },
  title: { padding: 10 ,flex:1},
  bigTitle:{fontSize:20,fontFamily:'Poppins-Medium'},
  smallTitle:{fontSize:14,fontFamily:'Poppins-Medium'},
  imageContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    overflow: "hidden",
  },
});
export default UserDashboard;
