import React, { useState, useEffect } from "react";
import Icon, { SolidIcons } from "azir-icon";
import Input from "./index";
import AzirTheme from "azir-theme";
export const InputDark = props => {
  const icon = props.icon;
  const _props = { ...props };
  delete _props.icon;
  return (
    <Input
      labelPosition="top"
      helpPosition="top"
      inputStyle={{ fontSize: 18, paddingHorizontal: 10, color: "#34495e" }}
      style={{ height: 55, paddingHorizontal: 0, backgroundColor: "#fff" }}
      containerStyle={{}}
      renderPasswordIcon={password => {
        return <Icon style={[{ backgroundColor: "#34495e", padding: 13 }, props.iconStyle]} icon={password ? SolidIcons.eye : SolidIcons.ellipsisHh} size={24} color="#ccc"></Icon>;
      }}
      icon={props.password ? null : <Icon style={[{ backgroundColor: "#34495e", padding: 13 }, props.iconStyle]} icon={icon} size={24} color="#ccc"></Icon>}
      {..._props}
    ></Input>
  );
};
export const InputMaterial = props => {
  const icon = props.icon;
  const color = props.color ? props.color : "#2196f3";
  const _props = { ...props };
  delete _props.icon;
  return (
    <Input
      labelPosition="top"
      helpPosition="top"
      labelStyle={{ color: color }}
      inputStyle={{ fontSize: 18, paddingHorizontal: 10, color: color }}
      style={{
        borderColor: color,
        borderBottomWidth: 2,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        height: 55,
        paddingHorizontal: 0,
        backgroundColor: "transparent"
      }}
      containerStyle={{}}
      renderPasswordIcon={password => {
        return <Icon style={[{ padding: 13 }, props.iconStyle]} icon={password ? SolidIcons.eye : SolidIcons.ellipsisHh} size={24} color={color}></Icon>;
      }}
      icon={props.password ? null : <Icon style={[{ padding: 13 }, props.iconStyle]} icon={icon} size={24} color={color}></Icon>}
      {..._props}
    ></Input>
  );
};

export const InputWebFlow = props => {
  const icon = props.icon ? props.icon : AzirTheme.SETTINGS.RTL ? SolidIcons.arrowLeft : SolidIcons.arrowRight;
  const color = props.color ? props.color : "#BFD2FF";
  const _props = { ...props };
  delete _props.icon;
  return (
    <Input
      labelPosition="top"
      helpPosition="top"
      labelStyle={{ color: color }}
      inputStyle={{ fontSize: 18, paddingHorizontal: 10, color: color }}
      style={{
        borderColor: "#59e3e6",
        borderBottomWidth: 3,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        height: 60,
        paddingHorizontal: 0,
        backgroundColor: "#363a4e"
      }}
      containerStyle={{}}
      renderPasswordIcon={password => {
        return <Icon style={[{ padding: 13 }, props.iconStyle]} icon={password ? SolidIcons.eye : SolidIcons.ellipsisHh} size={24} color={color}></Icon>;
      }}
      icon={props.password ? null : <Icon style={[{ padding: 13 }, props.iconStyle]} icon={icon} size={24} color={color}></Icon>}
      {..._props}
    ></Input>
  );
};
