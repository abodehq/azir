import React from "react";
import AzirTheme, { withAzir } from "azir-theme";
import { Text, StyleSheet } from "react-native";
import { SolidIcons } from "azir-icon";
import Icon from "azir-icon";
const AzirIcon: React.FC<Props> = props => {
  const { styles, color, size, transform, style, icon } = props;
  let _color = color;
  const themeColor = styles[color];

  if (themeColor) _color = themeColor.backgroundColor;

  return <Icon icon={SolidIcons.smile} color={_color} transform={transform} size={size} style={style} />;
};

type Props = {
  style: any;
  color?: string | "primary" | "theme" | "error" | "warning" | "success" | "transparent"; //use theme color
  size: number;
  icon: any;
  transform?: object;
  styles: any;
};
AzirIcon.defaultProps = { color: "primary", size: 25, icon: faInfo };
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
export default withAzir(AzirIcon, styles);
