import React from "react";
import LCTheme, { withLC } from "be-theme";
import { Text, StyleSheet } from "react-native";
import { SolidIcons, RegularIcons, BrandIcons, parseIconFromClassName } from "./FontAwesomeIcons";

const LcIcon: React.FC<Props> = props => {
  const { styles, pro, color, size, transform, style, icon } = props;
  let _color = color;
  const themeColor = styles[color];
  if (themeColor) _color = themeColor.backgroundColor;

  const [code, type] = (icon || "").split("|");

  const IconType = type === "brand" ? BrandIcons : type === "regular" ? RegularIcons : SolidIcons;

  const font = { fontFamily: IconType._fontFamily || "" };
  if (pro) {
    font.fontFamily = font.fontFamily.replace("Free", "Pro");
  }
  return (
    <Text {...props} style={[{ color: _color }, { fontSize: size }, font, style]} ref={component => (this._root = component)}>
      {code}
    </Text>
  );
  //return <FontAwesomeIcon icon={icon} color={_color} transform={transform} size={size} style={style} />;
};

type Props = {
  style: any;
  color?: string | "primary" | "theme" | "error" | "warning" | "success" | "transparent"; //use theme color
  size: number;
  icon: any;
  transform?: object;
  styles: any;
  pro: any;
};
LcIcon.defaultProps = { color: "primary", size: 30, icon: SolidIcons.smile };
const styles = theme =>
  StyleSheet.create({
    defaultButton: {
      borderRadius: 3,
      // width: theme.SIZES.BUTTON_WIDTH,
      height: theme.SIZES.BUTTON_HEIGHT,
      alignItems: "center",
      justifyContent: "center"
    },
    primary: {
      backgroundColor: theme.COLORS.PRIMARY
    },
    theme: {
      backgroundColor: theme.COLORS.THEME
    },
    info: {
      backgroundColor: theme.COLORS.INFO
    },
    error: {
      backgroundColor: theme.COLORS.ERROR
    },
    warning: {
      backgroundColor: theme.COLORS.WARNING
    },
    success: {
      backgroundColor: theme.COLORS.SUCCESS
    }
  });
export default withLC(LcIcon, styles);
export { SolidIcons, RegularIcons, BrandIcons, parseIconFromClassName };
