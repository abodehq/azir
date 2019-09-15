import React from "react";
import {  StyleSheet,   Text, View } from "react-native";
import AzirTheme, { withAzir, colorsProps, getColorByName } from "azir-theme";

const AzirHr: React.FC<Props> = props => {
  const { children, style, textStyle, borderStyle, styles, width,borderWidth, color, padding, fontSize, textPadding, textColor, shadow, ...rest } = props;

  return (
    <View style={[styles.row, { marginLeft: padding, marginRight: padding },width && {width:width}, style]}>
      <View style={[styles.side, { borderTopWidth: borderWidth, borderTopColor: getColorByName(color) }, borderStyle]} />
      {typeof children === "string" ? (
        <Text style={[fontSize && { fontSize: fontSize }, { color: getColorByName(textColor) }, { paddingLeft: textPadding, paddingRight: textPadding }, textStyle]}>
          {children}
        </Text>
      ) : (
        children
      )}
      <View style={[styles.side, { borderTopWidth: borderWidth, borderTopColor: getColorByName(color) }, borderStyle]} />
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
  fontSize: AzirTheme.SIZES.FONT,
  borderWidth: AzirTheme.SIZES.HR_WIDTH,
  textPadding: AzirTheme.SIZES.HR_TEXT_PADDING,
  padding: AzirTheme.SIZES.HR_PADDING
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
