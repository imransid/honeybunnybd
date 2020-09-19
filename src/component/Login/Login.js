import React from "react";

import { View, Text, TouchableOpacity } from "react-native";

import { useDispatch, useSelector } from "react-redux";

import { ChangeThemeColor } from "../../action/Setting";

const Login = () => {
  const themeColor = useSelector((state) => state.Settings.ThemeColor);

  const dispatch = useDispatch();
  console.log("themeColor", themeColor);
  return (
    <View style={{ backgroundColor: themeColor }}>
      <TouchableOpacity onPress={() => dispatch(ChangeThemeColor())}>
        <Text>Change Color</Text>
      </TouchableOpacity>
      <Text style={{ backgroundColor: "red" }}>hi i am Login</Text>
    </View>
  );
};

export default Login;
