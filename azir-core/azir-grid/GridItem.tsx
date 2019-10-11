import React from "react";
import { StyleSheet, View } from "react-native";
import AzirTheme, { AzirGridContext, withAzir, colorsProps } from "azir-theme";

const AzirGridItem: React.FC<Props> = props => {
  const { xs, children, style, _width, spacing, height, ...rest } = props;
  return (
    <View style={[styles.gridItem, { width: _width, height: height, marginRight: spacing / 2, marginLeft: spacing / 2 }, style]}>
      <AzirGridContext.Provider value={{ width: _width, height: height, spacing: spacing }}>{props.children}</AzirGridContext.Provider>
    </View>
  );
};

//Props Type ? for optional props
type Props = {
  style: any;
  _width: number;
  height: number;
  xs: any;
  spacing: number;
};
//default props 4
AzirGridItem.defaultProps = {
  _width: null,
  spacing: 0,
  height: null
};
//component stylesheet
const styles = StyleSheet.create({
  gridItem: {
    justifyContent: "flex-start",
    alignItems: "center"
    // backgroundColor: "green"
  },
  ...colorsProps
});

export default AzirGridItem;
