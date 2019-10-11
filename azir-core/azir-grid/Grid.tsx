import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import AzirTheme, { withAzir, colorsProps } from "azir-theme";

const AzirGrid: React.FC<Props> = props => {
  const { theme, direction, justify, alignItems, children, style, styles, width: _width, spacing: _spacing, ...rest } = props;
  const [gridWidth, setGridWidth] = useState(_width);
  const mainSpacing = 8 * _spacing;
  const childrenWithProps = React.Children.map(props.children, child => {
    const { xs, sm, md, lg, xl, width } = child.props;
    const breakPoints = Object.entries(theme.BREAKPOINTS);
    var lastPoint = "xs";
    var breakPointValue: any = 12;
    for (const breakPoint of breakPoints) {
      if (gridWidth > breakPoint[1]) {
        lastPoint = breakPoint[0];
        breakPointValue = child.props[lastPoint];
        if (breakPointValue != undefined) break;
      }
    }
    var gridItemWidth = Math.floor(((gridWidth ? gridWidth : 0) / 12) * (breakPointValue ? breakPointValue : 12) - mainSpacing);
    if (width != undefined) {
      gridItemWidth = width;
    }
    if (breakPointValue == "auto") gridItemWidth = null;
    return React.cloneElement(child, { _width: gridItemWidth, spacing: mainSpacing });
  });

  return (
    <View
      onLayout={event => {
        var { x, y, width, height } = event.nativeEvent.layout;
        console.log(width);

        setGridWidth(width);
      }}
      style={[styles.grid, { flexDirection: direction, justifyContent: justify, alignItems: alignItems }, style]}
    >
      {gridWidth != null && childrenWithProps}
    </View>
  );
};

//Props Type ? for optional props
type Props = {
  styles: any;
  style: any;
  width: number;
  spacing: any;
  direction: string;
  justify: string;
  alignItems: string;
};
//default props 4
AzirGrid.defaultProps = {
  width: null,
  spacing: 0,
  direction: "row",
  justify: "space-between",
  alignItems: "flex-start"
};
//component stylesheet
const styles = theme =>
  StyleSheet.create({
    grid: {
      flexWrap: "wrap"
    },
    ...colorsProps
  });

export default withAzir(AzirGrid, styles);
