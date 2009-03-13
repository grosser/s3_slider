s3_slider
========
S3 Slider is a simple slideshow that displays images with their description.  
This is an complete rewrite to make it smaller / simpler / more elegant.

Works in IE6 + the rest.

[Demo(older version, new looks similar)](http://www.serie3.info/s3slider/demonstration.html) or [Simple demo of new version](http://rathershort.com)

Installation
============
Download s3-slider.js / s3-slider.css (choose minified version for production).
    <div id="slider">
      <div class="slide">
        <img src="demo/1.jpg"/>
        <span> <b>A Tile is good</b><br/>Some text long or short text should be placed here to inform customers of your great products...</span>
      </div>
      <div class="slide">
        <img src="demo/4.jpg"/>
        <span> Finally a short text...</span>
      </div>
    </div>

    <script>
    jQuery(function($){
      $('#slider').s3Slider({timeout:6000,fadeTime:1000});
    });
    </script>

In IE6 the animation will start with a instant fade from blank->image, if you do no like this,
make the first slide visible (display:block)

Options
=======
    timeout : miliseconds or 'slow'/'fast'     default: 6000
    fadeTime : miliseconds or 'slow'/'fast'    default: 1000

Authors
=======
Current version:  [Michael Grosser](http://pragmatig.wordpress.com)

Original:  
Developped By: [Boban Karišik](http://www.serie3.info/)  
CSS Help: [Mészáros Róbert](http://www.perspectived.com/)