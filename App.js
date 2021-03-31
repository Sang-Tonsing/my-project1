import React, { useState, useMemo, useEffect, useReducer } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainTabScreen from "./app/MainTab";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./app/Home";
import RootStackScreen from "./app/RootStack";

import { AuthContext } from "./components/context";

const Stack = createStackNavigator();

const App = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [userToken, setUserToken] = useState(null);

  const initialLoginState = {
    isLoadin: true,
    email: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          email: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          email: null,
          userToken: null,
          isLoading: false,
        };
      case "REGISTER":
        return {
          ...prevState,
          email: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(
    () => ({
      signIn: (email, password) => {
        // setUserToken("sdf");
        // setIsLoading(false);
        let userToken = null;
        if (email == "sang" && password == "tons") {
          userToken = "sdf";
          console.log("logind");
        } else {
          alert("Error");
        }
        console.log("user token ", userToken);
        dispatch({ type: "LOGIN", id: email, token: userToken });
      },
      signOut: () => {
        // setUserToken(null);
        // setIsLoading(false);
        let userToken;
        userToken = "sdfa";
        console.log("user token:  ", userToken);
        dispatch({ type: "RETRIEVE_TOKEN", token: userToken });
        dispatch({ type: "LOGOUT" });
      },
      signUp: () => {
        setUserToken("sdf");
        setIsLoading(false);
      },
    }),
    []
  );

  useEffect(() => {
    setTimeout(() => {
      // setIsLoading(false);
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#009387" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken != null ? (
          <Stack.Navigator
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
          </Stack.Navigator>
        ) : (
          <RootStackScreen />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
