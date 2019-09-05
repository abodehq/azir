import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import FlashMessageWrapper, { styleWithInset } from "./FlashMessageWrapper";
import { withAzir } from "azir-theme";
/**
 * MessageComponent `minHeight` property used mainly in vertical transitions
 */
const OFFSET_HEIGHT = Platform.OS !== "ios" ? 60 : 48;
/**
 * Default MessageComponent used in FlashMessage
 * This component it's wrapped in `FlashMessageWrapper` to handle orientation change and extra inset padding in special devices
 * For most of uses this component doesn't need to be change for custom versions, cause it's very customizable
 */
const ColorTheme = {
  success: "#5cb85c",
  info: "#5bc0de",
  warning: "#f0ad4e",
  danger: "#d9534f"
};
const FlashMessageTemplate: React.FC<any> = ({
  message,
  style,
  styles,
  textStyle,
  titleStyle,
  renderFlashMessageIcon,
  position = "top",
  renderCustomContent,
  floating = false,
  icon,
  hideStatusBar = false,
  ...props
}) => {
  const hasDescription = !!message.description && message.description !== "";

  const iconView =
    !!icon &&
    renderFlashMessageIcon(
      icon.icon === "auto" ? message.type : icon.icon,
      [icon.position === "left" && styles.flashIconLeft, icon.position === "right" && styles.flashIconRight, icon.style],
      icon.iconstyle
    );
  const hasIcon = !!iconView;

  return (
    <FlashMessageWrapper position={typeof position === "string" ? position : null}>
      {wrapperInset => (
        <View
          style={styleWithInset(
            [
              styles.defaultFlash,
              position === "center" && styles.defaultFlashCenter,
              position !== "center" && floating && styles.defaultFlashFloating,
              hasIcon && styles.defaultFlashWithIcon,
              !!message.backgroundColor
                ? { backgroundColor: message.backgroundColor }
                : !!message.type &&
                  !!styles[message.type] && {
                    backgroundColor: styles[message.type].backgroundColor
                  },
              style
            ],
            wrapperInset,
            !!hideStatusBar,
            position !== "center" && floating ? "margin" : "padding"
          )}
          {...props}
        >
          {hasIcon && icon.position === "left" && iconView}
          <View style={styles.flashLabel}>
            <Text style={[styles.flashText, hasDescription && styles.flashTitle, !!message.color && { color: message.color }, titleStyle]}>{message.message}</Text>
            {!!renderCustomContent && renderCustomContent()}
            {hasDescription && <Text style={[styles.flashText, !!message.color && { color: message.color }, textStyle]}>{message.description}</Text>}
          </View>
          {hasIcon && icon.position === "right" && iconView}
        </View>
      )}
    </FlashMessageWrapper>
  );
};
type Props = {
  message: any;
  renderFlashMessageIcon: any;
};

const styles = theme =>
  StyleSheet.create({
    defaultFlash: {
      justifyContent: "flex-start",
      paddingVertical: 15,
      paddingHorizontal: 20,
      backgroundColor: "#696969",
      minHeight: OFFSET_HEIGHT
    },
    defaultFlashCenter: {
      margin: 44,
      borderRadius: 8,
      overflow: "hidden"
    },
    defaultFlashFloating: {
      marginTop: 10,
      marginLeft: 12,
      marginRight: 12,
      borderRadius: 8
    },
    defaultFlashWithIcon: {
      flexDirection: "row"
    },
    flashLabel: {
      flexDirection: "column"
    },
    flashText: {
      fontSize: 14,
      lineHeight: 18,
      color: "#fff"
    },
    flashTitle: {
      fontSize: 16,
      fontWeight: "600",
      marginBottom: 5
    },
    flashIconLeft: {
      marginLeft: -6,
      marginRight: 9
    },
    flashIconRight: {
      marginRight: -6,
      marginLeft: 9
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
    },
    transparent: {
      backgroundColor: theme.COLORS.TRANSPARENT
    }
  });
export default withAzir(FlashMessageTemplate, styles);
