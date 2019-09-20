# Azir Framwork list :  [https://azir.io/docs](https://azir.io/docs)

# Icon

A great component that give you the ability you to create your own custom icons .

> We give you a tool to generate and search for fontawsome icons directly. [Icons List](../../guides/fontawesomelist)

# Benefits

- Create you own custome icons which you can control the size of the font icon file.

- No bloatware, one package with one iconset, nothing more nothing less

- Full set of FontAwesome Icons properly updated

- Insanely fast with minimal memory footprint

<p align="center">
 <img src="https://i.imgur.com/GYK34HW.png" />
</p>

## Installation

to install the latest version of `azir-icon` you only need to run:

```bash
npm install azir-icon  --save
```

or

```bash
yarn add azir-icon
```

## Installation process

> Azir Theme using **[azir-font](https://drive.google.com/open?id=10f_C_DA3azuyF6myslkFQWF4jpxhFy5Z)** as a default font icons for all azir components Icons like **(Spinner,Radio, Switch, CheckBox, RadioGroup, CheckboxGroup )**, its required to load at least azir font into your app

```jsx
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "azir-font": require("./assets/fonts/azir-font.ttf")
    })
  ]);
}
```

Font Awesome Icons provide also three types of free icons set . you can download which type you want or even you can download them all if you want ;) in addtion You can create your own custom font..

**Create Custom Font Icons**

> you can use one of the online font icons generator like [Fontello](https://fontello.com/) which we are using in our custom font example.

| Type                     | Font Name(Required) | Download                                                                               | Size   |
| ------------------------ | ------------------- | -------------------------------------------------------------------------------------- | ------ |
| AzirIcons (**REQUIRED**) | azir-font           | [azir-font](https://drive.google.com/open?id=10f_C_DA3azuyF6myslkFQWF4jpxhFy5Z)        | 12 KB  |
| RegularIcons             | fa-regular-400      | [fa-regular-400](https://drive.google.com/open?id=1yq_sJ5le5S1S06msvaO6W16-9Oo7dXfa)   | 34 KB  |
| SolidIcons               | fa-solid-900        | [fa-solid-900](https://drive.google.com/open?id=18vQUn80hrR3lxTvB1toRE5Kf0pE37eif)     | 188 KB |
| BrandIcons               | fa-brands-400       | [fa-brands-400](https://drive.google.com/open?id=1qJQ0t9ZchUaikh3TYeuIjGQgS3wrjxEW)    | 127KB  |
| Custom Font              | custom-font-icon    | [custom-font-icon](https://drive.google.com/open?id=18reeFawb37lZrYh-yPNwqNW75ldhdSrc) | 10 KB  |

> next step is to load these fonts into your app , check below example if you are using expo .

```jsx
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "azir-font": require("./assets/fonts/azir-font.ttf"),
      "fa-solid-900": require("./assets/fonts/fa-solid-900.ttf"),
      "fa-regular-400": require("./assets/fonts/fa-solid-900.ttf"),
      "fa-brands-400": require("./assets/fonts/fa-brands-400.ttf"),
      "custom-font-icon": require("./assets/fonts/custom-font-icon.ttf") // if you want to use Custom font. you can change the name of the font and the file as you want ( only for custom font icon)
    })
  ]);
}
```

> if you want to use your custom font icons, you need to do one extra step to map your fonts icons and inject them to our Dictionary . which is an easy step .

- Create new javascript file ( for example CustomIcons.js)

- Export your icons object and make sure that you include in the first element : **\_fontFamily: "custom-font-icon"** the same name as you used in Font.loadAsync.

- dont forget to add **\u** before each icon code. also icons name should be **camel case**.

```jsx
export default CustomIcons = {
  _fontFamily: "custom-font-icon",
  unHappy: "\uE802",
  wink: "\uE813",
  fireStation: "\uE817",
  rss: "\uE800",
  githubCircled: "\uE801",
  sound: "\uE804",
  jabber: "\uF317"
};
```

### That's it!

**Examples**

#### Font Awesome Icons :

```jsx
import Icon, { SolidIcons, RegularIcons, BrandIcons } from "azir-icon";
---
<Icon icon={SolidIcons.appleAlt} color="#ff9900" style={ {
    padding: 15, textShadowColor: "#ff0000",
    textShadowOffset: { width: -1, height: -1 },
    textShadowRadius: 2
    } } />
<Icon icon={RegularIcons.bellSlash} style={ { padding: 15, fontSize: 30 } } />
<Icon icon={BrandIcons.amazonPay} color="success" size={100} shadow style={ { padding: 15 } } />
```

<img src="https://i.imgur.com/eX6sk3B.jpg" alt="Basic" style="width:150px" />

#### Custom Font icons :

```jsx
import Icon from "azir-icon";
import CustomIcons from "./CustomIcons";//check above code of this object
---
<Icon icon={CustomIcons.unHappy} style={ { padding: 15, fontSize: 30 } } />
<Icon icon={CustomIcons.fireStation} style={ { padding: 15, fontSize: 30 } } />
<Icon icon={CustomIcons.sound} style={ { padding: 15, fontSize: 30 } } />
<Icon icon={CustomIcons.jabber} style={ { padding: 15, fontSize: 30 } } />
```

<img src="https://i.imgur.com/qoXCiT8.jpg" alt="Basic" style="width:150px" />

### Props

- [`icon`](icon#icon)
- [`color`](icon#color)
- [`size`](icon#size)
- [`shadow`](icon#shadow)
- [`style`](icon#style)

---

# Reference

### `icon`

set the Icon using one of the fontawsome free icons set.

| Type                                               | Required | Default          |
| -------------------------------------------------- | -------- | ---------------- |
| SolidIcons, RegularIcons, BrandIcons , CustomIcons | YES      | SolidIcons.smile |

### `color`

color of the Icon

| Type                                       | Required | Default |
| ------------------------------------------ | -------- | ------- |
| [azir-color](../../guides/color-reference) | No       | theme   |

### `size`

set the size of the icon , you can instead of using the size prop, you just override the style prop.

| Type   | Required | Default                   |
| ------ | -------- | ------------------------- |
| Number | No       | AzirTheme.SIZES.ICON_SIZE |

### `shadow`

If true, show shadow effect for this component.

| Type | Required | Default |
| ---- | -------- | ------- |
| bool | No       | false   |

### `style`

override Icon style,since we are using text to render icon then you can use all react native text props

| Type  | Required |
| ----- | -------- |
| style | No       |
