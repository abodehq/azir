import { Dimensions, Platform, StatusBar } from "react-native";

export function isIphoneX() {
  const dimen = Dimensions.get("window");
  return Platform.OS === "ios" && !Platform.isPad && !Platform.isTVOS && (dimen.height === 812 || dimen.width === 812 || (dimen.height === 896 || dimen.width === 896));
}

export function ifIphoneX(iphoneXStyle, regularStyle) {
  if (isIphoneX()) {
    return iphoneXStyle;
  }
  return regularStyle;
}

export function getStatusBarHeight(safe) {
  return Platform.select({
    ios: ifIphoneX(safe ? 44 : 30, 20),
    android: StatusBar.currentHeight,
    default: 0
  });
}

export function getBottomSpace() {
  return isIphoneX() ? 34 : 0;
}

const PAD_WIDTH = 768; // iPad
const PAD_HEIGHT = 1024; // iPad

const { height: D_HEIGHT, width: D_WIDTH } = Dimensions.get("window");

export function isIPad() {
  if (Platform.OS !== "ios" || isIphoneX()) return false;

  // if portrait and width is smaller than iPad width
  if (D_HEIGHT > D_WIDTH && D_WIDTH < PAD_WIDTH) {
    return false;
  }

  // if landscape and height is smaller that iPad height
  if (D_WIDTH > D_HEIGHT && D_HEIGHT < PAD_WIDTH) {
    return false;
  }

  return true;
}
