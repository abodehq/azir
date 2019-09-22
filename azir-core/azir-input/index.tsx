import React, { useState } from "react";
import { I18nManager, TextInput, StyleSheet, TouchableOpacity, TouchableHighlight, Text, View } from "react-native";
import { withAzir, colorsProps, getColorByName } from "azir-theme";
import Icon from "azir-icon";
const renderIcon = (theme, icon, iconPosition, iconColor, iconSize, disabled) => {
  if (typeof icon === "string") return <Icon icon={icon} size={iconSize} color={getColorByName(iconColor, theme.COLORS)} />;
  return icon;
};
const renderPassIcon = (theme, renderPasswordIcon, iconPosition, iconColor, iconSize, disabled, password, setPassword) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={() => setPassword(!password)}>
      {renderPasswordIcon && renderPasswordIcon(password)}
      {!renderPasswordIcon && (
        <Icon icon={password ? theme.STRINGS.INPUT_ICON_PASS_ON : theme.STRINGS.INPUT_ICON_PASS_OFF} size={iconSize} color={getColorByName(iconColor, theme.COLORS)} />
      )}
    </TouchableOpacity>
  );
};
const AzirInput: React.FC<Props> = props => {
  const {
    theme,
    type,
    borderless,
    icon,
    iconSize: _iconSize,
    iconColor,
    color,
    selectionColor,
    bgColor,
    placeholderTextColor: _placeholderTextColor,
    label,
    labelPosition,
    help,
    helpPosition,
    rounded,
    disabled,
    iconPosition: _iconPosition,
    styles,
    containerStyle,
    style,
    inputStyle,
    children,
    labelStyle,
    helpStyle,
    renderPasswordIcon,
    ...rest
  } = props;

  const [password, setPassword] = useState(props.password);

  //Set Default Values based on selected theme
  const iconPosition = _iconPosition ? _iconPosition : I18nManager.isRTL ? "left" : "right";
  const iconSize = _iconSize ? _iconSize : theme.SIZES.INPUT_ICON_SIZE;
  const placeholderTextColor = _placeholderTextColor ? _placeholderTextColor : theme.COLORS.GREY;

  //end

  const inputViewStyles = [
    styles.inputStyle,
    styles.inputContainer,
    bgColor && { backgroundColor: getColorByName(bgColor, theme.COLORS) },
    rounded && styles.rounded,
    borderless && styles.borderless,
    labelPosition === "top" || labelPosition === "bottom" ? { width: "100%" } : { flexGrow: 1 },
    style
  ];
  const inputStyles = [styles.inputView, icon && styles.inputIcon, styles.inputText, color && { color: getColorByName(color, theme.COLORS) }, inputStyle];
  const labelContent =
    label && typeof label === "string" ? (
      <Text style={[styles.label, (labelPosition === "left" || labelPosition === "right") && { alignSelf: "center" }, labelStyle]}>{label}</Text>
    ) : (
      label
    );
  const helpContent = help && typeof help === "string" ? <Text style={[styles.helpText, helpStyle]}>{help}</Text> : help;
  const InputContainer = (
    <View style={inputViewStyles}>
      <TextInput
        keyboardType={type}
        style={inputStyles}
        editable={!disabled}
        secureTextEntry={password}
        placeholderTextColor={getColorByName(placeholderTextColor, theme.COLORS)}
        underlineColorAndroid="transparent"
        selectionColor={getColorByName(selectionColor, theme.COLORS)}
        {...rest}
      />
      {renderIcon(theme, icon, iconPosition, iconColor, iconSize, disabled)}
      {!icon && props.password && renderPassIcon(theme, renderPasswordIcon, iconPosition, iconColor, iconSize, disabled, password, setPassword)}
    </View>
  );
  if (labelPosition === "left" || labelPosition === "right") {
    return (
      <View style={{ width: "100%" }}>
        {helpPosition == "top" && helpContent}
        <View
          style={[
            { flexDirection: labelPosition === "left" ? "row" : "row-reverse", marginVertical: theme.SIZES.INPUT_CONTAINER_VERTICAL, alignContent: "center" },
            containerStyle
          ]}
        >
          {labelContent}
          {InputContainer}
        </View>
        {helpPosition == "bottom" && helpContent}
      </View>
    );
  }
  return (
    <View style={[{ marginVertical: theme.SIZES.INPUT_CONTAINER_VERTICAL, alignContent: "center" }, containerStyle]}>
      {labelContent}
      {helpPosition == "top" && helpContent}
      {InputContainer}
      {helpPosition == "bottom" && helpContent}
    </View>
  );
};

//Props Type ? for optional props
type Props = {
  password: boolean;
  type: "default" | "number-pad" | "decimal-pad" | "numeric" | "email-address" | "phone-pad" | string;
  borderless: boolean;
  icon?: any;
  iconSize: number;
  iconColor: string | "primary" | "theme" | "error" | "warning" | "success" | "info" | "transparent";
  color: string | "primary" | "theme" | "error" | "warning" | "success" | "info" | "transparent";
  selectionColor: string | "primary" | "theme" | "error" | "warning" | "success" | "info" | "transparent";
  bgColor: string | "primary" | "theme" | "error" | "warning" | "success" | "info" | "transparent";
  rounded: boolean;
  disabled: boolean;
  style: any;
  placeholderTextColor: string | "primary" | "theme" | "error" | "warning" | "success" | "info";
  label: string;
  help: string;
  helpPosition: "top" | "bottom";
  labelPosition: "top" | "left" | "right" | "bottom";
  iconPosition: "left" | "right";
  containerStyle: any;
  styles: any;
  inputStyle: any;
  labelStyle: any;
  helpStyle: any;
  renderPasswordIcon: any;
};
//default props 4
AzirInput.defaultProps = {
  password: false,
  type: "default",
  borderless: false,
  icon: null,
  iconColor: "theme",
  iconSize: null,
  color: "theme",
  selectionColor: "theme",
  bgColor: null,
  rounded: false,
  disabled: false,
  placeholderTextColor: null,
  label: null,
  helpPosition: "bottom",
  labelPosition: "top",
  help: null,
  iconPosition: null,
  containerStyle: null,
  inputStyle: null,
  style: null,
  labelStyle: null,
  helpStyle: null,
  renderPasswordIcon: null
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
      paddingHorizontal: theme.SIZES.INPUT_HORIZONTAL
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"
    },
    inputText: {
      textAlign: I18nManager.isRTL ? "right" : "left",
      color: theme.COLORS.INPUT,
      fontSize: theme.SIZES.INPUT_TEXT,
      textDecorationColor: "transparent",
      textShadowColor: "transparent"
    },
    label: {
      //textAlign: I18nManager.isRTL ? "right" : "left"
    },
    helpText: {
      fontSize: theme.SIZES.INPUT_HELP_TEXT,
      fontStyle: "italic",
      color: theme.COLORS.ERROR
      //textAlign: I18nManager.isRTL ? "right" : "left"
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
