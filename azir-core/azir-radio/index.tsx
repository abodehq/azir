import RadioGroup from "./radio-group";
import CheckboxGroup from "./check-box-group";
import Radio from "./radio";
import React from "react";
import AzirTheme from "azir-theme";
const CheckBox = props => {
  return <Radio type="square" {...props} />;
};
const Switch = props => {
  return <Radio hideIconBorder={true} size={AzirTheme.SIZES.SWITCH_SIZE} hideInActiveIcon={false} iconActive={AzirTheme.STRINGS.SWITCH_ICON_ON} iconInActive={AzirTheme.STRINGS.SWITCH_ICON_OFF} {...props} />;
};
//import CheckBox from "./radio";

export { Radio, CheckBox, Switch, RadioGroup, CheckboxGroup };
