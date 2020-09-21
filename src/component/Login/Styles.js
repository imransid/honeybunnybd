import { StyleSheet, Dimensions, Platform } from "react-native";

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    // remove width and height to override fixed static size
    width: null,
    height: null,
    resizeMode: "cover", // or 'stretch'
  },
});

export default styles;
