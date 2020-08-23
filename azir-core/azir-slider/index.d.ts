declare module "azir-slider" {
  import { ComponentClass } from "react";

  import { ImageSourcePropType, StyleProp, ViewStyle } from "react-native";

  interface ISliderProps {
    /**
     * Initial value of the slider. The value should be between minimumValue
     * and maximumValue, which default to 0 and 1 respectively.
     * Default value is 0.
     *
     * *This is not a controlled component*, e.g. if you don't update
     * the value, the component won't be reset to its initial value.
     */
    value?: number;

    /**
     * If true the user won't be able to move the slider.
     * Default value is false.
     */
    disabled?: boolean;

    /**
     * Initial minimum value of the slider. Default value is 0.
     */
    minimumValue?: number;

    /**
     * Initial maximum value of the slider. Default value is 1.
     */
    maximumValue?: number;

    /**
     * Step value of the slider. The value should be between 0 and
     * (maximumValue - minimumValue). Default value is 0.
     */
    step?: number;

    /**
     * Color of the track.
     */
    trackColor?: string;

    /**
     * Color of the progressed track.
     */
    progressTrackColor?: string;

    /**
     * The color used for the thumb.
     */
    thumbColor?: string;

    /**
     * Step the height of the track.
     */
    trackSize?: number;

    /**
     * Step the size of the thumb.
     */
    thumbSize?: number;
    /**
     * The size of the touch area that allows moving the thumb.
     * The touch area has the same center has the visible thumb.
     * This allows to have a visually small thumb while still allowing the user
     * to move it easily.
     * The default is {width: 40, height: 40}.
     */
    thumbTouchSize?: { width: number; height: number };

    /**
     * Callback continuously called while the user is dragging the slider.
     */
    onChange?: (value: number) => void;

    /**
     * Callback called when the user starts changing the value (e.g. when
     * the slider is pressed).
     */
    onStart?: (value: number) => void;

    /**
     * Callback called when the user finishes changing the value (e.g. when
     * the slider is released).
     */
    onComplete?: (value: number) => void;

    /**
     * The style applied to the slider container.
     */
    style?: StyleProp<ViewStyle>;

    /**
     * The style applied to the track.
     */
    trackStyle?: StyleProp<ViewStyle>;

    /**
     * The style applied to the thumb.
     */
    thumbStyle?: StyleProp<ViewStyle>;

    /**
     * Sets an image for the thumb.
     */
    icon?: ImageSourcePropType;
  }

  const Slider: ComponentClass<ISliderProps>;

  export default Slider;
}
