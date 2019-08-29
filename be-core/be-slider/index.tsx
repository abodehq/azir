import React, { PureComponent, useState } from "react";
import { View, Animated, StyleSheet, PanResponder } from "react-native";
import PropTypes from "prop-types";
import LCTheme, { withLC } from "be-theme";
const LcSlider: React.FC<Props> = props => {
  const { step, value, styles, minimumValue, maximumValue, trackStyle, thumbStyle, activeColor, disabled } = props;
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [trackSize, setTrackSize] = useState({ width: 0, height: 0 });
  const [thumbSize, setThumbSize] = useState({ width: 0, height: 0 });
  const [measured, setMeasured] = useState(false);
  const position: any = new Animated.Value(value);
  let _previousLeft = 0;
  const _panResponder = PanResponder.create({
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderGrant: (e, gestureState) => {
      _previousLeft = _getThumbLeft(_getCurrentVal());
      _fireChangeEvent("onSlidingStart");
    },
    onPanResponderMove: (e, gestureState) => {
      if (disabled) {
        return;
      }

      _setCurrentValue(_getValue(gestureState));
      _fireChangeEvent("onValueChange");
    },
    onPanResponderRelease: (e, gestureState) => {
      if (disabled) {
        return;
      }

      _setCurrentValue(_getValue(gestureState));
      _fireChangeEvent("onSlidingComplete");
    }
  });

  const _getRatio = value => (value - minimumValue) / (maximumValue - minimumValue);

  const _getThumbLeft = value => _getRatio(value) * (containerSize.width - thumbSize.width);

  const _getCurrentVal = () => position.__getValue();

  const _setCurrentValue = value => position.setValue(value);

  const _fireChangeEvent = event => {
    if (props[event]) {
      props[event](_getCurrentVal());
    }
  };
  const _getValue = gestureState => {
    const length = containerSize.width - thumbSize.width;
    const thumbLeft = _previousLeft + gestureState.dx;

    const ratio = thumbLeft / length;

    if (step) {
      return Math.max(minimumValue, Math.min(maximumValue, minimumValue + Math.round((ratio * (maximumValue - minimumValue)) / step) * step));
    }
    return Math.max(minimumValue, Math.min(maximumValue, ratio * (maximumValue - minimumValue) + minimumValue));
  };
  const _measureContainer = x => {
    _handleMeasure("containerSize", x);
  };
  // track size
  const _measureTrack = x => {
    _handleMeasure("trackSize", x);
  };
  // thumb size
  const _measureThumb = x => {
    _handleMeasure("thumbSize", x);
  };
  const _handleMeasure = (name, x) => {
    const { width, height } = x.nativeEvent.layout;
    const size = { width, height };

    const storeName = `_${name}`;
    const currentSize = this[storeName];
    if (currentSize && width === currentSize.width && height === currentSize.height) {
      return;
    }
    this[storeName] = size; // initialize a new var with the current sizes

    if (this._containerSize && this._trackSize && this._thumbSize) {
      setContainerSize(this._containerSize);
      setTrackSize(this._trackSize);
      setThumbSize(this._thumbSize);
      setMeasured(true);
    }
  };
  const thumbLeft = position.interpolate({
    inputRange: [minimumValue, maximumValue],
    outputRange: [0, containerSize.width - thumbSize.width]
  });

  const minimumTrackWidth = position.interpolate({
    inputRange: [minimumValue, maximumValue],
    outputRange: [0, containerSize.width - thumbSize.width]
  });

  let visibleStyle: any = {};
  if (!measured) visibleStyle.opacity = 0;

  const minimumTrackStyle = {
    position: "absolute",
    width: Animated.add(minimumTrackWidth, thumbSize.width / 2),
    backgroundColor: activeColor || LCTheme.COLORS.PRIMARY,
    ...visibleStyle
  };

  const containerStyles = [styles.container, styles];
  return (
    <View style={containerStyles} onLayout={_measureContainer}>
      <View renderToHardwareTextureAndroid style={[styles.track, trackStyle]} onLayout={_measureTrack} />
      <Animated.View renderToHardwareTextureAndroid style={[styles.track, minimumTrackStyle]} />
      <Animated.View
        renderToHardwareTextureAndroid
        style={[
          styles.thumb,
          thumbStyle,
          disabled && styles.disabled,
          {
            transform: [{ translateX: thumbLeft }, { translateY: 0 }],
            ...visibleStyle
          }
        ]}
        {..._panResponder.panHandlers}
        onLayout={_measureThumb}
      />
    </View>
  );
};

type Props = {
  activeColor: string;
  value: number;
  disabled: boolean;
  step: number;
  minimumValue: number;
  maximumValue: number;
  trackStyle: any;
  thumbStyle: any;
  styles: any;
};
LcSlider.defaultProps = { value: 0, disabled: false, step: 0, minimumValue: 0, maximumValue: 100, trackStyle: {}, thumbStyle: {} };
const styles = theme =>
  StyleSheet.create({
    container: {
      height: 40,
      justifyContent: "center"
    },
    track: {
      height: theme.SIZES.TRACK_SIZE,
      width: "100%",
      borderRadius: theme.SIZES.TRACK_SIZE / 2,
      position: "absolute",
      backgroundColor: theme.COLORS.GREY
    },
    thumb: {
      width: theme.SIZES.THUMB_SIZE,
      height: theme.SIZES.THUMB_SIZE,
      borderRadius: theme.SIZES.THUMB_SIZE / 2,
      borderWidth: 2,
      borderColor: theme.COLORS.PRIMARY,
      backgroundColor: theme.COLORS.WHITE
    },
    disabled: {
      backgroundColor: theme.COLORS.MUTED
    },
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
export default withLC(LcSlider, styles);
