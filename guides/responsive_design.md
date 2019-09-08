---
layout: default
---

# Coding responsive pages

## First steps

The first step in creating our responsive design is to add a meta viewport tag to our HTML header. This gives the browser instructions on how to control the page's dimensions and scaling. From the [Google responsive design fundamentals](https://developers.google.com/web/fundamentals/design-and-ux/responsive/), TL;DR:

* Use the meta viewport tag to control the width and scaling of the browser's viewport.
* Include width=device-width to match the screen's width in device-independent pixels.
* Include initial-scale=1 to establish a 1:1 relationship between CSS pixels and device-independent pixels.
* Ensure your page is accessible by not disabling user scaling.


The meta tag looks like this:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

and implemented in an html document, looks like this:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Our Responsive Page</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>

</body>
</html>
```

## Creating Structure

Add some ```div```s to the document and wrap them in another ```div``` to allow for a flexbox layout.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Our Responsive page</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
  <div class="flex">
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
  </div>
</body>
</html>
```

## Adding Style

Next we need to add a stylesheet to our document and link to it in our html document. In the same directory as the html file, create a ```style.css``` file.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Our Responsive page</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <div class="flex">
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
  </div>
</body>
</html>
```

Turning to our stylesheet, we need to add some rules so our ```div```s show up as cubes. 

```css
.flex {
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid white;
}

.cube {
  margin: 20px auto;
  width: 200px;
  height: 200px;
  background-color: blue;
}
```

However, in order to have the page adapt to screen width, we need to add a mediaquery to the css. At a min-width of 700px, we can tell the flexbox layout to wrap, change the flex direction, and justify our content differently. 

```css
.flex {
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid white;
}

.cube {
  margin: 20px auto;
  width: 200px;
  height: 200px;
  background-color: blue;
}

/*tablet stuff :-/ */
@media (min-width: 700px) {
  .flex {
    /*flex wrap tells the cubes to wrap around*/
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: row;
  }

  .cube {
    width: 50px;
    height: 50px;
  }
}
```

## End result

Below is the end result. Try resizing the browser to see how it behaves!

  <style type="text/css">
    .flex {
      display: flex;
      flex-direction: column;
      width: 100%;
      border: 1px solid white;
      margin-bottom: 50px
    }

    .cube {
      margin: 20px auto;
      width: 200px;
      height: 200px;
      background-color: blue;
    }
    /*end of my mobile layout!!*/

    /*tablet stuff :-/ */
    @media (min-width: 700px) {
      .flex {
        /*flex wrap tells the cubes to wrap around*/
        flex-wrap: wrap;
        justify-content: space-between;
        flex-direction: row;
      }

      .cube {
        width: 50px;
        height: 50px;
      }
    }
  </style>
  <div class="flex">
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
  </div>


  You can read more about how to apply media queries [here](https://medium.com/beginners-guide-to-mobile-web-development/media-queries-54a1a463356f), and more about responsive design [here](https://developers.google.com/web/fundamentals/design-and-ux/responsive/).