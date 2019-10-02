import React, { useState, useEffect } from "react";
import { StyleSheet, Animated, Text, View, TouchableOpacity } from "react-native";
import { withAzir, colorsProps, getColorByName, getSize } from "azir-theme";
import Icon from "azir-icon";

const RenderStars = (props, position, setPosition) => {
  const {onChange,theme,disabled,starContainerStyle,icon, activeColor,inActiveColor, count, size: _size,scaleSize:_scaleSize, showAnimation, showScaleEffect } = props;
  const size = getSize(_size);
  const scaleSize = getSize(_scaleSize);
  const [value, setValue] = useState(new Animated.Value(size));
  useEffect(() => {
    if (showScaleEffect)
      Animated.spring(value, {
        toValue: scaleSize,
        friction: 2,
        tension: 1
      }).start(); // < Don't forget to start!
  }, [value]);

  const onPressStar = _position => {
    if (showAnimation) setValue(new Animated.Value(size));
    //startSpring();
    if (position != _position)
    { 
      onChange && onChange(_position,position)
      setPosition(_position);
    }
  };
  var countArray = [];
  for (var i = 0; i < count; i++) {
    countArray.push(i);
  }
  const AnimatedIcon = Animated.createAnimatedComponent(Icon);
  return (
    <React.Fragment>
      {countArray.map(function(item, index) {
        return (
          <TouchableOpacity disabled={disabled} style={[{  paddingHorizontal : 3},starContainerStyle]} key={index} onPress={() => onPressStar(index)}>
            <AnimatedIcon size={index == position ? value : size} icon={icon} style={{ color: index <= position ? getColorByName(activeColor ,theme.COLORS) :getColorByName(inActiveColor ,theme.COLORS)  }} />
          </TouchableOpacity>
        );
      })}
    </React.Fragment>
  );
};
const AzirRating: React.FC<Props> = props => {
  const { theme,style, styles,containerStyle,reviewStyle, rating, reviews, count, showRatingReview, reviewColor, reviewSize, shadow, ...rest } = props;
  const [position, setPosition] = useState(rating);
  return (
    <View style={[styles.ratingContainer,style]}>
      {showRatingReview && <Text style={[styles.reviewText, { fontSize: reviewSize, color: getColorByName(reviewColor ,theme.COLORS)  },reviewStyle]}>{reviews[position]}</Text>}
      <View style={[styles.starContainer,containerStyle]}>{RenderStars(props, position, setPosition)}</View>
    </View>
  );
};

//Props Type ? for optional props
type Props = {
  count: number;
  activeColor: string | "primary" | "theme" | "error" | "warning" | "success" | "info" | "transparent";
  inActiveColor: string | "primary" | "theme" | "error" | "warning" | "success" | "info" | "transparent";
  reviewColor: string | "primary" | "theme" | "error" | "warning" | "success" | "info" | "transparent";
  size: string | number;
  scaleSize: number;
  rating: number;
  reviews: string[];
  styles: any;
  style: any;
  contentStyle: any;
  showRatingReview: boolean;
  reviewSize: number;
  showAnimation: boolean;
  showScaleEffect: boolean;
  shadow: boolean;
  icon:string;
  containerStyle:any;
  starContainerStyle:any;
  reviewStyle :any;
  disabled:boolean;
  onChange:any,
};
//default props 4
AzirRating.defaultProps = {
  activeColor: "theme",
  inActiveColor: "#BDC3C7",
  reviewColor:"theme",
  size: 25,
  scaleSize: 40,
  rating: 2,
  reviews: ["Terrible", "Bad", "Okay", "Good", "Great"],
  reviewSize: 25,
  count: 5,
  showRatingReview: true,
  shadow: false,
  showAnimation: true,
  showScaleEffect: true,
  icon:"\uE814|azir",
  containerStyle:null,
  starContainerStyle : null,
  style : null,
  reviewStyle:null,
  disabled:false,
  onChange : null
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
      justifyContent: "center",
    
    },
    ...colorsProps
  });

export default withAzir(AzirRating, styles);
