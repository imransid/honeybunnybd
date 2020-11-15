import { ScaledSheet } from "react-native-size-matters";
import { Dimensions } from "react-native";
import { MAIN_FONT_BOLD, MAIN_FONT, MAIN_FONT_SEMI_BOLD, WHITE, TEXT_GRAY } from "../../constant";

const { width, height } = Dimensions.get("window");

export default ScaledSheet.create({
  containerHeader: {
    backgroundColor: "#242A35",
    height: '210@s',
  },
  headerNavigation: {
    height: '45@s',
    alignItems: "center",
    paddingLeft: '10@s',
  },
  headerNavigationText:
    { color: WHITE, fontFamily: MAIN_FONT_SEMI_BOLD },
  headerTitleText: {
    color: WHITE,
    fontFamily: MAIN_FONT_BOLD,
    fontSize: '28@s',
  },
  headerTitle: {
    paddingLeft: '30@s',
  }

});
