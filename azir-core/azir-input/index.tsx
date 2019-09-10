import React, { useState } from "react";
import { ActivityIndicator, TextInput, StyleSheet, TouchableOpacity, TouchableHighlight, Text, View } from "react-native";
import AzirTheme, { withAzir, colorsProps, getColorByName } from "azir-theme";
import Icon, { SolidIcons } from "azir-icon";
const renderIcon = (icon, iconPosition, disabled) => {
  return <View style={{ marginRight: iconPosition == "left" ? AzirTheme.SIZES.BASE * 0.2 : 0 }}>{icon}</View>;
  return <Icon size={12} style={{ marginRight: iconPosition == "left" ? AzirTheme.SIZES.BASE * 0.2 : 0 }} />;
};
const renderPassIcon = (icon, iconPosition, disabled, password, setPassword) => {
  return (
    <TouchableOpacity disabled={disabled} style={{ marginRight: iconPosition == "left" ? AzirTheme.SIZES.BASE * 0.2 : 0, padding: 8 }} onPress={() => setPassword(!password)}>
      {icon && icon}
      {!icon && <Icon icon={password ? AzirTheme.STRINGS.INPUT_ICON_PASS_ON : AzirTheme.STRINGS.INPUT_ICON_PASS_OFF} size={AzirTheme.SIZES.BASE * 1.0625} color="red" />}
    </TouchableOpacity>
  );
};
const AzirInput: React.FC<Props> = props => {
  const {
    type,
    borderless,
    icon,
    color,
    bgColor,
    placeholderTextColor,
    label,
    help,
    topHelp,
    bottomHelp,
    rounded,
    disabled,
    iconPosition,
    styles,
    containerStyle,
    style,
    inputStyle,
    children,
    labelProps,
    ...rest
  } = props;

  const [password, setPassword] = useState(props.password);
  const inputViewStyles = [styles.inputStyle, styles.inputContainer, bgColor && { backgroundColor: bgColor }, rounded && styles.rounded, borderless && styles.borderless, style];
  const inputStyles = [styles.inputView, icon && styles.inputIcon, styles.inputText, color && { color }, inputStyle];
  const lebelContent = label && (
    <Text style={styles.label} {...labelProps}>
      {label}
    </Text>
  );
  const helpContent = help && <Text style={styles.helpText}>{help}</Text>;
  return (
    <View style={[{ marginVertical: AzirTheme.SIZES.INPUT_CONTAINER_VERTICAL, alignContent: "center" }, containerStyle]}>
      {lebelContent}
      {topHelp && !bottomHelp && helpContent}
      <View style={inputViewStyles}>
        {iconPosition == "left" && renderIcon(icon, iconPosition, disabled)}
        {iconPosition == "left" && props.password && renderPassIcon(icon, iconPosition, disabled, password, setPassword)}
        <TextInput
          keyboardType={type}
          style={inputStyles}
          editable={!disabled}
          secureTextEntry={password}
          placeholderTextColor={placeholderTextColor}
          underlineColorAndroid="transparent"
          {...rest}
        />
        {iconPosition == "right" && renderIcon(icon, iconPosition, disabled)}
        {iconPosition == "right" && props.password && renderPassIcon(icon, iconPosition, disabled, password, setPassword)}
      </View>
      {bottomHelp && helpContent}
    </View>
  );
};

//Props Type ? for optional props
type Props = {
  password: boolean;
  type: "default" | "number-pad" | "decimal-pad" | "numeric" | "email-address" | "phone-pad" | string;
  borderless: boolean;
  icon?: any;
  color: string | "primary" | "theme" | "error" | "warning" | "success" | "info" | "transparent"; //button background
  bgColor: string | "primary" | "theme" | "error" | "warning" | "success" | "info" | "transparent";
  rounded: boolean;
  disabled: boolean;
  style: any;
  placeholderTextColor: string | "primary" | "theme" | "error" | "warning" | "success" | "info";
  label: string;
  help: string;
  topHelp: boolean;
  bottomHelp: boolean;
  iconPosition: "left" | "right";
  containerStyle: any;
  styles: any;
  inputStyle: any;
  labelProps: any;
};
//default props 4
AzirInput.defaultProps = {
  password: false,
  type: "default",
  borderless: false,
  icon: null,
  color: "red",
  bgColor: null,
  rounded: false,
  disabled: false,
  placeholderTextColor: "gray",
  label: null,
  help: null,
  topHelp: true,
  bottomHelp: false,
  iconPosition: AzirTheme.SETTINGS.RTL ? "left" : "right",
  containerStyle: null,
  inputStyle: null,
  style: null,
  labelProps: null
};
//component stylesheet
const styles = theme =>
  StyleSheet.create({
    inputView: {
      flex: 1
    },
    inputStyle: {
      backgroundColor: theme.COLORS.WHITE,
      borderRadius: theme.SIZES.INPUT_BORDER_RADIUS,
      borderWidth: theme.SIZES.INPUT_BORDER_WIDTH,
      borderColor: theme.COLORS.INPUT,
      height: theme.SIZES.INPUT_HEIGHT,
      paddingHorizontal: theme.SIZES.INPUT_HORIZONTAL,
      width: "100%"
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"
    },
    inputText: {
      textAlign: theme.SETTINGS.RTL ? "right" : "left",
      color: theme.COLORS.INPUT,
      fontSize: theme.SIZES.INPUT_TEXT,
      textDecorationColor: "transparent",
      textShadowColor: "transparent"
    },
    inputIcon: {
      marginHorizontal: theme.SIZES.BASE
    },
    helpText: {
      fontSize: theme.SIZES.INPUT_HELP_TEXT,
      fontStyle: "italic"
    },
    shadow: {
      shadowColor: theme.COLORS.BLOCK,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: theme.SIZES.OPACITY,
      shadowRadius: theme.SIZES.BUTTON_SHADOW_RADIUS,
      elevation: theme.SIZES.ANDROID_ELEVATION
    },
    customText: {
      fontSize: theme.SIZES.FONT,
      color: theme.COLORS.WHITE
    },
    rounded: {
      borderRadius: theme.SIZES.INPUT_ROUNDED
    },
    borderless: {
      borderColor: "transparent",
      borderWidth: 0
    },
    ...colorsProps,
    androidShadow: {
      elevation: theme.SIZES.ANDROID_ELEVATION
    }
  });
export default withAzir(AzirInput, styles);
