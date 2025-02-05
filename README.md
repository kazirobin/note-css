

---

### 1. **HTML Basics**
   [HTML Tags](https://www.w3schools.com/TAGS/default.asp)
   - **What HTML Is**: 
     - HTML (HyperText Markup Language) is the structure of web pages. It defines elements like headings, paragraphs, lists, and links.
   - **Key Elements**:
     - `<!DOCTYPE html>`: Declaration for HTML5.
     - `<html>`, `<head>`, `<body>`: Main structure tags.
     - **Common Tags**:
       - Headings: `<h1>` to `<h6>`
       - Paragraphs: `<p>`
       - Links: `<a href="...">`
       - Images: `<img src="...">`
       - Lists: `<ul>`, `<ol>`, `<li>`
       - Forms: `<form>`, `<input>`, `<button>`
   - **Semantic HTML**: Using tags like `<article>`, `<section>`, `<footer>`, `<header>` to make pages more understandable.

### 2. **CSS Basics**
   [CSS Properties](https://www.w3schools.com/cssref/index.php)
   - **What CSS Is**: 
     - CSS (Cascading Style Sheets) is used to style and layout web pages. It controls color, fonts, spacing, and the general visual look.
     <details>
     <summary>same topics</summary>


     -  **Selectors**:
        - hello
        - hello
        - hello
     - **Element Selector**: Targets HTML tags directly (e.g., `p { color: blue; }`).
     - **Class Selector**: Targets elements with a specific class (e.g., `.container { padding: 20px; }`).
     - **ID Selector**: Targets a specific element by ID (e.g., `#header { background: red; }`).
   - **Box Model**: Understanding margin, padding, border, and content.
   - **CSS Properties**:
     - Color: `color`, `background-color`
     - Fonts: `font-size`, `font-family`
     - Spacing: `margin`, `padding`
     - Layout: `display`, `position`, `flexbox`
   - **Responsive Design**:
     - Using media queries (e.g., `@media screen and (max-width: 600px) { ... }`).
     - Mobile-first design principles.
   - **Basic Animations**: 
     - Using `transition`, `transform`, and `animation`.
     </details>
Sure! Below is a **complete, professional, and well-organized CSS note sheet** that covers everything from basic to advanced concepts. I’ve structured it in a clean and attractive way, with clear headings and subheadings. This will make it easy to read and understand for anyone.

---

Here’s the **final, combined, and comprehensive CSS note sheet** that integrates all the topics from the previous two sheets. This version is structured professionally, with clear headings, subheadings, and explanations for each property and concept. It’s designed to be a **one-stop resource** for learning CSS from basic to advanced levels.

---

# **Complete CSS Notes**

---

## **1. Introduction to CSS**
CSS (Cascading Style Sheets) is a stylesheet language used to style and layout web pages. It controls the visual presentation of HTML elements, including colors, fonts, spacing, and positioning.

---

## **2. Core Concepts**

### **2.1 Selectors**
Selectors are used to target HTML elements for styling.
- **Basic Selectors**:
  - Element: `p`, `div`, `h1`
  - Class: `.class-name`
  - ID: `#id-name`
- **Combinators**:
  - Descendant: `div p`
  - Child: `div > p`
  - Adjacent Sibling: `div + p`
  - General Sibling: `div ~ p`
- **Attribute Selectors**:
  - `[attr]`, `[attr=value]`, `[attr^=value]`, `[attr$=value]`, `[attr*=value]`

---

### **2.2 Pseudo-Selectors**
Pseudo-selectors allow you to style elements based on their state or position.
- **Pseudo-classes**:
  - `:hover`, `:focus`, `:active`, `:nth-child()`, `:first-child`, `:last-child`, `:not()`
- **Pseudo-elements**:
  - `::before`, `::after`, `::first-line`, `::first-letter`

---

### **2.3 Specificity & Cascade**
- **Specificity**: Determines which CSS rule is applied when multiple rules match an element. Calculated as:
  - Inline styles > IDs > Classes > Elements
- **Cascade**: The order in which CSS rules are applied, based on importance, specificity, and source order.

---

### **2.4 Inheritance**
- **Inherited Properties**: Properties like `color`, `font-family`, and `font-size` are inherited by child elements.
- **Non-inherited Properties**: Properties like `margin`, `padding`, and `border` are not inherited.
### **2.5 Nested CSS**
```
body{
  section{
    div{
      color:red;
    }
  }
}
```

---

## **3. Layout & Box Model**

### **3.1 Box Model**
The box model defines the structure of an element:
- **Content**: The actual content of the element.
- **Padding**: Space between the content and the border.
- **Border**: The border surrounding the padding.
- **Margin**: Space outside the border.

---

### **3.2 Positioning**
- **Static**: Default positioning.
- **Relative**: Positioned relative to its normal position.
- **Absolute**: Positioned relative to the nearest positioned ancestor.
- **Fixed**: Positioned relative to the viewport.
- **Sticky**: Hybrid of relative and fixed positioning.

---

### **3.3 Flexbox**
Flexbox is a one-dimensional layout model for arranging items in rows or columns.
- **Properties**:
  - `display: flex`
  - `flex-direction`, `justify-content`, `align-items`, `flex-wrap`

---

### **3.4 CSS Grid**
CSS Grid is a two-dimensional layout system for creating complex layouts.
- **Properties**:
  - `display: grid`
  - `grid-template-columns`, `grid-template-rows`, `gap`, `grid-area`

---

### **3.5 Logical Properties**
Logical properties use `inline` and `block` instead of `left/right/top/bottom` for better RTL (Right-to-Left) and vertical text support.

---

## **4. Styling & Design**

### **4.1 Fonts & Typography**
- **Font Properties**:
  - `font-family`, `font-size`, `font-weight`, `font-style`, `line-height`
- **Web Fonts**:
  - Use `@font-face` to load custom fonts.
- **Typography**:
  - `text-align`, `text-decoration`, `text-transform`, `letter-spacing`, `word-spacing`

---

### **4.2 Colors**
- **Color Formats**:
  - Hex: `#ffffff`
  - RGB: `rgb(255, 255, 255)`
  - HSL: `hsl(0, 100%, 100%)`
  - LCH/Lab: Advanced color spaces for better perceptual uniformity.

---

### **4.3 Shadows & Gradients**
- **Shadows**:
  - `box-shadow`, `text-shadow`
- **Gradients**:
  - Linear: `linear-gradient()`
  - Radial: `radial-gradient()`
  - Conic: `conic-gradient()`

---

### **4.4 Custom Properties (CSS Variables)**
- **Definition**:
  ```css
  :root {
    --primary-color: #3498db;
  }
  ```
- **Usage**:
  ```css
  .element {
    color: var(--primary-color);
  }
  ```

---

## **5. Responsive Design**

### **5.1 Media Queries**
Media queries allow you to apply styles based on device characteristics.
- **Syntax**:
  ```css
  @media (max-width: 768px) {
    /* Styles for screens smaller than 768px */
  }
  ```

---

### **5.2 Units**
- **Absolute Units**: `px`, `pt`, `cm`, `mm`, `in`
- **Relative Units**: `em`, `rem`, `%`, `vh`, `vw`, `vmin`, `vmax`

---

### **5.3 Overflow & Scroll Behavior**
- **Overflow**:
  - `visible`, `hidden`, `scroll`, `auto`
- **Scroll Behavior**:
  - `scroll-behavior: smooth`

---

## **6. Advanced Topics**

### **6.1 CSS Functions**
- **calc()**: Perform calculations (`width: calc(100% - 20px)`).
- **clamp()**: Define a value within a range (`font-size: clamp(1rem, 2.5vw, 2rem)`).
- **min() & max()**: Use minimum or maximum values.

---

### **6.2 Transforms & Animations**
- **Transforms**:
  - `translate()`, `rotate()`, `scale()`, `skew()`
- **Keyframe Animations**:
  ```css
  @keyframes slide {
    from { transform: translateX(0); }
    to { transform: translateX(100px); }
  }
  .element {
    animation: slide 2s infinite;
  }
  ```

---

### **6.3 CSS Houdini**
CSS Houdini provides low-level APIs for custom styling and animations.
- **Worklets**: JavaScript APIs for custom paint and layout.
- **Properties and Values API**: Register custom properties with types.

---

### **6.4 prefers-color-scheme**
- **Dark Mode**:
  ```css
  @media (prefers-color-scheme: dark) {
    /* Styles for dark mode */
  }
  ```

---

## **7. Properties Explained**

### **7.1 `border`**
- **What it does**: Defines the border around an element.
- **When to use**: When you want to add a visible border to an element.
- **How to apply**:
  ```css
  .element {
    border: 2px solid red; /* width | style | color */
  }
  ```

---

### **7.2 `background`**
- **What it does**: Sets the background of an element (color, image, gradient, etc.).
- **When to use**: When you want to style the background of an element.
- **How to apply**:
  ```css
  .element {
    background: linear-gradient(red, blue) no-repeat center/cover;
  }
  ```

---

### **7.3 `background-clip: text`**
- **What it does**: Clips the background to the text content.
- **When to use**: When you want to create text with a gradient or image fill.
- **How to apply**:
  ```css
  .element {
    background: linear-gradient(red, blue);
    background-clip: text;
    color: transparent;
  }
  ```

---

### **7.4 `outline-width`**
- **What it does**: Sets the width of the outline around an element.
- **When to use**: When you want to add a focus indicator (e.g., for accessibility).
- **How to apply**:
  ```css
  .element {
    outline-width: 3px;
    outline-style: solid;
    outline-color: blue;
  }
  ```

---

### **7.5 `inset`**
- **What it does**: Shorthand for `top`, `right`, `bottom`, and `left` in positioned elements.
- **When to use**: When positioning an element absolutely or fixed.
- **How to apply**:
  ```css
  .element {
    position: absolute;
    inset: 10px 20px 30px 40px; /* top | right | bottom | left */
  }
  ```

---

### **7.6 `aspect-ratio`**
- **What it does**: Sets the aspect ratio of an element (width-to-height ratio).
- **When to use**: When you want to maintain a specific ratio for responsive designs.
- **How to apply**:
  ```css
  .element {
    aspect-ratio: 16 / 9; /* width / height */
  }
  ```

---

### **7.7 `isolation`**
- **What it does**: Creates a new stacking context for an element.
- **When to use**: When you want to control how elements blend or stack.
- **How to apply**:
  ```css
  .element {
    isolation: isolate; /* Prevents blending with parent elements */
  }
  ```

---

### **7.8 `mix-blend-mode`**
- **What it does**: Defines how an element’s content blends with its background.
- **When to use**: When creating artistic or overlapping effects.
- **How to apply**:
  ```css
  .element {
    mix-blend-mode: multiply; /* Other values: screen, overlay, etc. */
  }
  ```

---

### **7.9 `grid-area`**
- **What it does**: Assigns an element to a specific area in a CSS Grid layout.
- **When to use**: When working with CSS Grid to define item placement.
- **How to apply**:
  ```css
  .element {
    grid-area: header; /* Assign to a named grid area */
  }
  ```

---

### **7.10 `counter-set`**
- **What it does**: Creates or resets a CSS counter.
- **When to use**: When numbering elements (e.g., lists, headings).
- **How to apply**:
  ```css
  .element {
    counter-set: section 1; /* Reset counter to 1 */
  }
  body {
  counter-reset: section;
  }
  h2::before {
  counter-increment: section;
  content: "Section " counter(section) ": ";}
  ```

---

### **7.11 `color-scheme`**
- **What it does**: Specifies the color scheme (light/dark) for an element.
- **When to use**: When supporting dark mode or light mode.
- **How to apply**:
  ```css
  .element {
    color-scheme: dark; /* Also supports 'light' or 'normal' */
  }
  ```

---

### **7.12 `columns`**
- **What it does**: Defines the number of columns and their width in a multi-column layout.
- **When to use**: When creating newspaper-like layouts.
- **How to apply**:
  ```css
  .element {
    columns: 2 200px; /* number of columns | column width */
  }
  ```

---

### **7.13 `word-break`**
- **What it does**: Controls how words break at the end of a line.
- **When to use**: When dealing with long words or text in small containers.
- **How to apply**:
  ```css
  .element {
    word-break: break-all; /* Other values: keep-all, break-word */
  }
  ```

---

### **7.14 `word-wrap`**
- **What it does**: Allows long words to break and wrap onto the next line.
- **When to use**: When preventing overflow caused by long words.
- **How to apply**:
  ```css
  .element {
    word-wrap: break-word; /* Also known as overflow-wrap */
  }
  ```

---

### **7.15 `writing-mode`**
- **What it does**: Defines the text orientation (horizontal or vertical).
- **When to use**: When creating vertical text or non-LTR layouts.
- **How to apply**:
  ```css
  .element {
    writing-mode: vertical-rl; /* Other values: horizontal-tb, vertical-lr */
  }
  ```

---

### **7.16 `clip-path`**
- **What it does**: Clips an element to a specific shape (circle, polygon, etc.).
- **When to use**: When creating custom shapes or masking elements.
- **How to apply**:
  ```css
  .element {
    clip-path: circle(50% at 50% 50%); /* Other shapes: polygon(), ellipse() */
  }
  ```

---

### **7.17 `mask`**
- **What it does**: Applies a mask to an element (e.g., gradient, image).
- **When to use**: When creating complex visual effects.
- **How to apply**:
  ```css
  .element {
    mask: linear-gradient(black, transparent);
  }
  ```

---

### **7.18 `mask-mode`**
- **What it does**: Defines how the mask is applied (alpha or luminance).
- **When to use**: When controlling the masking behavior.
- **How to apply**:
  ```css
  .element {
    mask-mode: alpha; /* Other values: luminance */
  }
  ```

---

## **8. CSS At-Rules**

### **8.1 `@property`**
- **What it does**: Defines custom CSS properties with types and constraints.
- **When to use**: When creating advanced, type-safe custom properties.
- **How to apply**:
  ```css
  @property --primary-color {
    syntax: '<color>';
    inherits: false;
    initial-value: blue;
  }
  ```

---

### **8.2 `@font-face`**
- **What it does**: Defines custom fonts for use in the document.
- **When to use**: When loading custom or web fonts.
- **How to apply**:
  ```css
  @font-face {
    font-family: 'MyFont';
    src: url('myfont.woff2') format('woff2');
  }
  ```

---

### **8.3 `@layer`**
- **What it does**: Defines a cascade layer for organizing styles.
- **When to use**: When managing specificity and order of styles.
- **How to apply**:
  ```css
  @layer base, theme, utilities;

  @layer base {
    body { font-size: 16px; }
  }
  ```

---

### **8.4 `@page`**
- **What it does**: Defines styles for printed pages.
- **When to use**: When creating print-friendly layouts.
- **How to apply**:
  ```css
  @page {
    size: A4;
    margin: 2cm;
  }
  ```

---

### **8.5 `@scope`**
- **What it does**: Scopes styles to a specific part of the document.
- **When to use**: When creating modular or component-based styles.
- **How to apply**:
  ```css
  @scope (.component) {
    h1 { color: red; }
  }
  ```

---

### **8.6 `:dir()`**
- **What it does**: Matches elements based on their text direction (LTR or RTL).
- **When to use**: When supporting multilingual or bidirectional text.
- **How to apply**:
  ```css
  :dir(rtl) {
    text-align: right;
  }
  ```

---

### **8.7 `:defined`**
- **What it does**: Matches elements that are defined (e.g., custom elements).
- **When to use**: When styling custom elements after they are registered.
- **How to apply**:
  ```css
  my-element:defined {
    display: block;
  }
  ```

---

### **8.8 `:any-link`**
- **What it does**: Matches any anchor element (`<a>`, `<area>`) with an `href` attribute.
- **When to use**: When styling all links uniformly.
- **How to apply**:
  ```css
  :any-link {
    color: blue;
  }
  ```

---

## **9. Conclusion**
This **complete CSS note sheet** covers everything from basic concepts to advanced properties and at-rules. It’s designed to be a **comprehensive resource** for learning and mastering CSS. Let me know if you need further assistance! 😊











### 3. **JavaScript Basics**
   [JavaScript I Have Learned](https://kazirobin.github.io/JavaScript_Practice/js/index.html)
   - **What JavaScript Is**: 
     - JavaScript is a programming language that allows you to make web pages interactive.
   - **Variables**:
     - `let`, `const`, `var` (basic understanding of scope and usage).
   - **Data Types**:
     - Numbers, Strings, Arrays, Objects, Booleans.
   - **Basic Operators**:
     - Arithmetic (`+`, `-`, `*`, `/`)
     - Assignment (`=`, `+=`, `-=`).
     - Comparison (`==`, `===`, `!=`, `!==`).
     - Logical (`&&`, `||`, `!`).
   - **Control Structures**:
     - `if` statements, `else`, `else if`.
     - Loops (`for`, `while`).
   - **Functions**:
     - Defining and invoking functions.
     - Parameters and return values.
   - **DOM Manipulation**:
     - Accessing elements (`document.getElementById()`, `document.querySelector()`).
     - Modifying content (`element.innerHTML`, `element.textContent`).
     - Event listeners (`element.addEventListener()`).
   - **Basic Events**:
     - Handling clicks, form submissions, hover effects.

### 4. **Putting It All Together**
   - **Creating Simple Web Pages**:
     - Build a simple multi-page website with links, styled with CSS, and basic interactivity using JavaScript.
   - **Project Example**:
     - Build a basic "To-Do List" with:
       - HTML structure.
       - CSS styling for a modern look.
       - JavaScript to add/remove tasks dynamically.
   - **Next Steps**: 
     - Learn about CSS frameworks (Tailwind CSS).
     - Dive deeper into JavaScript ES6+ features (like `arrow functions`, `promises`).
     - Explore JavaScript frameworks (React) and version control (Git).
     - I have tried to use GitHub by the desktop application.

---

### 5. **React.js**
   [React JS App Example](https://app-1-peach.vercel.app/)

   #### Steps I've Taken:
   - **Fetched Data**: Retrieved all data and displayed it in a main component as a card.
   - **useState Hook**: Used `useState` to save data and handle changes.
   - **Local Storage Functions**:
     ```js
     // Set Items
     const setLS = (key, value) => {
       localStorage.setItem(key, JSON.stringify(value));
     };

     // Get Items
     const getLS = (key, initialValue) => {
       const storeStr = localStorage.getItem(key);
       return storeStr ? JSON.parse(storeStr) : initialValue;
     };

     // Export functions
     export { setLS, getLS };
     ```

   - **Get Data from Local Storage**:
     ```js
     const [cook, setCook] = useState(() => getLS("cook", []));

     useEffect(() => {
       setLS("cook", cook);
     }, [cook]);
     ```

   - **Router**: Implemented basic routing for different pages (though link routing is currently not working properly).

---
