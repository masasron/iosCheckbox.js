iosCheckbox.js
==============

A jQuery plugin that transform any checkbox element into a beautiful ios style checkbox.

![alt tag](http://s15.postimg.org/gbyj9pzk7/ios_Checbox.png)

Usage:

Include the css

```
<link rel="stylesheet" type="text/css" href="iosCheckbox.css" />
```

Add some checkboxs to your page

```
<input type="checkbox" class="ios" checked />
<input type="checkbox" class="ios" />
```

Load jQuery and iosCheckbox 

```
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<!-- Include iosCheckbox -->
<script type="text/javascript" src="iosCheckbox.js"></script>
```

Transform all checkboxs with the class of `ios`

```
<script type="text/javascript">
	jQuery(function ($){
		$(".ios").iosCheckbox();
	});
</script>
```
