import React, { useState, useEffect, useRef } from "react";
import { withAzir, getColorByName } from "azir-theme";
import { Animated, StyleSheet, PanResponder, View, Easing, I18nManager } from "react-native";

function Rect(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Rect.prototype.containsPoint = function(x, y) {
  return x >= this.x && y >= this.y && x <= this.x + this.width && y <= this.y + this.height;
};

const DEFAULT_ANIMATION_CONFIGS = {
  spring: {
    friction: 7,
    tension: 100
  },
  timing: {
    duration: 150,
    easing: Easing.inOut(Easing.ease),
    delay: 0
  }
};

const AzirSlider: React.FC<Props> = props => {
  const {
    value: _value,
    minimumValue,
    maximumValue,
    thumbTouchSize: _thumbTouchSize,
    disabled,
    step,
    theme,
    children,
    styles,
    style,
    trackStyle,
    thumbStyle,
    animationType,
    progressTrackColor,
    trackColor,
    thumbColor,
    trackSize: _trackSize,
    thumbSize: _thumbSize,
    icon,
    onStart,
    onChange,
    onComplete,
    ...rest
  } = props;

  const __thumbSize = _thumbSize ? _thumbSize : theme.SIZES.THUMB_SIZE;
  const thumbTouchSize = _thumbTouchSize ? _thumbTouchSize : { width: 20 + __thumbSize, height: 20 + __thumbSize };
  const [value, setValue] = useState(new Animated.Value(_value));
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [thumbSize, setThumbSize] = useState({ width: 0, height: 0 });
  const [panResponder, setPanResponder] = useState(null);
  const valueRef = useRef(value);
  valueRef.current = value;
  useEffect(() => {
    if (containerSize.width != 0 && thumbSize.width != 0) {
      setPanResponder(
        PanResponder.create({
          onStartShouldSetPanResponder: _handleStartShouldSetPanResponder,
          onMoveShouldSetPanResponder: _handleMoveShouldSetPanResponder,
          onPanResponderGrant: _handlePanResponderGrant,
          onPanResponderMove: _handlePanResponderMove,
          onPanResponderRelease: _handlePanResponderEnd,
          onPanResponderTerminationRequest: _handlePanResponderRequestEnd,
          onPanResponderTerminate: _handlePanResponderEnd
        })
      );
    }
  }, [containerSize, thumbSize]);

  useEffect(() => {
    setValue(new Animated.Value(_value))
  }, [_value])
  
  const _getValue = (gestureState: any) => {
    const length = containerSize.width - thumbSize.width;
    const thumbLeft = this._previousLeft + gestureState.dx;

    const nonRtlRatio = thumbLeft / length;
    const ratio = I18nManager.isRTL ? 1 - nonRtlRatio : nonRtlRatio;

    if (step) {
      return Math.max(minimumValue, Math.min(maximumValue, minimumValue + Math.round((ratio * (maximumValue - minimumValue)) / step) * step));
    }
    return Math.max(minimumValue, Math.min(maximumValue, ratio * (maximumValue - minimumValue) + minimumValue));
  };
  const _setCurrentValueAnimated = (value: number) => {
    const animationConfig = Object.assign({}, DEFAULT_ANIMATION_CONFIGS[animationType], animationConfig, {
      toValue: value
    });

    Animated[animationType](value, animationConfig).start();
  };
  const _setCurrentValue = _value => {
    setValue(new Animated.Value(_value));
  };
  const _getCurrentValue = () => valueRef.current.__getValue();
  const _getTouchOverflowSize = () => {
    var size = {};

    size.width = Math.max(0, thumbTouchSize.width - thumbSize.width);
    size.height = Math.max(0, thumbTouchSize.height - containerSize.height);

    return size;
  };
  const _getRatio = (__value: number) => (__value - minimumValue) / (maximumValue - minimumValue);

  const _getThumbLeft = (__value: number) => {
    const nonRtlRatio = _getRatio(__value);
    const ratio = I18nManager.isRTL ? 1 - nonRtlRatio : nonRtlRatio;
    return ratio * (containerSize.width - thumbSize.width);
  };

  const _getThumbTouchRect = () => {
    const touchOverflowSize = _getTouchOverflowSize();
    return new Rect(
      -20 + touchOverflowSize.width / 2 + _getThumbLeft(_getCurrentValue()) + (thumbSize.width - thumbTouchSize.width) / 2,
      touchOverflowSize.height / 2 + (containerSize.height - thumbTouchSize.height) / 2,
      thumbTouchSize.width,
      thumbTouchSize.height
    );
  };
  const _thumbHitTest = (e: Object) => {
    const nativeEvent = e.nativeEvent;
    const thumbTouchRect = _getThumbTouchRect();
    return thumbTouchRect.containsPoint(nativeEvent.locationX, nativeEvent.locationY);
  };
  const _handleStartShouldSetPanResponder = (e: Object /* gestureState: Object */): boolean => {
    return _thumbHitTest(e);
  };
  const _handlePanResponderRequestEnd = (e: Object, gestureState: Object) => {
    // Should we allow another component to take over this pan?
    return false;
  };
  const _handleMoveShouldSetPanResponder = (/* e: Object, gestureState: Object */): boolean => {
    // Should we become active when the user moves a touch over the thumb?
    return false;
  };
  ///end
  const renderIcon = () => {
    return icon;
  };
  const _handlePanResponderGrant = (/* e: Object, gestureState: Object */) => {
    this._previousLeft = _getThumbLeft(_getCurrentValue());

    onStart && onStart(_getCurrentValue());
    //this._fireChangeEvent("onSlidingStart");
  };

  const _handlePanResponderMove = (e: Object, gestureState: Object) => {
    if (disabled) {
      return;
    }
    _setCurrentValue(_getValue(gestureState));
    onChange && onChange(_getCurrentValue());
    //this._fireChangeEvent("onValueChange");
  };

  const _handlePanResponderEnd = (e: Object, gestureState: Object) => {
    if (disabled) {
      return;
    }
    onComplete && onComplete(_getCurrentValue());
  };

  const _measureContainer = (event: Object) => {
    const { width, height } = event.nativeEvent.layout;
    setContainerSize({ width: width, height: height });
  };

  const _measureThumb = (event: Object) => {
    const { width, height } = event.nativeEvent.layout;
    setThumbSize({ width: width, height: height });
  };

  const _renderDebugThumbTouchRect = thumbLeft => {
    const thumbTouchRect = _getThumbTouchRect();
    const positionStyle = {
      left: thumbTouchRect.x,
      top: thumbTouchRect.y,
      width: thumbTouchRect.width,
      height: thumbTouchRect.height
    };

    return <Animated.View style={[styles.debugThumbTouchArea, positionStyle]} pointerEvents="none" />;
  };

  const thumbLeft = value.interpolate({
    inputRange: [minimumValue, maximumValue],
    outputRange: I18nManager.isRTL ? [0, -(containerSize.width - thumbSize.width)] : [0, containerSize.width - thumbSize.width]
    // extrapolate: 'clamp',
  });

  const minimumTrackWidth = value.interpolate({
    inputRange: [minimumValue, maximumValue],
    outputRange: [0, containerSize.width - thumbSize.width]
    // extrapolate: 'clamp',
  });
  const minimumTrackStyle = {
    position: "absolute",
    width: Animated.add(minimumTrackWidth, thumbSize.width / 2),
    backgroundColor: getColorByName(progressTrackColor, theme.COLORS)
  };

  //end
  return (
    <View {...rest} style={[{ height: __thumbSize }, styles.container, style]} onLayout={_measureContainer}>
      <View
        style={[
          { backgroundColor: getColorByName(trackColor, theme.COLORS), height: _trackSize ? _trackSize : theme.SIZES.TRACK_SIZE, borderRadius: theme.SIZES.TRACK_SIZE / 2 },
          trackStyle
        ]}
        renderToHardwareTextureAndroid
      />
      <Animated.View
        renderToHardwareTextureAndroid
        style={[{ height: _trackSize ? _trackSize : theme.SIZES.TRACK_SIZE, borderRadius: theme.SIZES.TRACK_SIZE / 2 }, trackStyle, minimumTrackStyle]}
      />
      <Animated.View
        onLayout={_measureThumb}
        renderToHardwareTextureAndroid
        style={[
          {
            justifyContent: "center",
            alignItems: "center",
            width: __thumbSize ? __thumbSize : theme.SIZES.THUMB_SIZE,
            height: __thumbSize ? __thumbSize : theme.SIZES.THUMB_SIZE,
            borderRadius: __thumbSize ? __thumbSize : theme.SIZES.THUMB_SIZE / 2
          },
          { backgroundColor: getColorByName(thumbColor, theme.COLORS) },
          styles.thumb,
          thumbStyle,
          {
            transform: [{ translateX: thumbLeft }, { translateY: 0 }]
          }
        ]}
      >
        {icon && renderIcon()}
      </Animated.View>
      {panResponder && <View renderToHardwareTextureAndroid style={[styles.touchArea]} {...panResponder.panHandlers}></View>}
    </View>
  );
};

//Props Type ? for optional props
type Props = {
  styles: any;
  style: any;
  trackStyle: any;
  thumbStyle: any;
  value: number;
  progressTrackColor: string;
  trackColor: string;
  thumbColor: string;
  minimumValue: number;
  maximumValue: number;
  thumbTouchSize: any;
  icon: boolean;
  animationType: string;
  disabled: boolean;
  step: number;
  trackSize: number;
  thumbSize: number;
  onStart: any;
  onChange: any;
  onComplete: any;
};
//default props 4
AzirSlider.defaultProps = {
  progressTrackColor: "theme",
  trackColor: "#b3b3b3",
  thumbColor: "theme",
  value: 0,
  trackSize: 3,
  thumbSize: null,
  minimumValue: 0,
  maximumValue: 1,
  thumbTouchSize: null,
  icon: null,
  animationType: "timing",
  disabled: false,
  step: 0
};
const styles = theme =>
  StyleSheet.create({
    container: {
      //height: 40,
      justifyContent: "center"
    },
    thumb: {
      position: "absolute"
    },
    touchArea: {
      position: "absolute",
      backgroundColor: "transparent",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    },
    debugThumbTouchArea: {
      position: "absolute",
      backgroundColor: "green",
      opacity: 0.5
    }
  });

export default withAzir(AzirSlider, styles);
