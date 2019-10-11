# Azir Framwork :  [https://azir.io/docs](https://azir.io/docs)

# Avatar

> Avatars are found all over ui design from lists to profile screens. They are commonly used to represent a user and can contain photos, icons, or even text.

<p align="center">
 <img src="https://i.imgur.com/8yqD1NW.jpg" />
</p>

## Installation

to install the latest version of `azir-avatar` you only need to run:

```bash
npm install azir-avatar  --save
```

or

```bash
yarn add azir-avatar
```

**Examples**

#### Basic :

```jsx
import Avatar from "azir-avatar";
import { BrandIcons } from "azir-icon";
---
//Image
<Avatar
  source={ { uri: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixid=eyJhcHBfaWQiOjEyMDd9" } } />
//ICON
<Avatar icon={BrandIcons.react} />
//Title
<Avatar title="RN" />
```

<img src="https://i.imgur.com/HheEPEA.jpg" alt="Basic" style="width:250px" />

#### Advance with Styles :

```jsx
import Avatar from "azir-avatar";
import  Icon,{ BrandIcons } from "azir-icon";
---
<Avatar style={ {borderWidth:1,borderColor:"red"} }
  icon={BrandIcons.react} shadow size={300}
  color="gray" contentColor="error" rounded={false}
  contentStyle={ {borderWidth:1, borderRadius:50, padding:5,borderColor:"white" } }
/>
```

<img src="https://i.imgur.com/nE8fdOJ.jpg" alt="Basic" style="width:150px" />

#### Custom content with Press :

```jsx
import Avatar from "azir-avatar";
import Button from "azir-button";
import  Icon,{ SolidIcons } from "azir-icon";
---
<Button
  color="transparent"
  onPress={() => {
    console.log("hii");
  }}>
    <Avatar
      size={"large"}
      style={ { backgroundColor: "#eee",borderWidth:1,borderColor:"#ff9900" } }>
      <Icon icon={SolidIcons.baby} color="#ff9900"></Icon>
    </Avatar>
</Button>
```

<img src="https://i.imgur.com/PDSTFEP.jpg" alt="Basic" style="width:200px" />

### Props

> you can add any extra props based on the avatar content type ( for example if you have image avatar then you can pass image props to the avatar component )

```jsx
<Avatar resizeMode="cover" />
```

- [`source`](avatar#source)
- [`title`](avatar#title)
- [`icon`](avatar#icon)
- [`color`](avatar#color)
- [`size`](avatar#size)
- [`contentColor`](avatar#contentcolor)
- [`rounded`](avatar#rounded)
- [`source`](avatar#source)
- [`shadow`](avatar#shadow)
- [`contentStyle`](avatar#contentstyle)
- [`style`](avatar#style)

---

# Reference

### `source`

Avatar Image Source ( in case you want an image avatar )

| Type                | Required | Default |
| ------------------- | -------- | ------- |
| image source object | No       | null    |

### `title`

Avatar title text ( in case you want text avatar )

| Type   | Required | Default |
| ------ | -------- | ------- |
| string | No       | null    |

### `icon`

Avatar Icon ( in case you want Azir Icon avatar )

| Type                                               | Required | Default |
| -------------------------------------------------- | -------- | ------- |
| SolidIcons, RegularIcons, BrandIcons , CustomIcons | No       | null    |

### `color`

Background Color of the avatar

| Type                                       | Required | Default |
| ------------------------------------------ | -------- | ------- |
| [azir-color](../../guides/color-reference) | No       | theme   |

### `size`

set the avatar component Size.

| Type                                               | Required | Default |
| -------------------------------------------------- | -------- | ------- |
| ("small" , "medium" , "large" , "xlarge" , number) | No       | medium  |

### `contentColor`

set the avatar Color (for icon & Text)

| Type                                       | Required | Default |
| ------------------------------------------ | -------- | ------- |
| [azir-color](../../guides/color-reference) | No       | white   |

### `rounded`

Makes the avatar circular or square

| Type    | Required | Default |
| ------- | -------- | ------- |
| boolean | No       | true    |

### `shadow`

If true, show shadow effect for this component.

| Type | Required | Default |
| ---- | -------- | ------- |
| bool | No       | false   |

### `contentStyle`

override Avatar content Style based on the avatar content ( image, icon, text)

| Type  | Required |
| ----- | -------- |
| style | No       |

### `style`

override Avatar Container Style which include ( View Style )

| Type  | Required |
| ----- | -------- |
| style | No       |
