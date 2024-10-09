

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
   - **Selectors**:
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
