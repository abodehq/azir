import React from "react";
import { ActivityIndicator, StyleSheet, TouchableOpacity, Text, View } from "react-native";
import LCTheme, { withLC } from "be-theme";

const renderContent = props => {
  const { children, textColor, textTransform, textStyle, icon, loading, loadingSize, loadingColor, styles } = props;
  let content = children;
  const colorStyle = styles[textColor];

  const textStyles = [];
  textTransform && textStyles.push({ textTransform: textTransform });
  !colorStyle && textStyles.push({ color: textColor });
  colorStyle && textStyles.push({ color: colorStyle.backgroundColor });
  textStyle && textStyles.push(textStyle); //add user custom style

  const isString = children && typeof children === "string"; //apply text transform
  if (loading) {
    const color = styles[loadingColor];

    return <ActivityIndicator size={loadingSize} color={color ? color.backgroundColor : loadingColor} />;
  }
  if (icon) {
    const flexDirection = LCTheme.SETTINGS.RTL ? "row-reverse" : "row";
    return (
      <View
        style={{
          flexDirection: flexDirection,
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        {isString ? <Text style={textStyles}>{content as string}</Text> : content}
        {icon}
      </View>
    );
  }

  if (isString) return <Text style={textStyles}>{content as string}</Text>;
  return content;
};

const LcButton: React.FC<Props> = props => {
  const { children, containerStyle, styles, color, borderColor, borderWidth, disabled, radius, opacity, shadow, ...rest } = props;
  const colorStyle = styles[color];
  const containerStyles = [];
  containerStyles.push(styles.defaultButton);
  color && containerStyles.push(colorStyle);
  color && !colorStyle && containerStyles.push({ backgroundColor: color });
  radius && containerStyles.push({ borderRadius: radius });
  shadow && containerStyles.push(styles.shadow);
  if (borderWidth != 0) {
    const borderColorStyle = styles[borderColor];
    containerStyles.push({
      borderWidth: borderWidth,
      borderColor: borderColorStyle ? borderColorStyle.backgroundColor : borderColor
    });
  }
  containerStyle && containerStyles.push(containerStyle); //add user custom style
  return (
    <TouchableOpacity disabled={disabled} activeOpacity={opacity} style={containerStyles} {...rest}>
      {renderContent(props)}
    </TouchableOpacity>
  );
};

//Props Type ? for optional props
type Props = {
  color: string | "primary" | "theme" | "error" | "warning" | "success" | "info" | "transparent"; //button background
  textColor: string | "primary" | "theme" | "error" | "warning" | "success" | "info" | "transparent";
  borderColor: string | "primary" | "theme" | "error" | "warning" | "success" | "info";
  loadingColor: string | "primary" | "theme" | "error" | "warning" | "success" | "info";
  borderWidth: number;
  radius: number;
  disabled: boolean;
  textTransform?: "lowercase" | "uppercase" | "capitalize";
  textStyle?: object;
  containerStyle?: object;
  shadow: boolean;
  Icon?: any;
  styles: any;
  loadingSize: "small" | "large";
  loading: boolean;
  opacity: number;
};
//default props
LcButton.defaultProps = {
  color: "primary",
  textColor: "white",
  borderColor: "primary",
  loadingColor: "primary",
  radius: 0,
  disabled: false,
  shadow: false,
  borderWidth: 0,
  loadingSize: "small",
  loading: false,
  opacity: 0.8
};
//component stylesheet
const styles = theme =>
  StyleSheet.create({
    defaultButton: {
      borderRadius: 3,
      width: theme.SIZES.BUTTON_WIDTH,
      height: theme.SIZES.BUTTON_HEIGHT,
      alignItems: "center",
      justifyContent: "center"
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
    },
    androidShadow: {
      elevation: theme.SIZES.ANDROID_ELEVATION
    }
  });
export default withLC(LcButton, styles);
