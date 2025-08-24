// note what are events in JS ?
//An event in JavaScript is an action or occurrence that happens in the browser, usually as a result of user interaction or the browser itself.
// JavaScript can “listen” for these events and run some code when they happen.

/* Examples of Events

User interactions:

click → when the user clicks a button.
keydown / keyup → when a key is pressed or released.
mouseover → when the mouse pointer goes over an element.
submit → when a form is submitted.

Browser events:

load → when a webpage finishes loading.
resize → when the window is resized.
scroll → when the page is scrolled.

Input events:

change → when the value of an input changes.
input → when the user types in a text field. */

//syntax for events in js: 'element.addEventListener(event, callback, useCapture);'

// events can be used in JS by using 'addEventListner('', funcion(){})' syntax
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  alert("Button clicked!");
});

//useCapture: A boolean (true or false) that decides when the event should be handled in the event flow.
/* Event Flow in JavaScript

Events in the DOM have two main phases:

Capturing Phase (Event Capture) → Event travels from the root (document) down to the target element.
Bubbling Phase (Event Bubble) → After reaching the target, the event bubbles back up to the root. 

If useCapture = true → handler will run during capturing phase.
If useCapture = false (default) → handler will run during bubbling phase.
*/

/* 'Common Event methods'

1. 'event.preventDefault()'
Stops the default action of an element from happening.
Example: Preventing a form from submitting or a link from navigating.

2. 'event.stopPropagation()'
Prevents the event from bubbling up or capturing down to parent elements.

3. 'event.stopImmediatePropagation()'
Stronger version of stopPropagation()
Stops the event from:
Bubbling/Capturing further, and
Running any more listeners on the same element.

4.' event.target'
The actual element that triggered the event (deepest element clicked).

5. 'event.currentTarget'
Refers to the element whose listener is currently running.
Useful in delegation.
(Different from event.target, which is the element that was actually clicked).


6. 'event.type'
Returns the type of the event ("click", "submit", "keydown" etc.).

7. 'event.eventPhase'
Tells in which phase the event is currently being handled:
1 → Capturing
2 → At target
3 → Bubbling
*/