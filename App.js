import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TailwindProvider } from "tailwindcss-react-native";
import HomeScreen from "./screens/HomeScreen";

import { Provider } from "react-redux";
import { store } from "./store";
import BasketScreen from "./screens/BasketScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import Delivery from "./screens/Delivery";
import UserDashboard from "./screens/UserDashboard";
import MainScreen from "./screens/MainScreen";
import TrainerScreen from "./screens/TrainerScreen";
import useAuth, { AuthProvider } from "./hooks/useAuth";
import AuthScreen from "./screens/AuthScreen";
const Stack = createNativeStackNavigator();

function App() {
  const {user}=useAuth()
  return (
    <NavigationContainer>
      <Provider store={store}>
        <AuthProvider>

        <TailwindProvider>
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
        </TailwindProvider>
        </AuthProvider>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
