import React from "react";
import {  StyleSheet,   Text, View } from "react-native";
import AzirTheme, { withAzir, colorsProps, getColorByName } from "azir-theme";

const AzirHr: React.FC<Props> = props => {
  const { theme,children, style, textStyle, borderStyle, styles, width,borderWidth:_borderWidth, color, padding:_padding, fontSize:_fontSize, textPadding:_textPadding, textColor, shadow, ...rest } = props;
  //Set Default Values based on selected theme
  const fontSize = _fontSize ? _fontSize : theme.SIZES.FONT;
  const borderWidth = _borderWidth ? _borderWidth : theme.SIZES.HR_WIDTH;
  const textPadding = _textPadding ? _textPadding : theme.SIZES.HR_TEXT_PADDING;
  const padding = _padding ? _padding : theme.SIZES.HR_PADDING;
  //end
  return (
    <View style={[styles.row, { marginLeft: padding, marginRight: padding },width && {width:width}, style]}>
      <View style={[styles.side, { borderTopWidth: borderWidth, borderTopColor: getColorByName(color,theme.COLORS)  }, borderStyle]} />
      {typeof children === "string" ? (
        <Text style={[fontSize && { fontSize: fontSize }, { color: getColorByName(textColor,theme.COLORS) }, { paddingLeft: textPadding, paddingRight: textPadding }, textStyle]}>
          {children}
        </Text>
      ) : (
        children
      )}
      <View style={[styles.side, { borderTopWidth: borderWidth, borderTopColor: getColorByName(color,theme.COLORS) }, borderStyle]} />
    </View>
  );
};

//Props Type ? for optional props
type Props = {
  color: string | "primary" | "theme" | "error" | "warning" | "success" | "info" | "transparent";
  textColor: string | "primary" | "theme" | "error" | "warning" | "success" | "info";
  styles: any;
  style: any;
  textStyle: any;
  borderStyle: any;
  padding: any;
  textPadding: any;
  width: number;
  borderWidth: number;
  shadow: boolean;
  fontSize: number;
};
//default props 4
AzirHr.defaultProps = {
  color: "theme",
  textColor: "theme",
  shadow: false,
  fontSize: null,
  borderWidth: null,
  textPadding: null,
  padding: null
};
//component stylesheet
const styles = theme =>
  StyleSheet.create({
    row: {
      flexDirection: "row"
    },
    side: {
      flex: 1,
      alignSelf: "center"
    },
    ...colorsProps
  });

export default withAzir(AzirHr, styles);
