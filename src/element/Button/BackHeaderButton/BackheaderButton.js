// Custom Header Back Button with Navigation


import React, { useCallback } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Styles";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { MAIN_FONT_BOLD, MAIN_FONT, MAIN_FONT_SEMI_BOLD, WHITE, TEXT_GRAY } from "../../../constant";


const BackHeaderButton = (props) => {

    const onPress = useCallback(() => {
        console.log('back')
    }, [props]);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <View style={styles.icon}>
                    <FontAwesomeIcon icon={faArrowLeft} size={16} color={WHITE} />
                </View>
                <View style={styles.IconText}>
                    <Text style={styles.text}>{props.text.toUpperCase()}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default BackHeaderButton;
