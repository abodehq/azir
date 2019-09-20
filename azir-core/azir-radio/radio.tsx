import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import AzirTheme, { withAzir, colorsProps,getColorByName } from "azir-theme";
import Icon from "azir-icon";
const spaceAround: Function = direction => {
  switch (direction) {
    case "row-reverse":
      return { marginRight: 10 };
    case "column":
      return { marginTop: 10 };
    case "column-reverse":
      return { marginBottom: 10 };
    default:
      return { marginLeft: 10 };
  }
};
const renderContent: Function = (props, checked) => {
  const {theme, size :_size, styles, iconStyle, iconActive, iconInActive, iconActiveColor, iconInActiveColor, iconDisabledColor, disabled, hideInActiveIcon, hideIconBorder, type } = props;
  const size = _size? _size :theme.SIZES.RADIO_SIZE;
  let iconColor = disabled ? getColorByName(iconDisabledColor,theme.COLORS) : checked ? getColorByName(iconActiveColor,theme.COLORS) : getColorByName(iconInActiveColor,theme.COLORS);
  let icon = iconActive
    ? checked
      ? iconActive
      : iconInActive
      ? iconInActive
      : type == "radio"
      ? theme.STRINGS.RADIO_DEFAULT_ICON
      : theme.STRINGS.CHECKBOX_DEFAULT_ICON
    : type == "radio"
    ? theme.STRINGS.RADIO_DEFAULT_ICON
    : theme.STRINGS.CHECKBOX_DEFAULT_ICON;

  const iconStyles = [styles.iconContainer];
  iconStyles.push({
    width: size,
    borderWidth: 1,
    borderColor: iconColor,
    height: size,
    borderRadius: type == "radio" ? size / 2 : 0
  });
  hideIconBorder &&
    iconStyles.push({
      borderWidth: 0,
      borderColor: theme.COLORS.TRANSPARENT
    });
  iconStyle && iconStyles.push(iconStyle);
  // if (checked && iconActive) {
  //   return <View style={iconStyles}>{iconActive}</View>;
  // }
  // if (!checked && !hideInActiveIcon && iconInActive) {
  //   return <View style={iconStyles}>{iconInActive}</View>;
  // }
  return <View style={iconStyles}>{!hideInActiveIcon || checked ? <Icon icon={icon} color={iconColor} size={size - size * 0.3} /> : null}</View>;
};
const renderLabel: Function = (props, checked) => {
  const {theme, textActiveColor, textInActiveColor, textDisabledColor, children, disabled, flexDirection, textStyle, styles } = props;
  const radioContent = children;
  const labelStyles = [styles.textStyles, flexDirection && spaceAround(flexDirection), textStyle];
  checked ? labelStyles.push({ color: getColorByName(textActiveColor,theme.COLORS)  }) : labelStyles.push({ color: getColorByName(textInActiveColor,theme.COLORS) });
  disabled && labelStyles.push(styles.disabledLabel, { color: getColorByName(textDisabledColor,theme.COLORS) });
  const isString = children && typeof children === "string";

  if (radioContent) {
    if (isString) return <Text style={labelStyles}>{radioContent}</Text>;
    else return radioContent;
  } else {
    return null;
  }
};
const AzirRadio: React.FC<Props> = props => {
  const { id, value, onChange, styles, style, disabled, flexDirection, hideLable, inGroup } = props;
  const [checked, setChecked] = useState(props.checked); //Radio button state
  useEffect(() => {
    setChecked(props.checked);
  }, [props.checked]);

  const onPress = () => {
    !inGroup && setChecked(!checked);
    onChange && onChange({ id: id, value: value, checked: !checked });
  };
  const containerStyles = [styles.container, flexDirection && { flexDirection }, style];

  return (
    <TouchableOpacity onPress={() => onPress()} style={containerStyles} activeOpacity={0.8} disabled={disabled}>
      {renderContent(props, checked)}
      {!hideLable && renderLabel(props, checked)}
    </TouchableOpacity>
  );
};

type Props = {
  id: string; //id of the radio button should be unique
  value: any; //value the will be used
  onChange: any;
  iconActive: any;
  iconInActive: any;
  iconActiveColor: string | "primary" | "theme" | "error" | "warning" | "success" | "info" | "transparent";
  iconInActiveColor: string | "primary" | "theme" | "error" | "warning" | "success" | "info" | "transparent";
  iconDisabledColor: string | "primary" | "theme" | "error" | "warning" | "success" | "info" | "transparent";
  textActiveColor: string | "primary" | "theme" | "error" | "warning" | "success" | "info" | "transparent";
  textInActiveColor: string | "primary" | "theme" | "error" | "warning" | "success" | "info" | "transparent";
  textDisabledColor: string | "primary" | "theme" | "error" | "warning" | "success" | "info" | "transparent";
  checked: boolean; //set the default state checked or not
  style: any; //override View Container style
  styles: any; //to access const styles cause of the theme HOC we access the styles as props
  textStyle: any; //override text style
  iconStyle: any; //ovveride icon style
  size: number; //size of the icon
  disabled: boolean; //decide wether button is disabled or not
  hideLable: boolean; //hide text label from icon
  hideInActiveIcon: boolean; //in case user press decide to show the icon or not
  hideIconBorder: boolean; //hide icon border default false
  type: "radio" | "square"; //show default circle dot icon for radio button
  flexDirection: "row" | "row-reverse" | "column" | "column-reverse"; // icon and text direction
  inGroup: boolean; //incase this component child of the radio group component , this step to allow radio to call setstate in case alone called
};
AzirRadio.defaultProps = {
  size: null,
  disabled: false,
  flexDirection: null,
  checked: false,
  iconActiveColor: "theme",
  iconInActiveColor: "black",
  textActiveColor: "theme",
  textInActiveColor: "black",
  iconDisabledColor: "muted",
  textDisabledColor: "muted",
  hideLable: false,
  hideInActiveIcon: true,
  hideIconBorder: false,
  type: "radio",
  inGroup: false
};
const styles = theme =>
  StyleSheet.create({
    container: {
      flexDirection:theme.SETTINGS.RTL ? "row-reverse":  "row",
      alignItems: "center",
      justifyContent: "flex-start"
    },
    iconContainer: {
      justifyContent: "center",
      alignItems: "center",

      backgroundColor: "#fff"
    },
    disabledRadioOuter: {
      borderColor: theme.COLORS.MUTED
    },
    disabledRadioInner: {
      backgroundColor: theme.COLORS.MUTED
    },
    textStyles: {
      color: theme.COLORS.BLACK
    },
    disabledLabel: {
      //color: theme.COLORS.MUTED,
      opacity: theme.SIZES.OPACITY
    },
    ...colorsProps
  });
export default React.memo(withAzir(AzirRadio, styles));
