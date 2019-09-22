# Azir Framwork : [https://azir.io/docs](https://azir.io/docs)

# Slider

> An advance slider component that should render nicely on any platform. Supports a great level of customization.

<p align="center">
 <img src="https://i.imgur.com/kxhIyeS.jpg" />
</p>

## Installation

to install the latest version of `azir-slider` you only need to run:

```bash
npm install azir-slider  --save
```

or

```bash
yarn add azir-slider
```

**Examples**

#### Basic :

```jsx
import Slider from "azir-slider";
---
<Slider
  value={30}
  step={10}
  minimumValue={0}
  maximumValue={100}
  onStart={value => console.log(value)}
  onChange={value => console.log(value)}
  onComplete={value => console.log(value)}
  trackColor="red"
  thumbColor="blue"
  progressTrackColor="green"
  thumbSize={50}
  trackSize={30}
/>
```

<img src="https://i.imgur.com/6mN75eT.jpg" alt="Basic" style="width:350px" />

#### With Custom Icon :

```jsx
import Slider from "azir-slider";
---
<Slider
  icon={<Icon size={20} color="red"></Icon>}
  humbColor="black"
  trackColor="black"
  progressTrackColor="red"
/>
```

<img src="https://i.imgur.com/yvWM0cc.jpg" alt="Basic" style="width:350px" />

#### Style1 :

```jsx
import Slider from "azir-slider";
---
  <Slider trackStyle={styles.track} thumbStyle={styles.thumb} />
---
const styles = StyleSheet.create({
  track: {
    height: 14,
    borderRadius: 2,
    backgroundColor: "white",
    borderColor: "#9a9a9a",
    borderWidth: 1
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 2,
    backgroundColor: "#eaeaea",
    borderColor: "#9a9a9a",
    borderWidth: 1
  }
});
```

<img src="https://i.imgur.com/xil2e3I.jpg" alt="Basic" style="width:350px" />

#### Style2 :

```jsx
import Slider from "azir-slider";
---
  <Slider progressTrackColor="#30a935" trackStyle={styles.track} thumbStyle={styles.thumb} />
---
const styles = StyleSheet.create({
 track: {
    height: 4,
    borderRadius: 2
  },
  thumb: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: "white",
    borderColor: "#30a935",
    borderWidth: 2
  }
});
```

<img src="https://i.imgur.com/y0x3YZP.jpg" alt="Basic" style="width:350px" />

#### Style3 :

```jsx
import Slider from "azir-slider";
---
  <Slider progressTrackColor="#eb6e1b" trackStyle={styles.track} thumbStyle={styles.thumb} />
---
const styles = StyleSheet.create({
 track: {
    height: 10,
    borderRadius: 5,
    backgroundColor: "#d0d0d0"
  },
  thumb: {
    width: 10,
    height: 30,
    borderRadius: 5,
    backgroundColor: "#eb6e1b"
  }
});
```

<img src="https://i.imgur.com/mMuFNN5.jpg" alt="Basic" style="width:350px" />

#### Style4 :

```jsx
import Slider from "azir-slider";
---
  <Slider progressTrackColor="#a4126e" trackStyle={styles.track} thumbStyle={styles.thumb} />
---
const styles = StyleSheet.create({
 track: {
    height: 10,
    borderRadius: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
    shadowOpacity: 0.15
  },
  thumb: {
    width: 20,
    height: 20,
    backgroundColor: "#f8a1d6",
    borderColor: "#a4126e",
    borderWidth: 5,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.35
  },
});
```

<img src="https://i.imgur.com/hlJmzAK.jpg" alt="Basic" style="width:350px" />

#### Style5 :

```jsx
import Slider from "azir-slider";
---
  <Slider progressTrackColor="#303030" trackStyle={styles.track} thumbStyle={styles.thumb} />
---
const styles = StyleSheet.create({
  track: {
    height: 1,
    backgroundColor: "#303030"
  },
  thumb: {
    width: 30,
    height: 30,
    backgroundColor: "rgba(150, 150, 150, 0.3)",
    borderColor: "rgba(150, 150, 150, 0.6)",
    borderWidth: 14,
    borderRadius: 15
  }
});
```

