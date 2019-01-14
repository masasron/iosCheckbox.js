iosCheckbox.js
==============

A jQuery plugin that transform any checkbox element into a beautiful ios style checkbox.

Demo: http://jsfiddle.net/bttkc3jg/31/
Demo Alternative Theme: http://jsfiddle.net/5xzevfq7/9/

Usage:

Include the css

```html
<link rel="stylesheet" type="text/css" href="./src/iosCheckbox.css" />
```

Add some checkboxs to your page

```html
<input type="checkbox" class="ios" checked />
<input type="checkbox" class="ios" />
```

Load jQuery and iosCheckbox 

```html
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script type="text/javascript" src="./src/iosCheckbox.js"></script>
```

Transform all checkboxs with the class of `ios`

```html
<script type="text/javascript">
	jQuery(function ($){
	     $(".ios").iosCheckbox();
	});
</script>
```

We also have a Zepto based version thanks to [Leo Unglaub](https://github.com/leo-unglaub) you can find it in [here](https://github.com/foxship/zepto-ios-checkbox.js)
