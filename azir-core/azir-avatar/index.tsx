import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { withAzir, colorsProps, getColorByName, getSize } from "azir-theme";
import Icon from "azir-icon";
const AzirAvatarIcon: React.FC<Props> = props => {
  const {theme,shadow, children, color, rounded, contentColor, style, styles, icon, source, title, size:_size, contentStyle, ...rest } = props;
  const size = _size ?  getSize(_size) :  getSize(theme.SIZES.AVATAR_SIZE);

  return (
    <View
      style={[
        {
          width: size,
          height: size,
          borderRadius: rounded ? size / 2 : 0,
          backgroundColor:  getColorByName(color,theme.COLORS)
        },
        shadow && styles.shadow,
        styles.container,
        style
      ]}
    >
      {icon ? (
        <Icon icon={icon} color={getColorByName(contentColor,theme.COLORS)} size={size * 0.6} style={[contentStyle]} {...rest} />
      ) : source ? (
        <Image style={[{ width: size, height: size, borderRadius: rounded ? size / 2 : 0 }, contentStyle]} source={source} {...rest} />
      ) : title ? (
        <Text style={[styles.title, { fontSize: size / 2, color: getColorByName(contentColor,theme.COLORS) }, contentStyle]} {...rest}>
          {title}
        </Text>
      ) : (
        children
      )}
    </View>
  );
};

//Props Type ? for optional props
type Props = {
  color: string | "primary" | "theme" | "error" | "warning" | "success" | "info" | "transparent";
  contentColor: string | "primary" | "theme" | "error" | "warning" | "success" | "info" | "transparent";
  styles: any;
  style: any;
  contentStyle: any;
  icon: any;
  source: any;
  size: "small" | "medium" | "large" | "xlarge" | number;
  rounded: boolean;
  title: string;
  shadow:boolean;
};
//default props 4
AzirAvatarIcon.defaultProps = {
  color: "theme",
  contentColor: "white",
  icon: null,
  source: null,
  size: null,
  rounded: true,
  title: null,
  contentStyle: null,
  shadow:false
};
//component stylesheet
const styles = theme =>
  StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center"
    },
    title: {
      backgroundColor: "transparent",
      textAlign: "center"
    },
    ...colorsProps
  });

export default withAzir(AzirAvatarIcon, styles);
