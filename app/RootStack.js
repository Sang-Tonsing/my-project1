import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignInScreen from "./SignIn";
import SignUpScreen from "./SignUp";

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="SignIn" component={SignInScreen} />
      <RootStack.Screen name="SignUp" component={SignUpScreen} />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
