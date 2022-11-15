import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import TrainerScreen from '../screens/TrainerScreen';
import AuthScreen from '../screens/AuthScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useAuth from '../hooks/useAuth';
const Stack = createNativeStackNavigator();
const StackNavigator = () => {
    const {user}=useAuth()
  return (
    <Stack.Navigator>
    {user ? (
      <>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Trainer" component={TrainerScreen} />
        {/* <Stack.Screen
          name="Basket"
          component={BasketScreen}
          options={{ presentation: "modal", headerShown: false }}
        />
        <Stack.Screen
          name="PreparingOrderScreen"
          component={PreparingOrderScreen}
          options={{
            presentation: "fullScreenModal",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Delivery"
          component={Delivery}
          options={{
            presentation: "fullScreenModal",
            headerShown: false,
          }}
        />
        <Stack.Screen name="UserDashboard" component={MainScreen} /> */}
      </>
    ) : (
      <Stack.Screen name="Login" component={AuthScreen} />
    )}
  </Stack.Navigator>
  )
}

export default StackNavigator