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
  var timeout     = vars.timeout || vars.timeOut || 6000;//timeOut is deprecated...
  var fadeTime    = vars.fadeTime || 1000;
  var current     = 0;
  var mouseOver   = false;
  var items       = $(".slide", $slider);
  var spanOpacity = vars.spanOpacity || 0.7;

  //Track mouseover
  $slider.mouseover(function() {
    mouseOver = true;
  });
  $slider.mouseout(function() {
    mouseOver = false;
  });

  function visible(item){
    return item.css('display')!='none'
  }

  function slide(){
    var item = $(items[current]);
    var span = $('span',item);
    var span_is_blank = !span.html() ||  /^\s*$/.test(span.html());
    if(span_is_blank){span.hide();span = $('<span>')};//fade this null-element in case no span was found
    if(visible(item)) {
      fadeOut(item,span);
      current = (current + 1) % items.length;
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
    item.fadeIn(fadeTime, function() {
      //normally fadeIn would be sufficient, but IEs need explicit opacity value [mcritchlow]
      span.css("opacity",0).show().fadeTo(fadeTime,spanOpacity,function(){
        setSlideTimeout(timeout)//=> wait ...
      })
    })
  }

  function fadeOut(item,span){
    span.fadeOut('slow',function(){
      item.fadeOut(fadeTime,function(){
        slide()//=> fadeIn
      })
    })
  }

  //GO!
  $('span',items[0]).css('opacity',spanOpacity); //set initial opacity
  setSlideTimeout(visible($(items[0])) ? timeout : 0); //start sliding
};


})(jQuery);  
