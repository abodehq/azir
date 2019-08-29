import React from "react";
import LCTheme, { withLC } from "be-theme";
import { Text, StyleSheet } from "react-native";
import normalize from "./normalize";
const LcIcon: React.FC<Props> = props => {
  const {
    style,
    h1,
    h2,
    h3,
    h4,
    h5,
    p,
    muted,
    neutral,
    size,
    color,
    bold,
    italic,
    center,
    children,
    styles,
    theme,
    ...rest
  } = props;
  let _color = color;
  const themeColor = styles[color];

  if (themeColor) _color = themeColor.backgroundColor;

  return (
    <Text
      style={[
        h1 && { fontSize: normalize(44) },
        h2 && { fontSize: normalize(38) },
        h3 && { fontSize: normalize(30) },
        h4 && { fontSize: normalize(24) },
        h5 && { fontSize: normalize(18) },
        p && { fontSize: normalize(16) },
        muted && { color: theme.COLORS.MUTED },
        neutral && { color: theme.COLORS.NEUTRAL },
        size && { fontSize: size },
        color && { color },
        italic && { fontStyle: "italic" },
        bold && { fontWeight: "bold" },
        center && { textAlign: "center" },
        style && style
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
LcIcon.defaultProps = {
  children: null,
  style: null,
  h1: false,
  h2: false,
  h3: false,
  h4: false,
  h5: false,
  center: false,
  p: false,
  size: 0,
  color: null,
  muted: false,
  bold: false,
  italic: false,
  neutral: false,
  styles: {},
  theme: LCTheme
};
const styles = theme =>
  StyleSheet.create({
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
    }
  });
export default withLC(LcIcon, styles);
