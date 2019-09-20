# Azir Framwork :  [https://azir.io/docs](https://azir.io/docs)

# Azir View More Text

A super lightweight plugin to expand/collapse text in React-Native. Truncated text is ended with ... .

<p align="center">
 <img src="https://i.imgur.com/ntbzYwP.gif" />
</p>

## Installation

to install the latest version of `azir-view-more-text` you only need to run:

```bash
npm install azir-view-more-text --save
```

or

```bash
yarn add azir-view-more-text
```

**Examples**

#### Basic

```jsx
import ViewMore from "azir-view-more-text";
---
<ViewMore selectable textStyle={ { width: 300 } } numberOfLines={1}>
  React Native lets you create truly native apps and doesn't compromise on your users' experience. It provides a core set of platform agnostic native components like View,
  Text, and Image that map directly to the platform’s native UI building blocks.
</ViewMore>
```

#### Advance

```jsx
import ViewMore from "azir-view-more-text";
---
<ViewMore viewLessStyle={ {color:"blue"} } viewMoreStyle={ {color:"#ff9900"} }
viewLessText="مشاهدة القليل" viewMoreText="مشاهدة المزيد"
textStyle={ { width: 300, fontSize: 20, textAlign: "right" ,color:"green" } } numberOfLines={3}>
  تتميز اللغة العربية بأصالة ماضيها؛ فهي من أقدم اللغات في العالم، فهي لغة الرسول محمد صلى الله عليه وسلم، كما أنها اللغة التي نزل بها كلام الله تعالى في القرآن الكريم؛ أي
  قبل 1400 عام، ومازالت من اللغات المستخدمة بين العرب حتى يومنا هذا
</ViewMore>
```

<img src="https://i.imgur.com/t6rPmAD.gif" alt="advance" style="width:350px" />

#### Custom Footer

```jsx
import ViewMore from "azir-view-more-text";
---
 <ViewMore
  renderRevealedFooter={onPress => {
    return <Text onPress={onPress}>View Less</Text>;
  }}
  renderTruncatedFooter={onPress => {
    return <Text onPress={onPress}>View More</Text>;
  }}
>
  تتميز اللغة العربية بأصالة ماضيها؛ فهي من أقدم اللغات في العالم، فهي لغة الرسول محمد صلى الله عليه وسلم، كما أنها اللغة التي نزل بها كلام الله تعالى في القرآن الكريم؛ أي
  قبل 1400 عام، ومازالت من اللغات المستخدمة بين العرب حتى يومنا هذا
</ViewMore>
```

### Props

- [`numberOfLines`](viewmoretext#numberoflines)
- [`viewMoreText`](viewmoretext#viewmoretext)
- [`viewLessText`](viewmoretext#viewlesstext)
- [`textStyle`](viewmoretext#textstyle)
- [`viewMoreStyle`](viewmoretext#viewmorestyle)
- [`viewLessStyle`](viewmoretext#viewlessstyle)
- [`renderTruncatedFooter`](viewmoretext#rendertruncatedfooter)
- [`renderRevealedFooter`](viewmoretext#renderrevealedfooter)

> you can also add any react native text props

---

# Reference

### `numberOfLines`

Number of Text lines to be displayed.

| Type   | Required | Default                       |
| ------ | -------- | ----------------------------- |
| number | No       | AzirTheme.SIZES.NUMBER_OF_LINES |

### `viewMoreText`

override view more text.

| Type   | Required | Default   |
| ------ | -------- | --------- |
| string | No       | View More |

### `viewLessText`

override view more text.

| Type   | Required | Default   |
| ------ | -------- | --------- |
| string | No       | View Less |

### `textStyle`

override main content string style for example if you want to change color,size ....

| Type  | Required |
| ----- | -------- |
| style | No       |

### `viewMoreStyle`

override view more text style for example if you want to change color,size ....

| Type  | Required |
| ----- | -------- |
| style | No       |

### `viewLessStyle`

override view Less text style for example if you want to change color,size ....

| Type  | Required |
| ----- | -------- |
| style | No       |

### `renderTruncatedFooter`

Display View more footer when truncated text rendered ....

| Type     | Required |
| -------- | -------- |
| Function | No       |

### `renderRevealedFooter`

Display View Less footer when all text rendered ....

| Type     | Required |
| -------- | -------- |
| Function | No       |
