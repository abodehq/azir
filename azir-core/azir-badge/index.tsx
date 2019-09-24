import React from "react";
import { TouchableOpacity, StyleSheet, Text, View, Image } from "react-native";
import { withAzir, colorsProps, getColorByName, getSize } from "azir-theme";
const AzirBadge: React.FC<Props> = props => {
  const {
    theme,
    onPress,
    Component = onPress ? TouchableOpacity : View,
    badgeContent,
    style,
    textStyle,
    badgeStyle,
    containerStyle,
    styles,
    children,
    shadow,
    color,
    rounded,
    size: _size,
    contentSize: _contentSize,
    contentRounded,
    badgePosition,
    ...rest
  } = props;

  //const element = "+99";
  const element = typeof badgeContent === "string" ? <Text style={[styles.text, textStyle]}>{badgeContent as string}</Text> : badgeContent;
  const size = _size ? getSize(_size) : element ? 30 : 22;
  const contentSize = _contentSize ? getSize(_contentSize) : null;
  var badgeTop = -size / 2;
  var badgeRight = -size / 2;
  switch (badgePosition) {
    case "tr":
      if (contentSize && contentRounded) {
        var x = contentSize - Math.abs(contentSize * Math.cos(2.35619));
        var y = contentSize - Math.abs(contentSize * Math.sin(2.35619));
        badgeTop += y / 2;
        badgeRight += x / 2;
      }
      break;
    case "tl":
      if (!contentRounded) {
        badgeTop = -size / 2;
        badgeRight = contentSize - size / 2;
      }
      if (contentSize && contentRounded) {
        var x = contentSize + Math.abs(contentSize * Math.cos(2.35619));
        var y = contentSize - Math.abs(contentSize * Math.sin(2.35619));
        badgeTop += y / 2;
        badgeRight += x / 2;
      }
      break;
    case "bl":
      if (!contentRounded) {
        badgeTop = contentSize - size / 2;
        badgeRight = contentSize - size / 2;
      }
      if (contentSize && contentRounded) {
        var x = contentSize + Math.abs(contentSize * Math.cos(2.35619));
        var y = contentSize + Math.abs(contentSize * Math.sin(2.35619));
        badgeTop += y / 2;
        badgeRight += x / 2;
      }
      break;
    case "br":
      if (!contentRounded) {
        badgeTop = contentSize - size / 2;
        badgeRight = -size / 2;
      }
      if (contentSize && contentRounded) {
        var x = contentSize - Math.abs(contentSize * Math.cos(2.35619));
        var y = contentSize + Math.abs(contentSize * Math.sin(2.35619));
        badgeTop += y / 2;
        badgeRight += x / 2;
      }
      break;
  }
  const badgePositionStyle = { position: "absolute", top: badgeTop, right: badgeRight };
  //borderRadius: size / 2,
  //style={{ flex: 0, alignSelf: "flex-start" }}
  return (
    <View style={[{ width: contentSize, height: contentSize }, containerStyle]}>
      {children}
      <View style={[badgePositionStyle, style && style]}>
        <Component
          style={[
            styles.badge,
            rounded && { borderRadius: size / 2 },
            { minWidth: size, height: size, backgroundColor: getColorByName(color, theme.COLORS) },
            badgeStyle && badgeStyle
          ]}
          onPress={onPress}
          {...rest}
        >
          {element}
        </Component>
      </View>
    </View>
  );
};

//Props Type ? for optional props
type Props = {
  color: string | "primary" | "theme" | "error" | "warning" | "success" | "info" | "transparent";
  styles: any;
  style: any;
  badgeContent: any;
  size: "small" | "medium" | "large" | "xlarge" | number;
  badgePosition: "tl" | "tr" | "bl" | "br";
  contentSize: "small" | "medium" | "large" | "xlarge" | number;
  contentRounded: boolean;
  rounded: boolean;
  shadow: boolean;
  textStyle: any;
  badgeStyle: any;
  onPress: any;
  Component: any;
  containerStyle: any;
};
//default props 4
AzirBadge.defaultProps = {
  containerStyle: null,
  textStyle: null,
  badgeStyle: null,
  onPress: null,
  color: "theme",
  size: null,
  rounded: true,
  shadow: false,
  badgeContent: null,
  contentSize: null,
  badgePosition: "tl",
  contentRounded: false
};
//component stylesheet
const styles = theme =>
  StyleSheet.create({
    badge: {
      alignSelf: "center",
      alignItems: "center",
      justifyContent: "center",
      // backgroundColor: theme.colors[status],
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: "#fff"
    },
    text: {
      fontSize: 12,
      color: "white",
      paddingHorizontal: 4
    },
    ...colorsProps
  });

export default withAzir(AzirBadge, styles);
