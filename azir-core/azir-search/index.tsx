import React, { useRef, useState } from "react";
import { StyleSheet, View, TouchableOpacity, I18nManager, ActivityIndicator } from "react-native";
import { withAzir, colorsProps, getColorByName } from "azir-theme";
import Icon, { AzirIcons } from "azir-icon";
import Input from "azir-input";

const AzirSearch: React.FC<Props> = props => {
  const {
    onFocus: _onFocus,
    onBlur: _onBlur,
    onClear: _onClear,
    onChangeText: _onChangeText,
    onCancel: _onCancel,
    styles,
    searchStyle,
    theme,
    shadow,
    children,
    value,
    searchIcon,
    cancelIcon,
    clearIcon,
    showCancel,
    showClear,
    showLoading,
    startIconStyle,
    endIconStyle,
    loadingColor,
    loadingSize,
    ...rest
  } = props;
  const [empty, setEmpty] = useState(value === "");
  const [focus, setFocus] = useState(false);
  const inputEl = useRef(null);
  const clear = () => {
    inputEl.current.clear();
    onChangeText("");
    _onClear && _onClear();
  };

  const cancel = () => {
    inputEl.current.blur();
    _onCancel && _onCancel();
  };

  const onFocus = () => {
    setFocus(true);
    _onFocus && _onFocus();
  };

  const onBlur = () => {
    setFocus(false);
    _onBlur && _onBlur();
  };

  const onChangeText = text => {
    setEmpty(text === "");
    _onChangeText && _onChangeText();
  };

  return (
    <View style={StyleSheet.flatten([styles.container, searchStyle])}>
      <Input
        inputRef={inputEl}
        startIcon={
          focus && showCancel ? (
            <TouchableOpacity onPress={cancel}>
              {cancelIcon ? cancelIcon : <Icon icon={I18nManager.isRTL ? theme.STRINGS.SEARCH_ARROW_RIGHT : theme.STRINGS.SEARCH_ARROW_LEFT} size={20} style={startIconStyle} />}
            </TouchableOpacity>
          ) : (
            theme.STRINGS.SEARCH
          )
        }
        endIcon={
          showLoading ? (
            <ActivityIndicator key="loading" color={getColorByName(loadingColor, theme.COLORS)} size={loadingSize} />
          ) : empty ? null : (
            <TouchableOpacity onPress={clear}>
              {showClear ? clearIcon ? clearIcon : <Icon icon={theme.STRINGS.SEARCH_CLEAR} size={22} style={endIconStyle} /> : null}
            </TouchableOpacity>
          )
        }
        onFocus={onFocus}
        onBlur={onBlur}
        onChangeText={onChangeText}
        {...rest}
      />
    </View>
  );
};

//Props Type ? for optional props
type Props = {
  value: string;
  onClear: any;
  onFocus: any;
  onBlur: any;
  onChangeText: any;
  onCancel: any;
  shadow: boolean;
  searchStyle: any;
  styles: any;
  searchIcon: any;
  cancelIcon: any;
  clearIcon: any;
  showCancel: boolean;
  showClear: boolean;
  showLoading: boolean;
  startIconStyle: any;
  endIconStyle: any;
  loadingColor: string | "primary" | "theme" | "error" | "warning" | "success" | "info" | "transparent";
  loadingSize: number | "small" | "large";
};
//default props 4
AzirSearch.defaultProps = {
  value: "",
  searchIcon: null,
  cancelIcon: null,
  clearIcon: null,
  shadow: false,
  showCancel: true,
  showClear: true,
  showLoading: false,
  startIconStyle: null,
  endIconStyle: null,
  loadingColor: "theme"
};
//component stylesheet
const styles = theme =>
  StyleSheet.create({
    container: {
      padding: 8,
      backgroundColor: theme.COLORS.GRAY
    },
    inputContainer: {
      paddingHorizontal: 0
    },
    ...colorsProps
  });

export default withAzir(AzirSearch, styles);
