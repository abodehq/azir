import React from "react";
import PropTypes from "prop-types";

// import COLORS & SIZES
import LC_COLORS from "./colors";
import LC_SIZES from "./sizes";
import LC_Settings from "./settings";
// default theme with COLORS & SIZES
const LCTheme = {
  SETTINGS: LC_Settings,
  COLORS: LC_COLORS,
  SIZES: LC_SIZES
};

export default LCTheme;

// creating the LCTheme context
const LCContext = React.createContext();

/*
 *   withLC
 *   args: Component - React Component, styles to be added to Component
 *   theme: if no styles or theme add default theme={ SIZES, COLORS }
 */

export function withLC(Component, styles) {
  // eslint-disable-next-line react/no-multi-comp
  return class extends React.Component {
    render() {
      const { props } = this;
      return (
        <LCContext.Consumer>
          {theme => (
            <Component
              {...props}
              theme={{ ...LCTheme, ...theme }}
              styles={styles && styles({ ...LCTheme, ...theme })}
            />
          )}
        </LCContext.Consumer>
      );
    }
  };
}

/*
 *   LCProvider using React.Component
 *   LCContext.Provider value has the default value from { COLORS, SIZES }
 */

// eslint-disable-next-line react/no-multi-comp
export class LCProvider extends React.Component {
  static defaultProps = {
    children: null,
    theme: {}
  };

  render() {
    const { theme, children } = this.props;
    const { COLORS: CUSTOM_COLORS, SIZES: CUSTOM_SIZES, customTheme } = theme;

    const providerTheme = {
      COLORS: { ...LCTheme.COLORS, ...CUSTOM_COLORS },
      SIZES: { ...LCTheme.SIZES, ...CUSTOM_SIZES },
      ...customTheme
    };

    return (
      <LCContext.Provider value={providerTheme}>{children}</LCContext.Provider>
    );
  }
}

LCProvider.propTypes = {
  children: PropTypes.any,
  theme: PropTypes.any
};
