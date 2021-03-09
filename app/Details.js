import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text, Button } from "react-native";

import Styles from "./Styles";

const DetailsScreen = ({ navigation }) => {
  return (
    <Styles>
      <Text> Details screen</Text>
      {/* <Button title="Goto Home" onPress={() => navigation.navigate("Home")} /> */}
    </Styles>
  );
};

export default DetailsScreen;
