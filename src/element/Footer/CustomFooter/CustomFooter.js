import React, { useState } from "react";
import { View } from "react-native";

const cusFooter = () => {
  return (
    <View style={{ flex: 0.2, alignItems: "center" }}>
      <View
        style={{
          backgroundColor: "#444444",
          width: 166,
          height: 4,
          borderRadius: 5,
        }}
      />
    </View>
  );
};

export default cusFooter;
