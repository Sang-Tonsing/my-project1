import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { AuthContext } from "../components/context";

import Styles from "./Styles";

const DetailsScreen = ({ navigation }) => {
  
  const { signOut } = useContext(AuthContext);
  
  return (
    <Styles>
      <Text> Details screen</Text>
      {/* <Button title="Goto Home" onPress={() => navigation.navigate("Home")} /> */}
      <TouchableOpacity
        onPress={() => {
          signOut();
        }}
        style={{ borderWidth: 1, borderColor: "#009387", marginTop: 10 }}
      >
        <Text style={{ color: "#009387" }}>Sign Out</Text>
      </TouchableOpacity>
    </Styles>
  );
};

export default DetailsScreen;
