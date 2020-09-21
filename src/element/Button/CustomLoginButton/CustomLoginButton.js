import React from "react";

import { View, Text, TouchableOpacity } from "react-native";

import { FacebookIcon, SpaceView } from "../../../@library";

const CustomLoginButton = (props) => {
  const buttonColor = props.fb === true ? "#5890FF" : "#444444";

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        style={{
          width: "80%",
          backgroundColor: buttonColor,
          justifyContent: "center",
          alignItems: "center",
          padding: 8,
          borderRadius: 15,
          flexDirection: "row",
        }}
      >
        {props.fb === true ? <FacebookIcon width={13} height={27} /> : null}
        {props.fb === true ? <SpaceView percentage="5%" /> : null}
        <Text style={{ color: "#FFF", fontFamily: "Roboto-Medium" }}>
          {props.text.toUpperCase()}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomLoginButton;
