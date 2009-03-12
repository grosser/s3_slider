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
  var fading      = false;
  var mouseOver   = false;
  var items       = $(".slide", $slider);

  //Track mouseover
  $slider.mouseover(function() {
    mouseOver = true;
  });
  $slider.mouseout(function() {
    mouseOver = false;
    setSlideTimeout(timeOut/4);
  });


  function slide(){
    if(mouseOver && fadedIn)return;
    
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

  function setSlideTimeout(timeout) {
    if(fading)return;//no duplicate calls...
    setTimeout(slide, timeout);
  }

  function fadeIn(item,span){
    fading = true;
    var success = function(){
      fadedIn = true;
      fading = false;
      setSlideTimeout(timeOut)
    };
    item.fadeIn(fadeTime, function() {
      span.fadeIn(fadeTime,success);
    });
  }

  function fadeOut(item,span){
    fading = true;
    var success = function(){
      fading = false;
      fadedIn = false;
      setSlideTimeout(0);
    };
    span.fadeOut('slow',function(){
      item.fadeOut(fadeTime,success);
    })
  }

  setSlideTimeout(timeOut);//start!
};


})(jQuery);  