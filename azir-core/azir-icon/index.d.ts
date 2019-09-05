declare module "lc-icon" {
  import React from "react";
  import { TextProperties } from "react-native";
  export { SolidIcons, RegularIcons, BrandIcons, parseIconFromClassName } from "@lockcommerce/FontAwesomeIcons";
  const Icon: React.ComponentClass<TextProperties>;
  export default Icon;
}
