# veweOnWithDelay jQuery Plugin (see example)
Author: Brian Grinstead
Modified: James Diss
Modified: Javier Solis
MIT license: http://www.opensource.org/licenses/mit-license.php
http://github.com/bgrins/bindWithDelay
http://briangrinstead.com/files/bindWithDelay
# The Basics
#### What does veweOnWithDelay do? 
It prevents a function call from happening EVERY time an event is fired from the browser.
Rather than implementing custom timeout code, just add in this plugin and simplify your code.

#### How do I use it in code?
Pretty much the same as http://api.jquery.com/on/
```javascript
element.veweOnWithDelay( eventType, [ eventData ], handler(eventObject), timeout, throttle )
```
It works with existing code that uses the on() function. Just add an extra parameter (timeout in milliseconds), and an optional boolean value if you would like to enable throttling.

# Notice
Modified to use .on rather than .bind for 1.6+ JQuery

# Install
```bash
npm i -S vewe-on-with-delay
```

# Usage
See http://api.jquery.com/on/
```javascript
.veweOnWithDelay( eventType, [ eventData ], handler(eventObject), timeout, throttle )
```

# Examples
```javascript
$("#foo").veweOnWithDelay("click", function(e) { }, 100);
$("#foo").veweOnWithDelay("click", function() {...}, 1000, true);
$(window).veweOnWithDelay("resize", { optional: "eventData" }, callback, 1000);
$(window).veweOnWithDelay("resize", callback, 1000, true);
```