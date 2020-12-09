import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import ForgotPassword from "./ForgotPassword";

const Index = (props) => {
  return (
    <View style={styles.screen}>
      <ForgotPassword {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#242529",
  },
});

export default Index;