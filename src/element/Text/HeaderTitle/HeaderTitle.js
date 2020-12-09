// Custom Header Text


import React, { useMemo } from "react";
import { View, Text } from "react-native";
import styles from "./Styles"


const HeaderTitle = (props) => {

    const fontSize = useMemo(() => props.size !== 0 ? `${props.size}@s` : '16@s');
    const ViewSize = useMemo(() => props.size !== 0 ? `${props.size + 30}@s` : '46@s');

    return (
        <View style={styles(ViewSize).container}>
            <Text style={styles(fontSize).text}>{props.title}</Text>
        </View>
    );
};

export default HeaderTitle;
