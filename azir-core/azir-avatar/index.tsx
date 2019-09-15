import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import AzirTheme, { withAzir, colorsProps, getColorByName, getSize } from "azir-theme";
import Icon, { AzirIcons, SolidIcons, RegularIcons, BrandIcons } from "azir-icon";
const AzirAvatarIcon: React.FC<Props> = props => {
  const {shadow, children, color, rounded, contentColor, style, styles, icon, source, title, size, contentStyle, ...rest } = props;
  const _size = getSize(size);
  return (
    <View
      style={[
        {
          width: _size,
          height: _size,
          borderRadius: rounded ? _size / 2 : 0,
          backgroundColor: getColorByName(color)
        },
        shadow && styles.shadow,
        styles.container,
        style
      ]}
    >
      {icon ? (
        <Icon icon={icon} color={getColorByName(contentColor)} size={_size * 0.6} style={[ contentStyle]} {...rest} />
      ) : source ? (
        <Image style={[{ width: _size, height: _size, borderRadius: rounded ? _size / 2 : 0 }, contentStyle]} source={source} {...rest} />
      ) : title ? (
        <Text style={[styles.title, { fontSize: _size / 2, color: getColorByName(contentColor) }, contentStyle]} {...rest}>
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
  size: "medium",
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
