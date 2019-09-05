import React from "react";

// import COLORS & SIZES
import LC_COLORS from "./colors";
import LC_SIZES from "./sizes";
import LC_Settings from "./settings";
// default theme with COLORS & SIZES
const AzirTheme = {
  SETTINGS: LC_Settings,
  COLORS: LC_COLORS,
  SIZES: LC_SIZES
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
      return <AzirContext.Consumer>{theme => <Component {...props} theme={{ ...AzirTheme, ...theme }} styles={styles && styles({ ...AzirTheme, ...theme })} />}</AzirContext.Consumer>;
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
  const { COLORS: CUSTOM_COLORS, SIZES: CUSTOM_SIZES, customTheme } = theme;
  const providerTheme = {
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
