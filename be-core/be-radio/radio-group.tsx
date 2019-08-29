import React, { useState } from "react";

import { StyleSheet, View } from "react-native";

import { withLC } from "be-theme";

const LcRadioGroup: React.FC<Props> = props => {
  const { styles, style, flexDirection, children, onChange } = props;
  const [options, setOptions] = useState(props.options);
  const _onChange = event => {
    const _options = [...options];
    for (var i = 0; i < _options.length; i++) {
      var radio = _options[i];
      if (radio.id == event.id) {
        if (!radio.checked) radio.checked = true;
      } else {
        radio.checked = false;
      }
    }
    setOptions(_options);
    onChange && onChange({ target: event, options: _options });
  };

  const containerStyles = [styles.container];
  flexDirection && containerStyles.push({ flexDirection: flexDirection });
  style && containerStyles.push(style);
  const listItems = options.map(option => {
    const radio = React.cloneElement(
      children as React.ReactElement<any>,
      {
        key: option.id,
        id: option.id,
        value: option.value,
        checked: option.checked,
        onChange: _onChange,
        inGroup: true
      },
      option.value
    );
    return radio;
  });

  return <View style={containerStyles}>{listItems}</View>;
};
interface IOptions {
  id: string;
  value: string;
  checked: boolean;
  disabled: boolean;
}
type Props = {
  options: IOptions[];
  styles: any;
  style: any;
  flexDirection: "row" | "row-reverse" | "column" | "column-reverse";
  onChange: any;
};
LcRadioGroup.defaultProps = {
  options: [],
  flexDirection: "row"
};
const styles = theme =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start"
    }
  });
export default withLC(LcRadioGroup, styles);
