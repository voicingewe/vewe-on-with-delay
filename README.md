veweOnWithDelay jQuery plugin
Author: Brian Grinstead
Modified: Javier Solis
MIT license: http://www.opensource.org/licenses/mit-license.php

http://github.com/bgrins/bindWithDelay
http://briangrinstead.com/files/bindWithDelay

Modified to use .on rather than .bind for 1.6+ JQuery

Usage: 
	See http://api.jquery.com/on/
	.onWithDelay( eventType, [ eventData ], handler(eventObject), timeout, throttle )

Examples:
	$("#foo").onWithDelay("click", function(e) { }, 100);
	$(window).onWithDelay("resize", { optional: "eventData" }, callback, 1000);
	$(window).onWithDelay("resize", callback, 1000, true);
