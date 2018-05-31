(function($) {
    $.fn.blink = function(options) {
        var defaults = {
            delay: 1000
        };
        var options = $.extend(defaults, options);

        return this.each(function() {
            var obj = $(this);
            setInterval(function() {
                if ($(obj).css("visibility") == "visible") {
                    $(obj).css('visibility', 'hidden');
                }
                else {
                    $(obj).css('visibility', 'visible');
                }
            }, options.delay);
        });
    }
}(jQuery)) 
/////////////////////////////////////////////

jQuery(document).ready(function() {
    jQuery('.blink').blink(); // default is 500ms blink interval.
    jQuery('.blink_second').blink({
        delay: 3000
    }); // causes a 100ms blink interval.
    $(".fly-in li").eq(0).animate({top: "-310px", left:"-250px"}, 1000);
		$(".fly-in li").eq(1).animate({top: "-200px", left:"-600px"}, 1000);
		$(".fly-in li").eq(3).animate({right:"-520px", top: "-85px"}, 1000);
		$(".fly-in li").eq(4).animate({right:"-200px", bottom: "-240px"}, 1000);
    
});



