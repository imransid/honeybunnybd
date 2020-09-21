import React, { useCallback } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./Styles";

import { FacebookIcon, SpaceView } from "../../../@library";

const CustomLoginButton = (props) => {
  const Styles = styles();
  const buttonColor = props.fb === true ? "#5890FF" : "#444444";

  const onPress = useCallback(() => {
    props.fb === true ? console.log("facebook") : console.log("google");
  }, [props]);

  return (
    <View style={Styles.container}>
      <TouchableOpacity style={styles(buttonColor).buttom} onPress={onPress}>
        {props.fb === true ? <FacebookIcon width={13} height={27} /> : null}
        {props.fb === true ? <SpaceView percentage="5%" /> : null}
        <Text style={Styles.text}>{props.text.toUpperCase()}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomLoginButton;
