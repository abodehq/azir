import React from "react";
import AzirTheme, { withAzir, colorsProps, getColorByName } from "azir-theme";
import { Text, StyleSheet } from "react-native";
import { AzirIcons, SolidIcons, RegularIcons, BrandIcons, parseIconFromClassName } from "./FontAwesomeIcons";

const AzirIcon: React.FC<Props> = props => {
  const { BeIcons, styles, shadow, pro, color, size, style, icon } = props;
  const [code, type] = (icon || "").split("|");
  const IconType = type === "azir" ? AzirIcons : type === "brand" ? BrandIcons : type === "regular" ? RegularIcons : type === "solid" ? SolidIcons : BeIcons;
  const font = { fontFamily: IconType._fontFamily || "" };
  if (pro) {
    font.fontFamily = font.fontFamily.replace("Free", "Pro");
  }
  return (
    <Text {...props} style={[shadow && styles.shadow, { color: getColorByName(color) }, { fontSize: size }, font, style]} ref={component => (this._root = component)}>
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
    ...colorsProps
  });
export default withAzir(AzirIcon, styles);
export { AzirIcons, SolidIcons, RegularIcons, BrandIcons, parseIconFromClassName };
