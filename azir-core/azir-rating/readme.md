# Azir Framwork :  [https://azir.io/docs](https://azir.io/docs)

# Rating

An advance Rating component that should render nicely on any platform. Supports a great level of customization.

<p align="center">
 <img src="https://i.imgur.com/2icdCbc.jpg" />
</p>

## Installation

to install the latest version of `azir-rating` you only need to run:

```bash
npm install azir-rating  --save
```

or

```bash
yarn add azir-rating
```

**Examples**

#### Basic :

```jsx
import Rating from "azir-rating" ;
---
<Rating
  size={60} rating={1}
  scaleSize={80} count={3}
  reviews={["Okay","Good", "Great"]}
  onChange={(rating,previousRating)=>{console.log(rating+" : " +previousRating)}}
/>
```

<img src="https://i.imgur.com/Y6PJEoa.jpg" alt="Basic" style="width:250px" />

#### Advance with Styles :

```jsx
import Rating from "azir-rating" ;
import  Icon,{ AzirIcons } from "azir-icon";
---
 <Rating
  reviewColor="red"
  activeColor="red"
  count={7}
  icon={AzirIcons.ThumbUp}
  starContainerStyle={ {borderWidth:1} }
  inActiveColor="#990000"
  reviewStyle={ {fontSize:18} }
  style={ {backgroundColor:"#eee"} }
  containerStyle={ {backgroundColor:"#aaeeaa"} }
  showAnimation={false}
  showScaleEffect={false}
/>
```

<img src="https://i.imgur.com/3wYP7gA.jpg" alt="Basic" style="width:250px" />

### Props

> Please make sure to download the latest version of Azir icons.

- [`icon`](rating#icon)
- [`onChange`](rating#onchange)
- [`rating`](rating#rating)
- [`count`](rating#count)
- [`size`](rating#size)
- [`scaleSize`](rating#scalesize)
- [`activeColor`](rating#activecolor)
- [`inActiveColor`](rating#inactivecolor)
- [`showAnimation`](rating#showanimation)
- [`showScaleEffect`](rating#showscaleeffect)
- [`reviews`](rating#reviews)
- [`reviewSize`](rating#reviewsize)
- [`showRatingReview`](rating#showratingreview)
- [`disabled`](rating#disabled)
- [`style`](rating#style)
- [`containerStyle`](rating#containerstyle)
- [`starContainerStyle`](rating#starcontainerstyle)
- [`reviewStyle`](rating#reviewstyle)

---

# Reference

### `icon`

Rating Icon.

| Type                                                         | Required | Default        |
| ------------------------------------------------------------ | -------- | -------------- |
| AzirIcons,SolidIcons, RegularIcons, BrandIcons , CustomIcons | No       | AzirIcons.Star |

### `onChange`

Handler to be called when the user change the rating .

> we pass two parameters (rating :current selected index,previousRating :previous index )

| Type     | Required |
| -------- | -------- |
| function | NO       |

### `rating`

Initial value for the rating. star rating started from zero.

| Type   | Required | Default |
| ------ | -------- | ------- |
| Number | No       | 2       |

### `count`

Total number of ratings to display

| Type   | Required | Default |
| ------ | -------- | ------- |
| Number | No       | 5       |

### `size`

The Size of the Rating Icon

| Type                                 | Required | Default |
| ------------------------------------ | -------- | ------- |
| [azir-size](../../guides/azir-sizes) | No       | 25      |

### `scaleSize`

The Size of the Rating Icon when its active

| Type                                 | Required | Default |
| ------------------------------------ | -------- | ------- |
| [azir-size](../../guides/azir-sizes) | No       | 40      |

### `activeColor`

Active Rating icon Color.

| Type                                       | Required | Default |
| ------------------------------------------ | -------- | ------- |
| [azir-color](../../guides/color-reference) | No       | theme   |

### `inActiveColor`

In Active Rating icon Color.

| Type                                       | Required | Default |
| ------------------------------------------ | -------- | ------- |
| [azir-color](../../guides/color-reference) | No       | #BDC3C7 |

### `showAnimation`

Show Rating Icons Change Spring animation

| Type    | Required | Default |
| ------- | -------- | ------- |
| boolean | No       | true    |

### `showScaleEffect`

Show Rating Icons Change Scaling Effect

| Type    | Required | Default |
| ------- | -------- | ------- |
| boolean | No       | true    |

### `reviews`

Labels to show when each value is tapped e.g. If the first star is tapped, then value in index 0 will be used as the label

| Type     | Required | Default                                      |
| -------- | -------- | -------------------------------------------- |
| string[] | No       | ["Terrible", "Bad", "Okay", "Good", "Great"] |

### `reviewSize`

The font Size of the Rating Reviews

| Type   | Required | Default |
| ------ | -------- | ------- |
| Number | No       | 25      |

### `showRatingReview`

If false, we hide rating reviews.

| Type | Required | Default |
| ---- | -------- | ------- |
| bool | No       | true    |

### `disabled`

If true, disable all interactions for this component.

| Type | Required | Default |
| ---- | -------- | ------- |
| bool | No       | false   |

### `style`

override Rating main Container Style

| Type  | Required |
| ----- | -------- |
| style | No       |

### `containerStyle`

override rating icons container style

| Type  | Required |
| ----- | -------- |
| style | No       |

### `starContainerStyle`

override Star Container Style

| Type  | Required |
| ----- | -------- |
| style | No       |

### `reviewStyle`

override review Text style

| Type  | Required |
| ----- | -------- |
| style | No       |
