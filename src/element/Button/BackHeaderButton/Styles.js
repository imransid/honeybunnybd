import { ScaledSheet } from "react-native-size-matters";
import { Dimensions } from "react-native";
import { MAIN_FONT_BOLD, MAIN_FONT, MAIN_FONT_SEMI_BOLD, WHITE, TEXT_GRAY } from "../../../constant";

const { width, height } = Dimensions.get("window");

const Styles = ScaledSheet.create({
  container: {
    height: '50@vs',
    width: '100%',
  },
  text: {
    fontFamily: MAIN_FONT_BOLD,
    color: WHITE
  },
  button: {
    flexDirection: 'row',
    width: '200@s',
    height: '50@vs'
  },
  icon: {
    width: '40@s',
    height: '50@vs',
    alignItems: 'center',
    justifyContent: 'center'
  },
  IconText: {
    width: '90@s',
    height: '50@vs',
    justifyContent: 'center'
  }
});


export default Styles