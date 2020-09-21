import React from "react";

import { View, Text, TouchableOpacity, StatusBar } from "react-native";

import { useDispatch, useSelector } from "react-redux";

import { ChangeThemeColor } from "../../action/Setting";

import styles from "./Styles";

import CustomButton from "../../element/Button/CustomLoginButton/CustomLoginButton";
import CusFooter from "../../element/Footer/CustomFooter/CustomFooter";
import HeaderTitle from "../../element/HeaderTitle/HeaderTitle";

const Login = () => {
  const themeColor = useSelector((state) => state.Settings.ThemeColor);

  const dispatch = useDispatch();

  return (
    <View
      style={{ flex: 1, backgroundColor: "#121212", flexDirection: "column" }}
    >
      <StatusBar backgroundColor="#121212" />
      <View style={{ backgroundColor: "red", flex: 5 }}></View>
      <View
        style={{
          flex: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HeaderTitle text="Ideal Store For your shoping" size={22} />
      </View>
      <View
        style={{
          flex: 3,
        }}
      >
        <CustomButton text="sign up with email" fb={false} />

        <CustomButton text="sign up with facebook" fb={true} />

        <CusFooter />
      </View>
    </View>
  );
};

export default Login;
