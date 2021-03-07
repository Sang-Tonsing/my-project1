import * as React from "react";
import { Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import MainTabScreen from "./app/MainTab";

const Tab = createMaterialBottomTabNavigator();

function App() {
  return <MainTabScreen />;
}

export default App;
