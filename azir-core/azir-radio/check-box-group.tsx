import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { withAzir } from "azir-theme";

const LcCheckboxGroup: React.FC<Props> = props => {
  const { styles, style, flexDirection, children, onChange } = props;
  const [options, setOptions] = useState(props.options);
  const _onChange = event => {
    const _options = [...options];
    for (var i = 0; i < _options.length; i++) {
      var radio = _options[i];
      if (radio.id == event.id) {
        radio.checked = !radio.checked;
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
        disabled: option.disabled,
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
LcCheckboxGroup.defaultProps = {
  options: [],
  flexDirection: null
};
const styles = theme =>
  StyleSheet.create({
    container: {
      flexDirection: theme.SETTINGS.RTL ? "row-reverse" : "row",
      alignItems: "center",
      flexWrap: "wrap",
      justifyContent: "flex-start"
    }
  });
export default withAzir(LcCheckboxGroup, styles);
