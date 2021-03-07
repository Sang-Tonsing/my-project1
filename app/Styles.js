import React from "react";
import { View } from "react-native";

const Styles = ({ children }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </View>
  );
};

export default Styles;
