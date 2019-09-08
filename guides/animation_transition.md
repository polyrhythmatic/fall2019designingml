---
layout: default
---
# CSS transition

CSS allows us to control the transition of certain element properties as they change (read more [here](https://www.w3schools.com/css/css3_transitions.asp)). When combined with the [:hover](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover) selector, we can create a unique animation when the user hovers over an element.

Setting up a basic `HTML` page, we create a series of `div`s as follows.

```html
<!DOCTYPE html>
<html>
<head>
  <title>CSS Animations and Transitions</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <div class="sun-wrapper">
    <div class="sun"></div>
  </div>
</body>
</html>
```

In order to create our sun element, we first define the height and width of our sun element. Applying a border-radius of half the width makes the square into a circle (try removing or changing this to get a better understanding).

```css
.sun-wrapper {
  height: 200px;
  width: 200px;
  overflow: hidden;
  border: 1px solid blue;
  background-color: lightblue;
}

.sun {
  width: 200px;
  height: 200px;
  background-color: orange;
  border-radius: 100px;
}
```

you can see our sun below:

<style type="text/css">
.sun-wrapper-1 {
  height: 200px;
  width: 200px;
  overflow: hidden;
  border: 1px solid blue;
  background-color: lightblue;
  margin-bottom: 50px;
}

.sun-1 {
  width: 200px;
  height: 200px;
  background-color: orange;
  border-radius: 100px;
}
</style>
<div class="sun-wrapper-1">
  <div class="sun-1"></div>
</div>

Using the `:hover` selector, we can make add rules to change the `background-color` of `sun` and `sun-wrapper`, as well as a `transform` rule that causes `sun` to move out of the wrapper `div`. The wrapper has `overflow` set to `hidden` in order to hide anything that extends beyond view. Notice the selector we are using for `sun-wrapper`. What it says is "when you hover over `sun-wrapper`, the rule for anything inside named `sun` is `background-color: red` and `transform: translateY(200px)`"

```css
.sun-wrapper:hover {
  background-color: #ff2b0f;
}

.sun-wrapper:hover .sun {
  background-color: red;
  transform: translateY(200px);
}
```

Combining these, we get the below result:

<style type="text/css">
.sun-wrapper-2 {
  height: 200px;
  width: 200px;
  overflow: hidden;
  border: 1px solid blue;
  background-color: lightblue;
  margin-bottom: 50px;
}

.sun-wrapper-2:hover {
  background-color: #ff2b0f;
}

.sun-wrapper-2:hover .sun-2 {
  background-color: red;
  transform: translateY(200px);
}

.sun-2 {
  width: 200px;
  height: 200px;
  background-color: orange;
  border-radius: 100px;
}
</style>
<div class="sun-wrapper-2">
  <div class="sun-2"></div>
</div>

This happens way too fast! So we're going to add a transition for our properties. We need to tell the browser what property (or properties) to transition (transition-property), how long to take (transition-duration), which easing function to use (transition-timing-function), and (if any) how much delay before the transition begins (transition-delay). Notice how on `sun`, we have two different properties to transition, separated by commas. We do the same with duration and timing function to match.

```css
.sun-wrapper {
  height: 200px;
  width: 200px;
  overflow: hidden;
  border: 1px solid blue;
  transition: background 4s ease-in-out;
  background-color: lightblue;
}

.sun-wrapper:hover {
  background-color: #ff2b0f;
}

.sun-wrapper:hover .sun {
  background-color: red;
  transform: translateY(200px);
}

.sun {
  width: 200px;
  height: 200px;
  background-color: orange;
  border-radius: 100px;
  transition-property: background-color, transform;
  transition-duration: 4s, 4s;
  transition-timing-function: ease-in-out, linear;
}
```

assembled, we get the following. Try mousing over it!

<style type="text/css">
.sun-wrapper-3 {
  height: 200px;
  width: 200px;
  overflow: hidden;
  border: 1px solid blue;
  transition: background 4s ease-in-out;
  background-color: lightblue;
  margin-bottom: 50px;
}

.sun-wrapper-3:hover {
  background-color: #ff2b0f;
}

.sun-wrapper-3:hover .sun-3 {
  background-color: red;
  transform: translateY(200px);
}

.sun-3 {
  width: 200px;
  height: 200px;
  background-color: orange;
  border-radius: 100px;
  transition-property: background-color, transform;
  transition-duration: 4s, 4s;
  transition-timing-function: ease-in-out, linear;
}
</style>
<div class="sun-wrapper-3">
  <div class="sun-3"></div>
</div>


# CSS animation

Now what if we want this to continually animate, without user interaction? The best way to do this is with [CSS animations](https://www.w3schools.com/css/css3_animations.asp). Just like `transition`, `animation` allows us to define a property to be animated. It differs in that it allows us more fine grained control over the animation process through the `@keyframes` property.

To begin, we add a more elements to our `HTML` to create a moon.

```html
<!DOCTYPE html>
<html>
<head>
  <title>CSS Animations and Transitions</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <div class="sun-wrapper">
    <div class="sun"></div>
  </div>
  <div class="moon-wrapper">
    <div class="moon"></div>
  </div>
</body>
</html>
```

and we give it similar properties to the `sun` element

```css
.moon-wrapper {
  height: 200px;
  width: 200px;
  border: 1px solid blue;
  background-color: black;
  overflow: hidden;
}

.moon {
  height: 200px;
  width: 200px;
  border-radius: 100px;
  background-color: lightyellow;
}
```

Our result should look like the below:
<style type="text/css">
.moon-wrapper-1 {
  height: 200px;
  width: 200px;
  border: 1px solid blue;
  background-color: black;
  overflow: hidden;
  margin-bottom: 50px;
}

.moon-1 {
  height: 200px;
  width: 200px;
  border-radius: 100px;
  background-color: lightyellow;
}
</style>
  <div class="moon-wrapper-1">
    <div class="moon-1"></div>
  </div>

In order to use the `animation` property, we must first define our `@keyframe`. `@keyframe` allows us to define the behavior of our animation at specific points. One way we can do this is by defining `from` and `to` points - the beginning and end. Another way we can do this (with much finer control) is to set the different properties at various percentages of the animation. Below we can see `riseandset` simply defines the beginning and end, whereas the `moonsky` keyframe defines three points - beginning, middle, and end. Both are valid and allow different levels of control.

```css
@keyframes riseandset {
  from {
    transform: translateY(-200px);
  }

  to {
    transform: translateY(200px);
    background-color: yellow;
  }
}

@keyframes moonsky {
  0% {
    background-color: black;
  }

  50% {
    background-color: red;
  }

  100% {
    background-color: lightblue;
  }
}
```

We now need to tell our moon elements what animation to do. We do this with the `animation-name` property. Like the transition property, we also set the duration and timing function via the similarly named `animation-duration` and `animation-timing-function` properties. New to the scene are `animation-iteration-count`, where you can specify how many times the animation should repeat, and `animation-direction`, where you can specify `reverse`, `alternate`, and more. We use `alternate` in order to 

```css
.moon-wrapper {
  height: 200px;
  width: 200px;
  border: 1px solid blue;
  background-color: black;
  overflow: hidden;
  animation-name: moonsky;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-direction: alternate;
}

.moon {
  height: 200px;
  width: 200px;
  border-radius: 100px;
  background-color: lightyellow;
  animation-name: riseandset;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-direction: alternate;
}
```

Putting this all together, we end up with the below sketch:

<style type="text/css">
  .sun-wrapper {
  height: 200px;
  width: 200px;
  overflow: hidden;
  border: 1px solid blue;
  transition: background 4s ease-in-out;
  background-color: lightblue;
}

.sun-wrapper:hover {
  background-color: #ff2b0f;
}

.sun-wrapper:hover .sun {
  background-color: red;
  transform: translateY(200px);
}

.sun {
  width: 200px;
  height: 200px;
  background-color: orange;
  border-radius: 100px;
  transition-property: background-color, transform;
  transition-duration: 4s, 4s;
  transition-timing-function: ease-in-out, linear;
}

.moon-wrapper {
  height: 200px;
  width: 200px;
  border: 1px solid blue;
  background-color: black;
  overflow: hidden;
  animation-name: moonsky;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-direction: alternate;
  margin-bottom: 50px;
}

.moon {
  height: 200px;
  width: 200px;
  border-radius: 100px;
  background-color: lightyellow;
  animation-name: riseandset;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-direction: alternate;
}

@keyframes riseandset {
  from {
    transform: translateY(-200px);
  }

  to {
    transform: translateY(200px);
    background-color: yellow;
  }
}

@keyframes moonsky {
  0% {
    background-color: black;
  }

  50% {
    background-color: red;
  }

  100% {
    background-color: lightblue;
  }
}
</style>
  <div class="sun-wrapper">
    <div class="sun"></div>
  </div>
  <div class="moon-wrapper">
    <div class="moon"></div>
  </div>

Final CSS file:

```css
.sun-wrapper {
  height: 200px;
  width: 200px;
  overflow: hidden;
  border: 1px solid blue;
  transition: background 4s ease-in-out;
  background-color: lightblue;
}

.sun-wrapper:hover {
  background-color: #ff2b0f;
}

.sun-wrapper:hover .sun {
  background-color: red;
  transform: translateY(200px);
}

.sun {
  width: 200px;
  height: 200px;
  background-color: orange;
  border-radius: 100px;
  transition-property: background-color, transform;
  transition-duration: 4s, 4s;
  transition-timing-function: ease-in-out, linear;
}

.moon-wrapper {
  height: 200px;
  width: 200px;
  border: 1px solid blue;
  background-color: black;
  overflow: hidden;
  animation-name: moonsky;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-direction: alternate;
  margin-bottom: 50px;
}

.moon {
  height: 200px;
  width: 200px;
  border-radius: 100px;
  background-color: lightyellow;
  animation-name: riseandset;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-direction: alternate;
}

@keyframes riseandset {
  from {
    transform: translateY(-200px);
  }

  to {
    transform: translateY(200px);
    background-color: yellow;
  }
}

@keyframes moonsky {
  0% {
    background-color: black;
  }

  50% {
    background-color: red;
  }

  100% {
    background-color: lightblue;
  }
}
```