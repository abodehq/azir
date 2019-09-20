# Azir Framwork list :  [https://azir.io/docs](https://azir.io/docs)

# AzirTheme usage

All the colors, sizes and layout rules are stored in our default theme. Every component inherits its styling rules from this Package. Imagine this... You're building an application and you have 30 buttons using the primary color but you feel like that color doesn't really suit your project. You can re-write our theme file with only the things you want to change by using our theme components and all Azir components will change the that certain style.

>We use Galio Framework as a base of our framework . 

### 1. Components

- **AzirTheme**: default theme for components exporting an object with `{ COLORS, SIZES }` the origion settings.
- **withAzir**: HoC for any React-Native component with args: `Component` and optional `styles`. By using this, you can access constants we have in our default theme.
- **AzirProvider**: React Context Provider getting **custom theme** from props and pass it to the React Context.

### 2. Usage

- install any of our available components .
- import { **theme, withAzir, AzirProvider** } from 'azir-theme'
- export default **withAzir(YourComponent, componentStyles)**;
- custom theme constants will **overwrite** the default Azir theme constants

```js
const customTheme = {
  SIZES: { FONT: 120, BASE: 18, BORDER_RADIUS: 0, HR_PADDING: 0 },
  // this will overwrite the Azir SIZES BASE value 16
  COLORS: { THEME: "#ff9900" }
  // this will overwrite the Azir COLORS PRIMARY color #B23AFC
};
<AzirProvider theme={customTheme}>
  <YourRootComponent />
</AzirProvider>;
```

#### 2.1 withAzir in-depth usage and explanation

Exporting a React class/function using our withAzir function enables your component to consume Azir's React Context and pass down theme in your component as a prop or as an argument for `styles`. So now you can use our constant colors and sizes in your own components/screens.

```js
const styles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.COLORS.FACEBOOK
    }
  });
export default withAzir(youComponent, styles);
```

### 3. Theme COLORS & SIZES

Use the following reference tables to create your own custom theme

#### COLORS reference table

| **Color name** | **Default value**       | **Description**                                                                               |
| :------------- | :---------------------- | :-------------------------------------------------------------------------------------------- |
| **SOCIAL**     |
| FACEBOOK       | #3B5998                 | ![](https://dummyimage.com/40x12/3B5998/000000.png&text=+) For social Facebook button         |
| TWITTER        | #5BC0DE                 | ![](https://dummyimage.com/40x12/5BC0DE/000000.png&text=+) For social Twitter button          |
| DRIBBBLE       | #EA4C89                 | ![](https://dummyimage.com/40x12/EA4C89/000000.png&text=+) For social Dribble button          |
| **Azir**       |
| THEME          | #B23AFC                 | ![](https://dummyimage.com/40x12/B23AFC/000000.png&text=+) Theme default color                |
| PRIMARY        | #B23AFC                 | ![](https://dummyimage.com/40x12/B23AFC/000000.png&text=+) Primary color for Buttons          |
| INFO           | #1232FF                 | ![](https://dummyimage.com/40x12/1232FF/000000.png&text=+) Info color for Buttons & Text      |
| ERROR          | #FE2472                 | ![](https://dummyimage.com/40x12/FE2472/000000.png&text=+) Info color for error messages      |
| WARNING        | #FF9C09                 | ![](https://dummyimage.com/40x12/FF9C09/000000.png&text=+) Warning color for warning messages |
| SUCCESS        | #45DF31                 | ![](https://dummyimage.com/40x12/45DF31/000000.png&text=+) Success color for success messages |
| **COMPONENTS** |
| INPUT          | #808080                 | ![](https://dummyimage.com/40x12/808080/000000.png&text=+) Input backgroundColor              |
| PLACEHOLDER    | #9FA5AA                 | ![](https://dummyimage.com/40x12/9FA5AA/000000.png&text=+) Input placeholder text color       |
| NAVBAR         | #F9F9F9                 | ![](https://dummyimage.com/40x12/F9F9F9/000000.png&text=+) NavBar text color                  |
| BLOCK          | #808080                 | ![](https://dummyimage.com/40x12/808080/000000.png&text=+) Block border color                 |
| ICON           | #000000                 | ![](https://dummyimage.com/40x12/000000/000000.png&text=+) Icon default color                 |
| **STANDARD**   |
| WHITE          | #FFFFFF                 | ![](https://dummyimage.com/40x12/FFFFFF/000000.png&text=+) White color                        |
| BLACK          | #000000                 | ![](https://dummyimage.com/40x12/000000/000000.png&text=+) Black color                        |
| GREY           | #898989                 | ![](https://dummyimage.com/40x12/898989/000000.png&text=+) Grey color                         |
| MUTED          | #9FA5AA                 | ![](https://dummyimage.com/40x12/9FA5AA/000000.png&text=+) Text muted color                   |
| TRANSPARENT    | transparent             | Transparent value for Block, Button and other components                                      |
| NEUTRAL        | rgba(255,255,255, 0.65) | Text neutral color white with 65% transparency                                                |

#### SIZES reference table

`const { height, width } = Dimensions.get('screen');`
By default the size of **16** is used to calculate all the sizes

| **Size name**        | **Default value** |
| :------------------- | :---------------: |
| **THEME**            |
| BASE                 |        16         |
| FONT                 |        16         |
| ICON                 |        16         |
| OPACITY              |        0.8        |
| BORDER_RADIUS        |         0         |
| BORDER_WIDTH         |         0         |
| **ICON**             |
| ICON_SIZE            |      16 \* 9      |
| **BUTTON**           |
| BUTTON_WIDTH         |      16 \* 9      |
| BUTTON_HEIGHT        |    16 \* 2.75     |
| BUTTON_SHADOW_RADIUS |        10         |
