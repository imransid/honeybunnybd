import { ScaledSheet } from "react-native-size-matters";
import { Dimensions } from "react-native";
import { MAIN_FONT_BOLD, MAIN_FONT, MAIN_FONT_SEMI_BOLD, WHITE, TEXT_GRAY } from "../../../constant";

const { width, height } = Dimensions.get("window");

const Styles = (size) => ScaledSheet.create(
    {
        text: {
            fontFamily: MAIN_FONT,
            fontSize: size,
            color: WHITE,
            textAlign: 'justify'
        },
        container: {
            height: size,
            width: '100%',
        }
    });

export default Styles