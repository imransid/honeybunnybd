import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import SignIN from "./SignIN";

const Index = (props) => {
  return (
    <View style={styles.screen}>
      <SignIN {...props} />
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
