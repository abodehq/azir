import React from "react";
import { View } from "react-native";
import Icon, { SolidIcons } from "be-icon";

const renderFlashMessageIcon = (icon: any, style = {}, customProps = {}) => {
  switch (icon) {
    case "success":
      return (
        <View style={style}>
          <Icon color="#fff" icon={SolidIcons.check} size={30} style={{ ...customProps }} />
        </View>
      );

    case "info":
      return (
        <View style={style}>
          <Icon color="#fff" icon={SolidIcons.info} size={30} style={{ ...customProps }} />
        </View>
      );
    case "warning":
      return (
        <View style={style}>
          <Icon color="#fff" icon={SolidIcons.exclamation} size={30} style={{ ...customProps }} />
        </View>
      );
    case "error":
      return (
        <View style={style}>
          <Icon color="#fff" icon={SolidIcons.times} size={30} style={{ ...customProps }} />
        </View>
      );
    default:
      return <View style={style}>{icon ? React.cloneElement(icon) : null}</View>;
  }
};
export default renderFlashMessageIcon;
