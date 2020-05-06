![enter image description here](https://i.ibb.co/jWk55xg/example.png)
Fancy curved arrows for your Angular project! Great for tutorials and product tours!

Demo : https://vc6p1.csb.app/ 
<br />
Sandbox : https://codesandbox.io/s/vc6p1

## Installation

`npm i cool-line-arrow`

## Usage

```jsx
import CurvedLineArrowModule

// Selector 

<tn-curved-line-arrow> </tn-curved-line-arrow>
```

## Inputs
|Name|Type|Description|Default|
|--- |--- |--- |--- |
|fromSelector|DOM selector|DOM element from which your arrow will start.|body|
|fromOffsetX|number|Amount of pixels to offset the arrow from the DOM element on the X axis.|0|
|fromOffsetY|number|Amount of pixels to offset the arrow from the DOM element on the Y axis.|0|
|toSelector|DOM selector|DOM element to which your arrow will go to.|(same as fromSelector)|
|toOffsetX|number|Amount of pixels to offset the arrow from the DOM element on the X axis.|0|
|toOffsetY|number|Amount of pixels to offset the arrow from the DOM element on the Y axis.|0|
|middleX|number|Middle point X position.|0|
|middleY|number|Middle point Y position.|40|
|width|number|Width of the arrow and arrowhead.|8|
|color|color|Color of the arrow and arrowhead.|"black"|
|hideIfFoundSelector|DOM selector|Optional. if the arrow can find this selector, it will hide itself. Useful for product tours when you only want to show an arrow whenever a user hasn't performed an action yet such as opening a menu.||
|debugLine|boolean|Show debug dots and lines for fromOffset, toOffset and middle vectors.|false|
|dynamicUpdate|boolean|Automatically adjust the arrow whenever the from/to DOM elements update. Useful for dynamic content such as sliding menus or content that is within a scrolling container.|false|
|zIndex|number|Adjust the z-index for this arrow.|0|

## Copyright



Made with ❤️ by [Melek Damak](https://www.linkedin.com/in/damak-melek-2a9819147/)

 <br />
Mail : melekdamak@gmail.com

## Inspired from

 [Styled Page](https://react-curved-arrow.nickjanssen.com), a tool that lets you visually build React apps & components!

# License
MIT
