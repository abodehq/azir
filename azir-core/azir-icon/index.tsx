import React from "react";
import AzirTheme, { withAzir } from "azir-theme";
import { Text, StyleSheet } from "react-native";
import { SolidIcons, RegularIcons, BrandIcons, parseIconFromClassName } from "./FontAwesomeIcons";

const AzirIcon: React.FC<Props> = props => {
  const { BeIcons, styles, shadow, pro, color, size, style, icon } = props;
  let _color = color;
  const themeColor = styles[color];
  if (themeColor) _color = themeColor.backgroundColor;
  const [code, type] = (icon || "").split("|");
  const IconType = type === "brand" ? BrandIcons : type === "regular" ? RegularIcons : type === "solid" ? SolidIcons : BeIcons;
  const font = { fontFamily: IconType._fontFamily || "" };
  if (pro) {
    font.fontFamily = font.fontFamily.replace("Free", "Pro");
  }
  return (
    <Text {...props} style={[shadow && styles.shadow, { color: _color }, { fontSize: size }, font, style]} ref={component => (this._root = component)}>
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
  styles: any;
  shadow: boolean;
  pro: any;
  BeIcons: any;
};
AzirIcon.defaultProps = { BeIcons: { _fontFamily: "azir-font-icon" }, color: "theme", size: AzirTheme.SIZES.ICON_SIZE, shadow: false, icon: SolidIcons.smile };
const styles = theme =>
  StyleSheet.create({
    shadow: {
      textShadowColor: theme.COLORS.BLOCK,
      textShadowOffset: theme.SIZES.ICON_SHADOW_OFFSET,
      textShadowRadius: theme.SIZES.ICON_SHADOW_RADIUS
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
export default withAzir(AzirIcon, styles);
export { SolidIcons, RegularIcons, BrandIcons, parseIconFromClassName };
