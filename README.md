# veweOnWithDelay jQuery plugin
	Author: Brian Grinstead
	Modified: Javier Solis
	MIT license: http://www.opensource.org/licenses/mit-license.php
	http://github.com/bgrins/bindWithDelay
	http://briangrinstead.com/files/bindWithDelay

# Notice
	Modified to use .on rather than .bind for 1.6+ JQuery

# Install
```bash
npm i -S vewe-on-with-delay
```

# Usage
	See http://api.jquery.com/on/
	.onWithDelay( eventType, [ eventData ], handler(eventObject), timeout, throttle )

# Examples
```javascript
$("#foo").veweOnWithDelay("click", function(e) { }, 100);
$(window).veweOnWithDelay("resize", { optional: "eventData" }, callback, 1000);
$(window).veweOnWithDelay("resize", callback, 1000, true);
```
