npm init -y
npm install -g sass
sass --version
sass --watch scss/styles.scss:css/styles.css


@function set-color($color){
  @if(lightness($color) > 50){
    @return #000;
  }@else{
    @return #fff;
  }
}
div{
 background-color: $light-color;
 color:set-color($light-color);
 margin: 5px;
}  


Sass (Syntactically Awesome Stylesheets) is a powerful CSS preprocessor that extends CSS with features that make styling easier and more maintainable. Here are its most **useful features**:

---

## **1. Variables (`$`)**
Sass allows you to define variables to store colors, font sizes, and other reusable values.

### **Example:**
```scss
$primary-color: #3498db;
$text-color: #333;
$padding: 10px;

body {
  color: $text-color;
  background: $primary-color;
  padding: $padding;
}
```
✅ **Benefits**: Reusability, consistency, and easy theme changes.

---

## **2. Nesting**
Sass allows you to nest selectors inside each other, making the code cleaner and more structured.

### **Example:**
```scss
nav {
  background: #eee;

  ul {
    list-style: none;

    li {
      display: inline-block;

      a {
        text-decoration: none;
        color: #333;
      }
    }
  }
}
```
✅ **Benefits**: Cleaner structure, avoids repetitive selectors.

---

## **3. Mixins (`@mixin` & `@include`)**
Mixins allow you to create reusable blocks of CSS with parameters.

### **Example:**
```scss
@mixin flex-center($justify: center, $align: center) {
  display: flex;
  justify-content: $justify;
  align-items: $align;
}

.container {
  @include flex-center(center, center);
}
```
✅ **Benefits**: Reusable styles with dynamic values.

---

## **4. Inheritance (`@extend`)**
Sass allows you to share styles between selectors with `@extend`, reducing redundancy.

### **Example:**
```scss
%button-shared {
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
}

.btn-primary {
  @extend %button-shared;
  background: blue;
  color: white;
}

.btn-secondary {
  @extend %button-shared;
  background: gray;
  color: black;
}
```
✅ **Benefits**: Avoids duplicate code, promotes reuse.

---

## **5. Operators (Math in CSS)**
Sass supports arithmetic operations like `+`, `-`, `*`, `/`, and `%`.

### **Example:**
```scss
$base-size: 16px;

h1 {
  font-size: $base-size * 2;
}

.container {
  width: 100% - 20px;
}
```
✅ **Benefits**: Dynamic calculations in styles.

---

## **6. Partials (`_file.scss`) & Importing (`@use` & `@import`)**
Sass allows you to split styles into multiple files and import them.

### **Example:**
```scss
// _variables.scss
$primary-color: #e74c3c;

// _buttons.scss
@use "variables";

.btn {
  background: variables.$primary-color;
}
```
✅ **Benefits**: Modular and maintainable code.

---

## **7. Loops (`@for`, `@each`, `@while`)**
You can use loops to generate repetitive styles dynamically.

### **Example (Creating Multiple Classes Dynamically):**
```scss
@for $i from 1 through 5 {
  .box-#{$i} {
    width: $i * 10px;
    height: $i * 10px;
  }
}
```
✅ **Benefits**: Automates repetitive styles.

---

## **8. Conditionals (`@if`, `@else`, `@mixin` with logic)**
You can use conditional logic in your styles.

### **Example:**
```scss
@mixin theme($mode) {
  @if $mode == dark {
    background: black;
    color: white;
  } @else {
    background: white;
    color: black;
  }
}

body {
  @include theme(dark);
}


@function set-bg($color){
  @if(lightness($color) > 70){
    @return #000
  }@else {
    @return #fff
  }
}
.dark{
  background-color: #fff;
  color: set-bg(#fff);
}
```
✅ **Benefits**: Dynamic styling based on conditions.

---

## **9. Maps (`@each` with `$map`)**
Maps allow you to store and use key-value pairs.

### **Example:**
```scss
$colors: (
  primary: #3498db,
  secondary: #2ecc71,
  danger: #e74c3c
);

@each $name, $color in $colors {
  .btn-#{$name} {
    background: $color;
    color: white;
  }
}
```
✅ **Benefits**: Organizes values in an easy-to-use format.

---

## **10. Built-in Functions**
Sass includes many useful functions for manipulating colors, strings, and numbers.

### **Example:**
```scss
$primary: #3498db;

button {
  background: lighten($primary, 10%);
  border: 1px solid darken($primary, 10%);
}
```
✅ **Benefits**: Makes styling dynamic and flexible.

---

## **Conclusion**
Sass extends CSS with **variables, nesting, mixins, loops, functions, and modularization**, making styles **cleaner, reusable, and easier to maintain**.  

Would you like an example project to explore these features in action?
