import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text, Button } from "react-native";

const DetailsScreen = ({ navigation }) => {
  return (
    <View>
      <Text> I am in sign up page</Text>
      {/* <Button title="Goto Home" onPress={() => navigation.navigate("Home")} /> */}
    </View>
  );
};

export default DetailsScreen;
