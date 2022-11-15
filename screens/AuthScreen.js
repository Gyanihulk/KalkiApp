import {
  View,
  Text,
  TouchableOpacity,
  Button,
  SafeAreaView,
} from "react-native";
import React from "react";
import useAuth from "../hooks/useAuth";
import { useNavigation } from "@react-navigation/native";
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  androidClientId: '298698018509-tmok6d5n8b69nb7scr3fdlipv5ig09bl.apps.googleusercontent.com',
});

const AuthScreen = () => {
  const navigation = useNavigation();
  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    GoogleSignin.hasPlayServices().then((hasPlayService) => {
      if (hasPlayService) {
           GoogleSignin.signIn().then((userInfo) => {
                     console.log(JSON.stringify(userInfo))
           }).catch((e) => {
           console.log("ERROR IS: " + JSON.stringify(e));
           })
      }
}).catch((e) => {
  console.log("ERROR IS: " + JSON.stringify(e));
})
    // Get the users ID token
    // const { idToken } = await GoogleSignin.signIn();
  
  //   // Create a Google credential with the token
  //   const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  // console.log(googleCredential)
  //   // Sign-in the user with the credential
  //   return auth().signInWithCredential(googleCredential);
  }
  return (

    <SafeAreaView>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        className="bg-white mr-3 shadow"
        >
        <Text>AuthScreen</Text>
        <Button
      title="Google Sign-In"
      onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
    />


<Button title={'Sign in with Google'} onPress={() =>  {
    GoogleSignin.configure({
        androidClientId: '298698018509-tm5n8b69nb7scr3fdlipv5ig09bl.apps.googleusercontent.com',
        });
GoogleSignin.hasPlayServices().then((hasPlayService) => {
        if (hasPlayService) {
             GoogleSignin.signIn().then((userInfo) => {
                       console.log(JSON.stringify(userInfo))
             }).catch((e) => {
             console.log("ERROR IS: " + JSON.stringify(e));
             })
        }
}).catch((e) => {
    console.log("ERROR IS: " + JSON.stringify(e));
})
}} />
      </TouchableOpacity>

          </SafeAreaView>
  );
};

export default AuthScreen;
