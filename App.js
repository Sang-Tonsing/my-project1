import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import MainTabScreen from "./app/MainTab";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./app/Home";
import RootStackScreen from "./app/RootStack";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#009387" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="Match & Chat" component={MainTabScreen} />
        <Stack.Screen name="Welcome" component={RootStackScreen} />
      </Stack.Navigator> */}
      <RootStackScreen />
    </NavigationContainer>
  );
}

export default App;
