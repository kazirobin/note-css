

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

## **7. Tools & Best Practices**

### **7.1 CSS Preprocessors**
- **SASS/SCSS**: Adds features like variables, nesting, and mixins.
- **LESS**: Similar to SASS but with a different syntax.

---

### **7.2 CSS Frameworks**
- **Bootstrap**: Predefined components and utilities.
- **Tailwind CSS**: Utility-first CSS framework.

---

### **7.3 Performance Optimization**
- **Minification**: Reduce file size.
- **Critical CSS**: Load above-the-fold styles first.
- **Avoiding Repaints and Reflows**: Optimize rendering performance.

---

### **7.4 Accessibility**
- **Focus Styles**: Ensure interactive elements are keyboard accessible.
- **ARIA Attributes**: Enhance accessibility with CSS.

---

## **8. Resources**
- **Browser DevTools**: Inspect and debug CSS.
- **CSS Validators**: Check for errors in your CSS.
- **Online Playgrounds**: CodePen, JSFiddle, etc.

---

This **complete CSS note sheet** is now professional, well-structured, and easy to follow. You can add code examples, diagrams, or links to resources to make it even more engaging! Let me know if you need further assistance. 😊











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
