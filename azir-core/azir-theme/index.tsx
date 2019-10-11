import React from "react";

// import COLORS & SIZES
import LC_COLORS from "./colors";
import LC_SIZES from "./sizes";
import LC_Settings from "./settings";
import LC_Strings from "./strings";
import LC_BREAKPOINTS from "./breakPoints";
// default theme with COLORS & SIZES
const AzirTheme = {
  SETTINGS: LC_Settings,
  COLORS: LC_COLORS,
  SIZES: LC_SIZES,
  STRINGS: LC_Strings,
  BREAKPOINTS: LC_BREAKPOINTS
};

export default AzirTheme;

// creating the AzirTheme context
const AzirContext = React.createContext({});

/*
 *   withAzir
 *   args: Component - React Component, styles to be added to Component
 *   theme: if no styles or theme add default theme={ SIZES, COLORS }
 */

export function withAzir(Component, styles) {
  // eslint-disable-next-line react/no-multi-comp
  return class extends React.Component {
    render() {
      const { props } = this;
      return (
        <AzirContext.Consumer>{theme => <Component {...props} theme={{ ...AzirTheme, ...theme }} styles={styles && styles({ ...AzirTheme, ...theme })} />}</AzirContext.Consumer>
      );
    }
  };
}

/*
 *   AzirProvider using React.Component
 *   AzirContext.Provider value has the default value from { COLORS, SIZES }
 */

// eslint-disable-next-line react/no-multi-comp

export const AzirProvider: React.FC<Props> = props => {
  const { theme, children } = props;
  const { BREAKPOINTS: CUSTOM_BREAKPOINTS, SETTINGS: CUSTOM_SETTINGS, STRINGS: CUSTOM_STRINGS, COLORS: CUSTOM_COLORS, SIZES: CUSTOM_SIZES, customTheme } = theme;
  const providerTheme = {
    BREAKPOINTS: { ...AzirTheme.BREAKPOINTS, ...CUSTOM_BREAKPOINTS },
    SETTINGS: { ...AzirTheme.SETTINGS, ...CUSTOM_SETTINGS },
    STRINGS: { ...AzirTheme.STRINGS, ...CUSTOM_STRINGS },
    COLORS: { ...AzirTheme.COLORS, ...CUSTOM_COLORS },
    SIZES: { ...AzirTheme.SIZES, ...CUSTOM_SIZES },
    ...customTheme
  };
  return <AzirContext.Provider value={providerTheme}>{children}</AzirContext.Provider>;
};

//Props Type ? for optional props
type Props = {
  children: any;
  theme: any;
};
//default props 4
AzirProvider.defaultProps = { children: null, theme: {} };

export const colorsProps = {
  shadow: {
    shadowColor: LC_COLORS.BLOCK,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: LC_SIZES.OPACITY,
    shadowRadius: LC_SIZES.BUTTON_SHADOW_RADIUS,
    elevation: LC_SIZES.ANDROID_ELEVATION
  }
};

export const getColorByName = (color, COLORS) => {
  return COLORS[color.toUpperCase()] ? COLORS[color.toUpperCase()] : color;
};

const Sizes = {
  xtiny: 10,
  tiny: 15,
  xxsmall: 20,
  xsmall: 30,
  small: 50,
  medium: 75,
  xmedium: 85,
  large: 100,
  xlarge: 150
};
export const getSize = size => {
  return Sizes[size] ? Sizes[size] : typeof size === "number" ? size : Sizes["small"];
};

export const AzirGridContext = React.createContext({ width: 0, height: 0, spacing: 0 });
