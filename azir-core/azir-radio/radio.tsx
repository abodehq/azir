import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import AzirTheme, { withAzir, colorsProps } from "azir-theme";
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
  const { size, styles, iconStyle, iconActive, iconInActive, iconActiveColor, iconInActiveColor, iconDisabledColor, disabled, hideInActiveIcon, hideIconBorder, type } = props;

  let _iconActiveColor = styles[iconActiveColor];
  _iconActiveColor = _iconActiveColor ? _iconActiveColor.backgroundColor : iconActiveColor;
  let _iconInActiveColor = styles[iconInActiveColor];
  _iconInActiveColor = _iconInActiveColor ? _iconInActiveColor.backgroundColor : iconInActiveColor;
  let _iconDisabledColor = styles[iconDisabledColor];
  _iconDisabledColor = _iconDisabledColor ? _iconDisabledColor.backgroundColor : iconDisabledColor;
  let iconColor = disabled ? _iconDisabledColor : checked ? _iconActiveColor : _iconInActiveColor;

  let icon = iconActive
    ? checked
      ? iconActive
      : iconInActive
      ? iconInActive
      : type == "radio"
      ? AzirTheme.STRINGS.RADIO_DEFAULT_ICON
      : AzirTheme.STRINGS.CHECKBOX_DEFAULT_ICON
    : type == "radio"
    ? AzirTheme.STRINGS.RADIO_DEFAULT_ICON
    : AzirTheme.STRINGS.CHECKBOX_DEFAULT_ICON;

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
      borderColor: AzirTheme.COLORS.TRANSPARENT
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
  const { textActiveColor, textInActiveColor, textDisabledColor, children, disabled, flexDirection, textStyle, styles } = props;
  let _textActiveColor = styles[textActiveColor];
  _textActiveColor = _textActiveColor ? _textActiveColor.backgroundColor : textActiveColor;
  let _textInActiveColor = styles[textInActiveColor];
  _textInActiveColor = _textInActiveColor ? _textInActiveColor.backgroundColor : textInActiveColor;
  let _textDisabledColor = styles[textDisabledColor];
  _textDisabledColor = _textDisabledColor ? _textDisabledColor.backgroundColor : textDisabledColor;

  const radioContent = children;
  const labelStyles = [styles.textStyles, flexDirection && spaceAround(flexDirection), textStyle];
  checked ? labelStyles.push({ color: _textActiveColor }) : labelStyles.push({ color: _textInActiveColor });

  disabled && labelStyles.push(styles.disabledLabel, { color: _textDisabledColor });
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
  size: AzirTheme.SIZES.RADIO_SIZE,
  disabled: false,
  flexDirection: "row",
  checked: false,
  iconActiveColor: "theme",
  iconInActiveColor: AzirTheme.COLORS.BLACK,
  textActiveColor: "theme",
  textInActiveColor: AzirTheme.COLORS.BLACK,
  iconDisabledColor: AzirTheme.COLORS.MUTED,
  textDisabledColor: AzirTheme.COLORS.MUTED,
  hideLable: false,
  hideInActiveIcon: true,
  hideIconBorder: false,
  type: "radio",
  inGroup: false
};
const styles = theme =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
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
