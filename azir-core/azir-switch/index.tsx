import React, { useState } from "react";
import AzirTheme, { withAzir } from "azir-theme";
import { Switch, StyleSheet } from "react-native";

const LcSwitch: React.FC<Props> = props => {
  const { styles, thumbColor, color, disabled, style, onchange, ...rest } = props;
  const [checked, setChecked] = useState(props.checked);

  let _color = color;
  const themeColor = styles[color];
  const onPressSwitch = () => {
    onchange && onchange(!checked);
    setChecked(!checked);
  };
  if (themeColor) _color = themeColor.backgroundColor;
  const trackColor = {
    false: AzirTheme.COLORS.GREY,
    true: _color
  };

  return (
    <Switch disabled={disabled} trackColor={trackColor} ios_backgroundColor={AzirTheme.COLORS.GREY} value={checked} thumbColor={thumbColor} onValueChange={onPressSwitch} {...rest} />
  );
};

type Props = {
  style: any;
  color?: string | "primary" | "theme" | "error" | "warning" | "success" | "transparent"; //use theme color
  thumbColor: string;
  disabled: boolean;
  checked: boolean;
  transform?: object;
  styles: any;
  onchange: any;
};
LcSwitch.defaultProps = { color: "primary", thumbColor: "white", disabled: false, checked: false };
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
export default withAzir(LcSwitch, styles);
