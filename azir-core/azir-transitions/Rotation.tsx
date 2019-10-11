import React, { Component, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Animated, { Easing } from "react-native-reanimated";

import AzirTheme, { withAzir } from "azir-theme";

import { SolidIcons } from "azir-icon";
const { set, cond, startClock, stopClock, clockRunning, block, timing, debug, Value, Clock, divide, concat } = Animated;

const runTiming = (clock, value, dest) => {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0)
  };

  const config = {
    duration: 1000,
    toValue: new Value(0),
    easing: Easing.inOut(Easing.linear)
  };

  return block([
    cond(clockRunning(clock), 0, [set(state.finished, 0), set(state.time, 0), set(state.position, value), set(state.frameTime, 0), set(config.toValue, dest), startClock(clock)]),
    timing(clock, state, config),
    cond(state.finished, stopClock(clock)),
    cond(state.finished, [set(state.finished, 0), set(state.time, 0), set(state.position, value), set(state.frameTime, 0), set(config.toValue, dest), startClock(clock)]),

    //cond(state.finished, runTiming(new Clock(), 0, 360)),
    state.position
  ]);
};

const AzirTotaion: React.FC<Props> = props => {
  const { styles, children } = props;
  const [trans, setTrans] = useState(null);
  useEffect(() => {
    setTrans(runTiming(new Clock(), 0, 360));
  }, []);

  return <View style={styles.container}>{trans != null && <Animated.View style={[styles.box, { transform: [{ rotate: concat(trans, "deg") }] }]}>{children}</Animated.View>}</View>;
};
//this.trans = runTiming(new Clock(), 0, 360);
type Props = {
  style: any;
  color?: string | "primary" | "theme" | "error" | "warning" | "success" | "transparent"; //use theme color
  size: number;
  icon: any;
  transform?: object;
  styles: any;
};
AzirTotaion.defaultProps = { color: "primary", size: 25, icon: SolidIcons.smile };
const BOX_SIZE = 100;
const styles = theme =>
  StyleSheet.create({
    container: {
      //flex: 1,
      justifyContent: "center",
      alignItems: "center"
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
export default withAzir(AzirTotaion, styles);
