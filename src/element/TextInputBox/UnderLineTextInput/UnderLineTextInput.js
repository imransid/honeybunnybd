// Custom Under Line Text Input


import React, { useMemo } from "react";
import { View, TextInput } from "react-native";
import styles from "./Styles"


const UnderLineTextInput = (props) => {

    const [value, onChangeText] = React.useState('Useless Placeholder');

    return (
        <View style={styles(ViewSize).container}>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeText(text)}
                value={value}
            />
        </View>
    );
};

export default UnderLineTextInput;