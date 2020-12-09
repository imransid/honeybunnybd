// For blank horizontal View 


import React from "react";
import { View } from "react-native"
import { ScaledSheet } from 'react-native-size-matters';

export const FakeView = ({ height }) => {


    return (
        <View style={styles(height).fakeView} />
    );
}

const styles = heiGht => ScaledSheet.create({

    fakeView: {
        height: `${heiGht}@s`,
        width: '100%'
    }
});
