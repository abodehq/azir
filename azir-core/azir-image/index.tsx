import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { withAzir, colorsProps, getColorByName, getSize } from "azir-theme";
import Icon, { AzirIcons } from "azir-icon";
import { Rotation } from "azir-transitions";

const resizeComponent = (value, per) => {
  return value - value * (per / 100);
};
const AzirImage: React.FC<Props> = props => {
  const { theme, width, height: _height, shadow, children, color, rounded, contentColor, style, styles, icon, source, title, size: _size, contentStyle, ...rest } = props;
  console.log("start");

  const [size, setSize] = useState({ width: null, height: null });
  useEffect(() => {
    if (_height == "auto")
      Image.getSize(
        "https://d1rkccsb0jf1bk.cloudfront.net/products/100034641/main/large/syxb101_Original2.jpg",
        (width, height) => {
          setSize({ width: width, height: height });
        },
        err => {
          console.log(err.code);
        }
      );
  }, []);
  if (size.height == null) return null;

  const height = _height == "auto" ? (width * size.height) / size.width : _height ? _height : width;
  if (size.width) {
    return (
      <Image style={[styles.img, { height: height, width: width }]} source={{ uri: "https://d1rkccsb0jf1bk.cloudfront.net/products/100034641/main/large/syxb101_Original2.jpg" }} />
    );
  }
  return (
    <View style={{ justifyContent: "center", alignItems: "center", alignContent: "center", width: width, height: height }}>
      <Rotation>
        <Icon color={"#eeeeeecc"} icon={AzirIcons.spin2} />
      </Rotation>
    </View>
  );
};

//Props Type ? for optional props
type Props = {
  color: string | "primary" | "theme" | "error" | "warning" | "success" | "info" | "transparent";
  contentColor: string | "primary" | "theme" | "error" | "warning" | "success" | "info" | "transparent";
  styles: any;
  style: any;
  contentStyle: any;
  icon: any;
  source: any;
  width: number;
  height: number | string;
  size: "small" | "medium" | "large" | "xlarge" | number;
  rounded: boolean;
  title: string;
  shadow: boolean;
};
//default props 4
AzirImage.defaultProps = {
  color: "theme",
  contentColor: "white",
  icon: null,
  source: null,
  size: null,
  rounded: true,
  title: null,
  contentStyle: null,
  shadow: false,
  width: null,
  height: "auto"
};
//component stylesheet
const styles = theme =>
  StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center"
    },
    title: {
      backgroundColor: "transparent",
      textAlign: "center"
    },
    ...colorsProps
  });

export default withAzir(AzirImage, styles);
