# CSS3

## What is CSS?

- Cascading Stylesheets
- Stylesheet / Styling language
- Used for website layout and design
- Can be extended with Sass / Less

## 3 methods to add CSS

- Inline CSS: directly in html element (NO!)
- Internal CSS: use `<style>` tags within a single documemt
- External CSS: link to external .css file

## CSS Selectors

- selector
- property
- value

## Selector Combinations

- Descendant selector
  - This allows you to target an element that is a descendant of another element. 
  - For example, to target all paragraphs within a div, you can use the following selector: `div p`
- Child selector
  - This targets only direct children of an element. 
  - For example, to target all list items within an unordered list, you can use the following selector: `ul > li`
- Adjacent sibling selector
  - This targets an element immediately following another element. 
  - For example, to target the first paragraph after a heading, you can use the following selector: `h1 + p`
- General sibling selector
  - This targets any element that follows another element. 
  - For example, to target all paragraphs that come after a heading, you can use the following selector: `h1 ~ p`

## pseudo-class selector

- a keyword that is added to a selector to select a specific state of an element
- :hover: This targets an element when the user hovers over it with the mouse pointer.
- :active: This targets an element when it is being clicked or activated.
- :focus: This targets an element when it has focus, such as when it is selected by the user using the Tab key.
- :first-child: This targets the first child element of its parent element.
- :last-child: This targets the last child element of its parent element.
- :nth-child(): This targets elements based on their position within a parent element, using a formula to calculate which elements to select.

## Colors in CSS

- color names
- HTML5 color names
- hexadecimal
- RGB

## Web Safe Fonts

- Web-safe fonts are fonts that can adapt to any browser on any device
- will always display properly on a web page, even if these fonts aren’t installed on the user's computer.
- [The Ultimate List of Web-Safe HTML and CSS Fonts](https://blog.hubspot.com/website/web-safe-html-css-fonts)
- [CSS Web Safe Fonts](https://www.w3schools.com/cssref/css_websafe_fonts.php)

## Box Model

- margin: space outside border
- border
- padding: space inside border
- content: html element

## Positioning in CSS

- Static: default
- Relative: relative to its normal position
- Absolute: target position in a relative element
- Fixed: fixed position to the browser
- Initial
- Inherit

## Flexbox

## CSS Gride

## Reference

- [25 Tips and Tricks for Using HTML and CSS Like a Pro](https://1drv.ms/b/s!AhqSA0q1bsCW90xhDOs1r_0VG1cw?e=LfAaiM)
- [CSS Crash Course For Absolute Beginners](https://www.youtube.com/watch?v=yfoY53QXEnI)
