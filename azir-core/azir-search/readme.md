# Azir Framwork : [https://azir.io/docs](https://azir.io/docs)

# Search

> Azir Search is used to search or filter items. Use Azir Search when the number of items directly impacts a user's ability to find one of them.

<p align="center">
 <img src="https://i.imgur.com/aCK2VN4.jpg" />
</p>

## Installation

to install the latest version of `azir-search` you only need to run:

```bash
npm install azir-search  --save
```

or

```bash
yarn add azir-search
```

**Examples**

#### Basic With Handlers :

```jsx
import React, { useState } from "react";
import Search from "azir-search";
---
const [txt, setTxt] = useState("");
---
<Search
  value={txt}
  placeholder={"Search"}
  onChangeText={text => setTxt(text)}
  onFocus={() => console.log("Focused")}
  onCancel={() => console.log("UnFocused")}
  onClear={() => console.log("Cleared")}
  onBlur={() => console.log("UnFocused")}
/>
```

<img src="https://i.imgur.com/h2VyplG.jpg" alt="Basic" style="width:250px" />

#### Advance with Styles :

```jsx
import React, { useState } from "react";
import Search from "azir-search";
import Icon, {SolidIcons } from "azir-icon";//you need to import solid icons font into your app
---
const [txt, setTxt] = useState("");
---
<Search
  searchStyle={ { padding: 0 } }
  style={ { borderColor: "red", borderLeftWidth: 0, borderTopWidth: 0, borderRightWidth: 0 } }
  endIconStyle={ { color: "red" } }
  color="red"
  value={txt}
  onChangeText={text => setTxt(text)}
  startIcon={<Icon color="red" size={24} icon={SolidIcons.searchLocation}></Icon>}
/>
```

<img src="https://i.imgur.com/t77dZy3.jpg" alt="Basic" style="width:250px" />

#### Advance with Loadingg :

```jsx
import React, { useState } from "react";
import Search from "azir-search";
import Icon, {SolidIcons } from "azir-icon";//you need to import solid icons font into your app
---
const [txt, setTxt] = useState("");
---
<Search
  searchStyle={ { padding: 0 } }
  value={txt}
  onChangeText={text => setTxt(text)}
  startIconColor="green"
  placeholder={"Search Donuts"}
  startIconSize={50}
  showLoading
  loadingColor="green"
  loadingSize="large"
  startIconStyle={ { color: "green" } }
  endIconStyle={ { color: "green" } }
/>
```

<img src="https://i.imgur.com/J3vQxtj.jpg" alt="Basic" style="width:250px" />

### Props

> Azir Search using Azir-input for its seach input so you can also pass all azir-input props.

- [`value`](search#value)
- [`searchIcon`](search#searchicon)
- [`cancelIcon`](search#cancelicon)
- [`showCancel`](search#showcancel)
- [`clearIcon`](search#clearicon)
- [`showClear`](search#showclear)
- [`onClear`](search#onclear)
- [`onFocus`](search#onfocus)
- [`onBlur`](search#onblur)
- [`onChangeText`](search#onchangetext)
- [`onCancel`](search#oncancel)
- [`searchStyle`](search#searchstyle)
- [`startIconStyle`](search#starticonstyle)
- [`endIconStyle`](search#endiconstyle)
- [`showLoading`](search#showloading)
- [`loadingColor`](search#loadingcolor)
- [`startIconStyle`](search#starticonstyle)
- [`endIconStyle`](search#endiconstyle)
- [`shadow`](search#shadow)
- Azir-input props

---

# Reference

### `value`

Set the value of the input text

| Type   | Required | Default |
| ------ | -------- | ------- |
| string | No       | empty   |

### `searchIcon`

override the search Icon props, you can use azir-icon to change default icon.

| Type   | Required | Default          |
| ------ | -------- | ---------------- |
| string | No       | AzirIcons.Search |

### `cancelIcon`

override the Cancel Icon props, you can use azir-icon to change default icon.

| Type   | Required | Default                                          |
| ------ | -------- | ------------------------------------------------ |
| string | No       | ltr:AzirIcons.ArrowLeft;rtl:AzirIcons.ArrowRight |

### `showCancel`

Show or hide Cancel icon..

| Type    | Required | Default |
| ------- | -------- | ------- |
| boolean | No       | true    |

### `clearIcon`

override the Clear Icon props, you can use azir-icon to change default icon.

| Type   | Required | Default               |
| ------ | -------- | --------------------- |
| string | No       | AzirIcons.SearchClear |

### `showClear`

Show or hide Clear icon..

| Type    | Required | Default |
| ------- | -------- | ------- |
| boolean | No       | true    |

### `onClear`

method to fire when input is cleared

| Type     | Required |
| -------- | -------- |
| function | No       |

### `onFocus`

method to fire when input is focused

| Type     | Required |
| -------- | -------- |
| function | No       |

### `onBlur`

method to fire when input is Blured

| Type     | Required |
| -------- | -------- |
| function | No       |

### `onChangeText`

method to fire when the text input is Changed

| Type     | Required |
| -------- | -------- |
| function | No       |

### `onCancel`

method to fire when the text input is Canceled

| Type     | Required |
| -------- | -------- |
| function | No       |

### `showLoading`

Show Activity indicator when the value is true.

| Type    | Required | Default |
| ------- | -------- | ------- |
| boolean | No       | false   |

### `loadingColor`

Loading Color of input loading indicator

| Type                                       | Required | Default |
| ------------------------------------------ | -------- | ------- |
| [azir-color](../../guides/color-reference) | No       | theme   |

### `loadingSize`

set the loading Size.

| Type                         | Required | Default |
| ---------------------------- | -------- | ------- |
| ("small" , "large" , number) | No       | small   |

### `shadow`

If true, show shadow effect for this component.

| Type | Required | Default |
| ---- | -------- | ------- |
| bool | No       | false   |

### `searchStyle`

override input Container Style , if you want to change the pdding which is default = 8

| Type  | Required |
| ----- | -------- |
| style | No       |

### `startIconStyle`

override the start icon style ( ARROW RIGHT , ARROW LEFT)

| Type  | Required |
| ----- | -------- |
| style | No       |

### `endIconStyle`

override the start icon style ( clear icon)

| Type  | Required |
| ----- | -------- |
| style | No       |
