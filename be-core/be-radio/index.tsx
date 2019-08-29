import RadioGroup from "./radio-group";
import CheckboxGroup from "./check-box-group";
import Radio from "./radio";
import React, { useState } from "react";
import { SolidIcons } from "be-icon";
const CheckBox = props => {
  return <Radio type="square" {...props} />;
};
const Switch = props => {
  return <Radio hideIconBorder={true} hideInActiveIcon={false} size={40} iconActive={SolidIcons.toggleOn} iconInActive={SolidIcons.toggleOff} {...props} />;
};
//import CheckBox from "./radio";

export { Radio, CheckBox, Switch, RadioGroup, CheckboxGroup };
