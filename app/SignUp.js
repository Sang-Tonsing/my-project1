import React, { useState } from "react";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { Text, View, StyleSheet, Button } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = ({ navigation }) => {
  const navigations = useNavigation();
  const [data, setData] = useState({
    email: "",
    passsword: "",
    confirmPassword: "",
    checkTextInputChange: false,
    secureTextEntry: true,
    confirmSecureTextEntry: true,
  });
  const textInputChange = (val) => {
    if (val.length != 0) {
      setData({
        ...data,
        email: val,
        checkTextInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        checkTextInputChange: false,
      });
    }
  };
  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };
  const handleConfirmPasswordChange = (val) => {
    setData({
      ...data,
      confirmPasssword: val,
    });
  };
  const updateSecureEntryText = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  const updateConfirmSecureEntryText = () => {
    setData({
      ...data,
      confirmSecureTextEntry: !data.confirmSecureTextEntry,
    });
  };

  const submit = async (props) => {
    fetch("http://192.168.29.7:3000/post", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: props.email,
        password: props.password,
      }),
    });
    // .then((res) => res.json())
    // .then(async (data) => {
    //   try {
    //     navigation.navigate("Home");
    //   } catch (err) {
    //     console.log("Error login" + err);
    //   }
    // });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Match & Chat</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.action}>
          <FontAwesome name="user-circle-o" color="#05375a" size={20} />
          <TextInput
            placeholder="Email"
            style={styles.textInput}
            onChangeText={(val) => textInputChange(val)}
          />
          {data.check_textInputChange ? (
            <Feather name="user-check" color="green" size={20} />
          ) : null}
        </View>
        <View style={[styles.action, { marginTop: 20 }]}>
          <FontAwesome name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Password"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.textInput}
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureEntryText}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="#05375a" size={20} />
            ) : (
              <Feather name="eye" color="green" size={20} />
            )}
          </TouchableOpacity>
        </View>
        <View style={[styles.action, { marginTop: 20 }]}>
          <FontAwesome name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry={data.confirmSecureTextEntry ? true : false}
            style={styles.textInput}
            onChangeText={(val) => handleConfirmPasswordChange(val)}
          />
          <TouchableOpacity onPress={updateConfirmSecureEntryText}>
            {data.confirmSecureTextEntry ? (
              <Feather name="eye-off" color="#05375a" size={20} />
            ) : (
              <Feather name="eye" color="green" size={20} />
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => submit(data)}>
          <LinearGradient colors={["#08d4c4", "#01ab9d"]} style={styles.signUp}>
            <Text style={[styles.textSignUp, { color: "white" }]}>Sign Up</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("SignIn")}
          style={[
            styles.signUp,
            { borderWidth: 1, borderColor: "#009387", marginTop: 10 },
          ]}
        >
          <Text style={[styles.textSignUp, { color: "#009387" }]}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingBottom: 50,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  action: {
    flexDirection: "row",
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#d2d2d2",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    // color: "#05375a",
    paddingLeft: 10,
  },
  signUp: {
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  textSignUp: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
