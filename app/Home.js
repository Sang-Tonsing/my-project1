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
      <Text>Home Screen</Text>
    </Styles>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
