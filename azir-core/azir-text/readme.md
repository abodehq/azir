# Azir Framwork :  [https://azir.io/docs](https://azir.io/docs)

# Text

An advance Text component for displaying text. Azir Text supports nesting, styling, and touch handling.

> we have also add Pixel–perfect, native–looking [Typographic styles](texttypography) for React Native.

<p align="center">
 <img src="https://i.imgur.com/jUQLsA2.jpg" />
</p>

## Installation

to install the latest version of `azir-text` you only need to run:

```bash
npm install azir-text  --save
```

or

```bash
yarn add azir-text
```

> We provide a series of predefined collections for you to start with that match the native design systems for iOS and Android. You can use them directly wherever you would supply a textStyle. [Text Typography](texttypography)

**Examples**

#### Example

```jsx
import Text from "azir-text";
---
<Text
    h1
    italic
    bold
    center
    color="error"
    style={ { textDecorationLine: "underline" } }
    onPress={() => {
        console.log("Text Pressed");
    }}
    >
    I am bold & <Text color="success">Green</Text>
</Text>
```

<img src="https://i.imgur.com/yqJZHzb.jpg" alt="Basic" style="width:250px" />

### Props

- [`color`](text#color)
- [`bold`](text#bold)
- [`italic`](text#italic)
- [`center`](text#center)
- [`size`](text#size)
- [`style`](text#style)

---

# Reference

### `color`

Text Color

| Type                                       | Required | Default |
| ------------------------------------------ | -------- | ------- |
| [azir-color](../../guides/color-reference) | No       | theme   |

### `Azir Text Sizes`

> you can pass any of these text sizes props., typography styles have more priority than these props.

| Prop | type    | Default                           |
| ---- | ------- | --------------------------------- |
| h1   | boolean | Sets the text's fontSize to 44px. |
| h2   | boolean | Sets the text's fontSize to 38px. |
| h3   | boolean | Sets the text's fontSize to 30px. |
| h4   | boolean | Sets the text's fontSize to 24px. |
| h5   | boolean | Sets the text's fontSize to 18px. |
| p    | boolean | Sets the text's fontSize to 16px. |

### `bold`

add bold to text font style , typography styles have more priority than this prop.

| Type    | Required | Default |
| ------- | -------- | ------- |
| boolean | No       | false   |

### `italic`

add italic to text font style .

| Type    | Required | Default |
| ------- | -------- | ------- |
| boolean | No       | false   |

### `center`

align text to center .

| Type    | Required | Default |
| ------- | -------- | ------- |
| boolean | No       | false   |

### `size`

override text size Size, this will ovveride any premade font sizes like h1,h2 or even typography font size.

| Type   | Required | Default |
| ------ | -------- | ------- |
| number | No       | AzirTheme.SIZES.FONT |

### `style`

override text style for example if you want to change fontSize,textDecorationLine,...

| Type  | Required |
| ----- | -------- |
| style | No       |

> **You Still can pass any of react native Text Props**

# Text Typography

Pixel–perfect, native–looking typographic styles for React Native.

> This library provides a good set of defaults and helpers that cover the majority of the cases you'll need.

<p align="center">
 <img src="https://i.imgur.com/jUQLsA2.jpg" />
</p>

## Installation

> this library is part of azir text package

**Examples**

#### Example

```jsx
import Text, {material} from "azir-text";
---
<Text style={[material.display2, { textDecorationLine: "underline" }]} italic color="error">
    Hello Material ❤️️ !
</Text>
<Text style={[material.display1, { textDecorationLine: "underline" }]} italic color="success">
    Hello Material 💚 !
</Text>
<Text style={[material.title, { textDecorationLine: "underline" }]} italic color="info">
    Hello Material 💙 !
</Text>
```

<img src="https://i.imgur.com/V69Xmm4.jpg" alt="Basic" style="width:250px" />

# **Typography collections**

> All Typography can used directly wherever you would supply a textStyle.

> **Tall typefaces** : Language scripts that require extra line height to accommodate larger glyphs, including South and Southeast Asian and Middle-Eastern languages, like Arabic, Hindi, Telugu, Thai, and Vietnamese.

> **Dense typefaces** : Language scripts that require extra line height to accommodate larger glyphs, including Chinese, Japanese, and Korean.

### `Human Interface`

> **Dense and tall scripts are fully supported.**

```bash
import Text,{ human,humanDense,humanTall } from 'azir-text'

<Text style={human.largeTitle}>Hello !</Text>
<Text style={humanDense.largeTitle}>Hello !</Text>
<Text style={humanTall.largeTitle}>Hello !</Text>
```

<img src="https://i.imgur.com/gKtG7Lg.jpg" alt="Human" style="width:300px" />

| style name | Size          |
| ---------- | ------------- |
| largeTitle | 34            |
| title1     | 28            |
| title2     | 22            |
| title3     | 20            |
| headline   | semi-bold, 17 |
| body       | 17            |
| callout    | 16            |
| subhead    | 15            |
| footnote   | 13            |
| caption1   | 12            |
| caption2   | 11            |

### `Material Design`

> **Dense and tall scripts are fully supported.**

```bash
import Text,{ material,materialDense,materialTall } from 'azir-text'

<Text style={material.display4}>Hello !</Text>
<Text style={materialDense.display4}>Hello !</Text>
<Text style={materialTall.display4}>Hello !</Text>
```

<img src="https://i.imgur.com/C2VWPOF.jpg" alt="material" style="width:300px" />

| style name | Size      |
| ---------- | --------- |
| display4   | light,112 |
| display3   | 56        |
| display2   | 45        |
| display1   | 34        |
| headline   | 24        |
| title      | medium,20 |
| subheading | 16        |
| body2      | medium,14 |
| body1      | 14        |
| caption    | 12        |
| button     | medium 14 |

### `iOSUIKit`

> **Dense and tall scripts are fully supported.**

```bash
import Text,{ iOSUIKit,iOSUIKitDense,iOSUIKitTall } from 'azir-text'

<Text style={iOSUIKit.largeTitle}>Hello !</Text>
<Text style={iOSUIKitDense.largeTitle}>Hello !</Text>
<Text style={iOSUIKitTall.largeTitle}>Hello !</Text>
```

<img src="https://i.imgur.com/C2VWPOF.jpg" alt="iOSUIKit" style="width:300px" />

| style name           | Size         |
| -------------------- | ------------ |
| largeTitleEmphasized | Bold,34      |
| title3Emphasized     | semi-bold,20 |
| title3               | 20           |
| bodyEmphasized       | semi-bold,17 |
| body                 | 17           |
| subheadEmphasized    | semi-bold,15 |
| subhead              | 15           |
| subheadShort         | short,15     |
| callout              | 16           |
| footnoteEmphasized   | semi-bold,13 |
| footnote             | 13           |
| caption2Emphasized   | semi-bold,11 |
| caption2             | 11           |

---

# Weights

> A font weight in React Native is sometimes formed by a pair of a fontFamily and a fontWeight, but not always! It depends on the typeface, sometimes it's just defined by the fontFamily.With these helpers, you don't have to worry about those inconsistencies.

```bash
import Text,{ systemWeights,material } from 'azir-text'

<Text style={[material.title, systemWeights.light]}>Title</Text>
```

| weight name |
| ----------- |
| thin        |
| light       |
| regular     |
| semibold    |
| bold        |

