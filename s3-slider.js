/* ------------------------------------------------------------------------
	s3Slider

  Current version:
    Michael Grosser -> http://pragmatig.wordpress.com

  Original:
    Developped By: Boban Karišik -> http://www.serie3.info/
          CSS Help: Mészáros Róbert -> http://www.perspectived.com/

	Copyright: Redistribute, but keep infos at the top.
------------------------------------------------------------------------- */


(function($){


$.fn.s3Slider = function(vars) {
  vars = vars || {};
  var $slider     = $(this);
  var timeOut     = vars.timeOut || 6000;
  var fadeTime    = vars.fadeTime || 1000;
  var current     = 0;
  var fadedIn     = true;
  var mouseOver   = false;
  var items       = $(".slide", $slider);

  //Track mouseover
  $slider.mouseover(function() {
    mouseOver = true;
  });
  $slider.mouseout(function() {
    mouseOver = false;
  });


  function slide(){
    current = current % items.length; //cycle
    var item = $(items[current]);
    var span = $('span',item);

    if(fadedIn) {
      fadeOut(item,span);
      current++;
    } else {
      span.hide();
      fadeIn(item,span);
    }
  }

  function setSlideTimeout(time) {
    setTimeout(trySlide, time);
  }

  //if user blocks, then try again in a bit...
  function trySlide(){
    if(mouseOver){
      setSlideTimeout(fadeTime)
    } else {
      slide();
    }
  }

  function fadeIn(item,span){
    var success = function(){
      fadedIn = true;
      setSlideTimeout(timeOut);
    };
    item.fadeIn(fadeTime, function() {
      span.fadeIn(fadeTime,success);
    });
  }

  function fadeOut(item,span){
    var success = function(){
      fadedIn = false;
      slide();//=> fadeIn
    };
    span.fadeOut('slow',function(){
      item.fadeOut(fadeTime,success);
    })
  }

  setSlideTimeout(timeOut);//start!
};


})(jQuery);  