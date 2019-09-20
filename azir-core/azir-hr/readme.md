# Azir Framwork :  [https://azir.io/docs](https://azir.io/docs)

# Hr

> Hr/Divider are visual separators of content. Use Hr when you want to make a distinction between sections of content.

<p align="center">
 <img src="https://i.imgur.com/JsBqkNV.jpg" />
</p>

## Installation

to install the latest version of `azir-hr` you only need to run:

```bash
npm install azir-hr  --save
```

or

```bash
yarn add azir-hr
```

**Examples**

#### Basic :

```jsx
import Hr from "azir-hr";
---
<Hr />
```

<img src="https://i.imgur.com/WP8p5Yj.jpg" alt="Basic" style="width:400px" />

#### Hr with Text :

```jsx
import Hr from "azir-hr";
---
<Hr width={300} style={ {backgroundColor:"#eee"} }> Azir </Hr>
```

<img src="https://i.imgur.com/hNGJuIf.jpg" alt="Basic" style="width:400px" />

#### Hr Text style :

```jsx
import Hr from "azir-hr";
---
<Hr  fontSize={30} textColor="#ff9900" textStyle={ {textDecorationLine:"underline"} } color="#aaa" textPadding="10%">
Azir
</Hr>
```

<img src="https://i.imgur.com/wuVj2ZT.jpg" alt="Basic" style="width:400px" />

#### Hr Custom content :

```jsx
import Hr from "azir-hr";
import { BrandIcons } from "azir-icon";
---
<Hr padding={0} color="success" borderWidth={2} >
  <Icon icon={BrandIcons.react} color="error" size={45} style={ {paddingLeft:10,paddingRight:10} } ></Icon>
</Hr>
```

<img src="https://i.imgur.com/RDi6lbv.jpg" alt="Basic" style="width:400px" />

### Props

- [`width`](hr#width)
- [`color`](hr#color)
- [`borderWidth`](hr#borderwidth)
- [`borderStyle`](hr#borderstyle)
- [`fontSize`](hr#fontsize)
- [`textColor`](hr#textcolor)
- [`textStyle`](hr#textstyle)
- [`padding`](hr#padding)
- [`textPadding`](hr#textpadding)
- [`style`](hr#style)

---

# Reference

### `width`

set the whole component width.

| Type   | Required | Default                  |
| ------ | -------- | ------------------------ |
| Number | No       | Fill the container width |

### `color`

color of the hr line

| Type                                       | Required | Default |
| ------------------------------------------ | -------- | ------- |
| [azir-color](../../guides/color-reference) | No       | theme   |

### `borderWidth`

set the Hr Border thickness .

| Type   | Required | Default                  |
| ------ | -------- | ------------------------ |
| Number | No       | AzirTheme.SIZES.HR_WIDTH |

### `borderStyle`

override hr style,since we are using border to render children then you can use all react native border style options

| Type  | Required |
| ----- | -------- |
| style | No       |

### `textColor`

color of the hr text

| Type                                       | Required | Default |
| ------------------------------------------ | -------- | ------- |
| [azir-color](../../guides/color-reference) | No       | theme   |

### `fontSize`

set Hr text font size.

| Type   | Required | Default              |
| ------ | -------- | -------------------- |
| Number | No       | AzirTheme.SIZES.FONT |

### `textStyle`

override text style,since we are using text to render children then you can use all react native text props

| Type  | Required |
| ----- | -------- |
| style | No       |

### `padding`

set Hr Left and right padding.

| Type   | Required | Default                    |
| ------ | -------- | -------------------------- |
| Number | No       | AzirTheme.SIZES.HR_PADDING |

### `textPadding`

set Hr Text Left and right padding.

| Type   | Required | Default                         |
| ------ | -------- | ------------------------------- |
| Number | No       | AzirTheme.SIZES.HR_TEXT_PADDING |

### `style`

override main container style.

| Type  | Required |
| ----- | -------- |
| style | No       |
