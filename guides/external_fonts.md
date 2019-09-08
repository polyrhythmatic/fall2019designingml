---
layout: default
---
# Loading External Fonts

External fonts can be loaded using the CSS `@font-face` property (read in depth [here](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face)). In order to load a font, you must have a copy of it on your computer. Start by finding a font that you like - [Velvetyne Type Foundry](https://velvetyne.fr/) is a good source and provides all the correct formats. 

Fonts should be in the format of WOFF or WOFF2 for modern browser compatibility. Just like images can be .png or .jpg, fonts come in a number of different formats. If your font is not a WOFF, use a site like [https://onlinefontconverter.com/](https://onlinefontconverter.com/) to convert it.

Once you have your font, place it either in the root of your site directory, or in another folder named fonts if you have multiple files and want to keep things organized. Your directory should look something like this:

![alt text]({{ "assets/guides/external_fonts/directory.png" | absolute_url }})

The contents of your style.css should contain the following:

```css
@font-face {
  font-family: "Our-font-name";
  src: url("fonts/VTF_Mixo.woff2") format("woff2");
}

h1 {
  font-family: "Our-font-name";
}
```

And your HTML should look like this


```html
<!DOCTYPE html>
<html>
<head>
  <title>How 2 use fonts!</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <h1>This is our *very* cool header</h1>
</body>
</html>
```

If you did everything correctly, your font should load! You can apply this font to any element in your page. Try creating a class and using that to apply the font wherever needed.

![alt text]({{ "assets/guides/external_fonts/completed.png" | absolute_url }})