<img src="https://i.imgur.com/61z1TE1.jpg" alt="Basic" style="width:350px" />

### Props

- [`value`](slider#value)
- [`minimumValue`](slider#minimumvalue)
- [`maximumValue`](slider#maximumvalue)
- [`step`](slider#step)
- [`trackSize`](slider#tracksize)
- [`thumbSize`](slider#thumbsize)
- [`thumbTouchSize`](slider#thumbtouchsize)
- [`icon`](slider#icon)
- [`disabled`](slider#disabled)
- [`thumbColor`](slider#thumbcolor)
- [`trackColor`](slider#trackcolor)
- [`progressTrackColor`](slider#progresstrackcolor)
- [`onStart`](slider#onstart)
- [`onChange`](slider#onchange)
- [`onComplete`](slider#oncomplete)
- [`style`](slider#style)
- [`trackStyle`](slider#trackstyle)
- [`thumbStyle`](slider#thumbstyle)

---

# Reference

### `value`

Initial value of the slider should be between minimum and maximum value

| Type   | Required | Default |
| ------ | -------- | ------- |
| Number | No       | 0       |

### `minimumValue`

minimum value of the slider.

| Type   | Required | Default |
| ------ | -------- | ------- |
| Number | No       | 0       |

### `maximumValue`

maximum value of the slider.

| Type   | Required | Default |
| ------ | -------- | ------- |
| Number | No       | 1       |

### `step`

Step value of the slider. The value should be between 0 and maximumValue - minimumValue

| Type   | Required | Default |
| ------ | -------- | ------- |
| Number | No       | 0       |

### `trackSize`

Step the height of the track.

| Type   | Required | Default |
| ------ | -------- | ------- |
| Number | No       | 3       |

### `thumbSize`

Step the size of the thumb

| Type   | Required | Default |
| ------ | -------- | ------- |
| Number | No       | 25      |

### `thumbTouchSize`

Step the Press area of the thumb

| Type           | Required | Default              |
| -------------- | -------- | -------------------- |
| {width,height} | No       | {width:45,height:45} |

### `icon`

Slider thumb Custom Icon ( JSX Element)

| Type                                                     | Required | Default |
| -------------------------------------------------------- | -------- | ------- |
| SolidIcons, RegularIcons, BrandIcons , CustomIcons , JSX | No       | null    |

### `disabled`

If true, disable all interactions for this component.

| Type | Required | Default |
| ---- | -------- | ------- |
| bool | No       | false   |

### `thumbColor`

Color of the Thumb

| Type                                       | Required | Default |
| ------------------------------------------ | -------- | ------- |
| [azir-color](../../guides/color-reference) | No       | theme   |

### `trackColor`

Color of the track

| Type                                       | Required | Default |
| ------------------------------------------ | -------- | ------- |
| [azir-color](../../guides/color-reference) | No       | #b3b3b3 |

### `progressTrackColor`

Color of the progressed track .

| Type                                       | Required | Default |
| ------------------------------------------ | -------- | ------- |
| [azir-color](../../guides/color-reference) | No       | theme   |

### `onStart`

Callback called when the user starts changing the value (e.g. when the slider is pressed)

| Type     | Required | Default |
| -------- | -------- | ------- |
| Function | No       | null    |

### `onChange`

Callback continuously called while the user is dragging the slider

| Type     | Required | Default |
| -------- | -------- | ------- |
| Function | No       | null    |

### `onComplete`

Callback called when the user finishes changing the value (e.g. when the slider is released)

| Type     | Required | Default |
| -------- | -------- | ------- |
| Function | No       | null    |

### `style`

override Slider Container Style which include ( track and thumb )

| Type  | Required |
| ----- | -------- |
| style | No       |

### `trackStyle`

override Slider Track Style .

| Type  | Required |
| ----- | -------- |
| style | No       |

### `thumbStyle`

override Slider Thumb Style .

| Type  | Required |
| ----- | -------- |
| style | No       |
