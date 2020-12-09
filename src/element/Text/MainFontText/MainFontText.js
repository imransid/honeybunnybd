// Custom Header Text


import React, { useMemo } from "react";
import { View, Text } from "react-native";
import styles from "./Styles"


const MainFontText = (props) => {

    const fontSize = useMemo(() => props.size !== 0 ? `${props.size}@s` : '10@s');
    const ViewSize = useMemo(() => props.size !== 0 ? `${props.size + 20}@s` : '46@s');

    return (
        <View style={styles(ViewSize).container}>
            <Text style={styles(fontSize).text}>{props.title}</Text>
        </View>
    );
};

export default MainFontText;
