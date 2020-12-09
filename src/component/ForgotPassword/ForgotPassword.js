import React from "react";
import { View, Text, StatusBar } from "react-native";

import BackButton from "../../element/Button/BackHeaderButton/BackheaderButton"

import TitleText from "../../element/Text/HeaderTitle/HeaderTitle"
import MainText from "../../element/Text/MainFontText/MainFontText"
import { FakeView, SpaceView } from "../../@library";
import UnderLineTextInput from "../../element/TextInputBox/UnderLineTextInput/UnderLineTextInput"

import styles from './Styles'

const Index = (props) => {

    return (
        <>
            <StatusBar backgroundColor="#242A35" />
            <BackButton text="back" />
            <FakeView height={20} />
            <View style={styles.container} >
                <TitleText size={25} title="Forgot password" />
                <MainText size={15} title="Please enter your email address and we will send your password by email immediately. " />
                <FakeView height={20} />
                <UnderLineTextInput />
            </View>
        </>
    )

}


export default Index