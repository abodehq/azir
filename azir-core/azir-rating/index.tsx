import React, { useState, useEffect } from "react";
import { StyleSheet, Animated, Text, View, Image, TouchableOpacity } from "react-native";
import { withAzir, colorsProps, getColorByName, getSize } from "azir-theme";
import Icon, { SolidIcons } from "azir-icon";

const RenderStars = (props, position, setPosition) => {
  const { count } = props;
  const [value, setValue] = useState(new Animated.Value(25));
  useEffect(() => {
    console.log("called");
    Animated.spring(value, {
      toValue: 32,
      friction: 2,
      tension: 1
    }).start(); // < Don't forget to start!
  }, [value]);
  const startSpring = () => {
    Animated.spring(value, {
      toValue: 32,
      friction: 2,
      tension: 1
    }).start();
  };
  const onPressStar = _position => {
    setValue(new Animated.Value(25));
    //startSpring();
    if (position != _position) setPosition(_position);
  };
  var countArray = [];
  for (var i = 0; i < count; i++) {
    countArray.push(i);
  }
  const stars = [];
  const AnimatedIcon = Animated.createAnimatedComponent(Icon);
  return (
    <React.Fragment>
      {countArray.map(function(item, index) {
        return (
          <TouchableOpacity key={index} onPress={() => onPressStar(index)}>
            <AnimatedIcon size={index == position ? value : 25} icon={SolidIcons.star} style={{ color: index <= position ? "red" : "#BDC3C7" }} />
          </TouchableOpacity>
        );
      })}
    </React.Fragment>
  );
};
const AzirRating: React.FC<Props> = props => {
  const { theme, styles, defaultRating, reviews, count, showRating, reviewColor, reviewSize, shadow, ...rest } = props;
  const [position, setPosition] = useState(3);

  return (
    <View style={styles.ratingContainer}>
      {showRating && <Text style={[styles.reviewText, { fontSize: reviewSize, color: reviewColor }]}>{reviews[position]}</Text>}
      <View style={[styles.starContainer]}>{RenderStars(props, position, setPosition)}</View>
    </View>
  );
};

//Props Type ? for optional props
type Props = {
  defaultRating: number;
  reviews: string[];
  styles: any;
  style: any;
  contentStyle: any;
  count: number;
  showRating: boolean;
  reviewColor: string;
  reviewSize: number;
  shadow: boolean;
};
//default props 4
AzirRating.defaultProps = {
  defaultRating: 3,
  reviews: ["Terrible", "Bad", "Okay", "Good", "Great"],
  count: 5,
  showRating: true,
  reviewColor: "rgba(230, 196, 46, 1)",
  reviewSize: 25,
  shadow: false
};
//component stylesheet
const styles = theme =>
  StyleSheet.create({
    ratingContainer: {
      backgroundColor: "transparent",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },
    reviewText: {
      fontWeight: "bold",
      margin: 10
    },
    starContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"
    },
    ...colorsProps
  });

export default withAzir(AzirRating, styles);
