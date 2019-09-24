# Azir Framwork : [https://azir.io/docs](https://azir.io/docs)

# Badge

> Please make sure you have azir-theme version 1.0.5 or above ;) .

> Badges are small components typically used to communicate a numerical value or indicate the status of an item to the user.

<p align="center">
 <img src="https://i.imgur.com/9l6qNF9.jpg" />
</p>

## Installation

to install the latest version of `azir-badge` you only need to run:

```bash
npm install azir-badge  --save
```

or

```bash
yarn add azir-badge
```

**Examples**

#### Basic :

```jsx
import Badge from "azir-badge";
import Avatar from "azir-avatar";
---
<Badge
  badgeContent="+99"
  color="warning"
  badgePosition="tl"
  size="xsmall"
  rounded={true}
  contentSize="large"
  contentRounded={true}
  onPress={() => {
    console.log("hi");
  }}>
  <Avatar size="large" rounded={true}
  source={ { uri: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixid=eyJhcHBfaWQiOjEyMDd9" } } />
</Badge>
```

<img src="https://i.imgur.com/gtvIaRL.jpg" alt="Basic" style="width:150px" />

#### Badge with Icon :

```jsx
import Badge from "azir-badge";
import  Icon,{ SolidIcons } from "azir-icon";
---
<Badge
    containerStyle={ { marginTop: 20 } }
    rounded={true}
    badgeContent="12"
    contentSize={50}
    contentRounded={true}
    badgePosition="tr"
    color="warning"
    size="xxsmall"
    textStyle={ { color: "white" } }
    onPress={() => {
      console.log("hi");
    }}
  >
  <Icon icon={SolidIcons.cartPlus}></Icon>
</Badge>
```

<img src="https://i.imgur.com/Njk0v9L.jpg" alt="Basic" style="width:150px" />

#### Icon Badge :

```jsx
import Badge from "azir-badge";
import Avatar from "azir-avatar";
import  Icon,{ SolidIcons } from "azir-icon";
---
<Badge
  containerStyle={ { marginTop: 20 } }
  rounded={false}
  badgeContent={<Icon size={10} color="white"></Icon>}
  contentSize="small"
  contentRounded={false}
  badgePosition="tl"
  badgeStyle={ { top: 25 } }
  color="error"
  size="xxsmall"
  onPress={() => {
    console.log("hi");
  } }>
  <Avatar size="small" rounded={false}
  source={ { uri: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixid=eyJhcHBfaWQiOjEyMDd9" } } />
</Badge>
```

<img src="https://i.imgur.com/bejusWy.jpg" alt="Basic" style="width:150px" />

### Props

- [`badgeContent`](badge#badgecontent)
- [`onPress`](badge#onpress)
- [`color`](badge#color)
- [`size`](badge#size)
- [`badgePosition`](badge#badgeposition)
- [`rounded`](badge#rounded)
- [`contentSize`](badge#contentsize)
- [`contentRounded`](badge#contentrounded)
- [`containerStyle`](badge#containerstyle)
- [`badgeStyle`](badge#badgestyle)
- [`style`](badge#style)
- [`textStyle`](badge#textstyle)

---

# Reference

### `badgeContent`

Badge content.

| Type                | Required | Default |
| ------------------- | -------- | ------- |
| String, JSX element | No       | null    |

### `onPress`

Handler to be called when the user taps the badge

| Type     | Required |
| -------- | -------- |
| function | Yes      |

### `color`

Background Color of the badge

| Type                                       | Required | Default |
| ------------------------------------------ | -------- | ------- |
| [azir-color](../../guides/color-reference) | No       | theme   |

### `size`

set the badge component Size.

| Type                                 | Required | Default                           |
| ------------------------------------ | -------- | --------------------------------- |
| [azir-size](../../guides/azir-sizes) | No       | Empty content : 22 , Content : 30 |

### `badgePosition`

Badge Position based on its content. tl= top left, tr = top right, bl = bottom left, br = bottom right

| Type                      | Required | Default |
| ------------------------- | -------- | ------- |
| "tl" , "tr" , "bl" , "br" | No       | tl      |

### `rounded`

Makes the Badge circular or square

| Type    | Required | Default |
| ------- | -------- | ------- |
| boolean | No       | true    |

### `contentSize`

set the badge content Size ( its very important prop with also contentRounded to exactly draw the badge related to the content).

> should match the child size

| Type                                 | Required | Default |
| ------------------------------------ | -------- | ------- |
| [azir-size](../../guides/azir-sizes) | No       | null    |

### `contentRounded`

if you have a rounded child then you need to set the prop to true to exactly draw the badge in the right position.

| Type    | Required | Default |
| ------- | -------- | ------- |
| boolean | No       | false   |

### `shadow`

If true, show shadow effect for this component.

| Type | Required | Default |
| ---- | -------- | ------- |
| bool | No       | false   |

### `containerStyle`

override Badge main Container Style

| Type  | Required |
| ----- | -------- |
| style | No       |

### `badgeStyle`

override Badge Style in case you want to change the badge position

| Type  | Required |
| ----- | -------- |
| style | No       |

### `style`

override Badge container style

| Type  | Required |
| ----- | -------- |
| style | No       |

### `textStyle`

override Badge Text Style in case you bas the content as string

| Type  | Required |
| ----- | -------- |
| style | No       |
