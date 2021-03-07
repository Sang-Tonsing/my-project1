import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Styles from "./Styles";

const HomeScreen = ({ navigation }) => {
  return (
    <Styles>
      {/* <Button
        title="Goto Details"
        onPress={() => navigation.navigate("Details")}
      /> */}
      <Text>Hello world</Text>
    </Styles>
  );
};

export default HomeScreen;
