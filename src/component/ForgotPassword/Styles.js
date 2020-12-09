import { ScaledSheet } from "react-native-size-matters";
import { Dimensions } from "react-native";
import { MAIN_FONT_BOLD, MAIN_FONT, MAIN_FONT_SEMI_BOLD, WHITE, TEXT_GRAY } from "../../constant";

const { width, height } = Dimensions.get("window");

export default ScaledSheet.create({
    container: {
        paddingLeft: '30@s',
        paddingRight: '30@s',
        flex: 1
    }

});
