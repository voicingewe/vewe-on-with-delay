/**
 * veweOnWithDelay jQuery plugin
 * Author: Brian Grinstead
 * Modified: James Diss
 * Modified: Javier Solis
 * MIT license: http://www.opensource.org/licenses/mit-license.php
 * http://github.com/bgrins/bindWithDelay
 * http://briangrinstead.com/files/bindWithDelay
 * Usage: 
 *	See http://api.jquery.com/on/
 *	.veweOnWithDelay( eventType, [ eventData ], handler(eventObject), timeout, throttle )
 *
 * Examples:
 * 	$("#foo").veweOnWithDelay("click", function(e) { }, 100);
 * 	$(window).veweOnWithDelay("resize", { optional: "eventData" }, callback, 1000);
 *	$(window).veweOnWithDelay("resize", callback, 1000, true);
*/

(function($) {
$.fn.veweOnWithDelay = function( type, data, fn, timeout, throttle ) {
	
	if ( $.isFunction( data ) ) {
		throttle = timeout;
		timeout = fn;
		fn = data;
		data = undefined;
	}

	// Allow delayed function to be removed with fn in unbind function
	fn.guid = fn.guid || ($.guid && $.guid++);
	
	// Bind each separately so that each element has its own delay
	return this.each(function() {
        
        var wait = null;
        
        function cb() {
            var e = $.extend(true, { }, arguments[0]);
            var ctx = this;
            var throttler = function() {
            	wait = null;
            	fn.apply(ctx, [e]);
            };
            
            if (!throttle) { clearTimeout(wait); wait = null; }
            if (!wait) { wait = setTimeout(throttler, timeout); }
        }
        
        cb.guid = fn.guid;
        
        $(this).on(type, data, cb);
	});
	
	
}
})(jQuery);
