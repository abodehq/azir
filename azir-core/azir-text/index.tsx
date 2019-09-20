import React from "react";
import AzirTheme, { withAzir, colorsProps,getColorByName } from "azir-theme";
import { Text, StyleSheet } from "react-native";
import normalize from "./normalize";

export { default as human } from "./collections/human";
export { default as humanDense } from "./collections/humanDense";
export { default as humanTall } from "./collections/humanTall";
export { default as material } from "./collections/material";
export { default as materialTall } from "./collections/materialTall";
export { default as materialDense } from "./collections/materialDense";
export { default as iOSUIKit } from "./collections/iOSUIKit";
export { default as iOSUIKitDense } from "./collections/iOSUIKitDense";
export { default as iOSUIKitTall } from "./collections/iOSUIKitTall";

export { default as sanFranciscoWeights } from "./helpers/sanFranciscoWeights";
export { default as robotoWeights } from "./helpers/robotoWeights";
export { default as notoCJKWeights } from "./helpers/notoCJKWeights";
export { default as notoTallWeights } from "./helpers/notoTallWeights";
export { default as webWeights } from "./helpers/webWeights";
export { default as systemWeights } from "./helpers/systemWeights";
export { default as systemDenseWeights } from "./helpers/systemDenseWeights";
export { default as systemTallWeights } from "./helpers/systemTallWeights";
export { default as sanFranciscoSpacing } from "./helpers/sanFranciscoSpacing";
// export { default as iOSColors } from "./helpers/iOSColors";
// export { default as materialColors } from "./helpers/materialColors";

const AzirText: React.FC<Props> = props => {
  const { style, h1, h2, h3, h4, h5, p, muted, neutral, size :_size, color : _color , bold, italic, center, children, styles, theme, ...rest } = props;
  //Set Default Values based on selected theme
  const color = _color ? _color :  theme.COLORS.BLACK;
  const size = _size ? _size :   theme.SIZES.FONT;
  //end
  return (
    <Text
      style={[
        size && { fontSize: size },
        h1 && { fontSize: normalize(44) },
        h2 && { fontSize: normalize(38) },
        h3 && { fontSize: normalize(30) },
        h4 && { fontSize: normalize(24) },
        h5 && { fontSize: normalize(18) },
        p && { fontSize: normalize(16) },
        muted && { color: theme.COLORS.MUTED },
        neutral && { color: theme.COLORS.NEUTRAL },
        bold && { fontWeight: "bold" },
        italic && { fontStyle: "italic" },
        style && style,
        color && { color: getColorByName(color,theme.COLORS) },
        center && { textAlign: "center" }
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};

type Props = {
  style: any;
  children: any;
  h1: boolean;
  h2: boolean;
  h3: boolean;
  h4: boolean;
  h5: boolean;
  p: boolean;
  size: number;
  color: string;
  neutral: boolean;
  muted: boolean;
  bold: boolean;
  center: boolean;
  italic: boolean;
  styles: any;
  theme: any;
};
AzirText.defaultProps = {
  children: null,
  style: null,
  h1: false,
  h2: false,
  h3: false,
  h4: false,
  h5: false,
  center: false,
  p: false,
  size: null,
  color: null,
  muted: false,
  bold: false,
  italic: false,
  neutral: false,
  styles: {}
};
const styles = theme =>
  StyleSheet.create({
    ...colorsProps
  });
export default withAzir(AzirText, styles);
