# One button -> Multiple targets
A lot of websites with scrolling contentes have multiple buttons that bring you to relevant sections of the page (like [this one](https://html5up.net/landed)).
In some situations I really don't like it, especially when in situations with full-height widths. For this reason, I made this code JS code which allows you to have **a single fixed button**, that **redirects your user to multiple relevant targets, based on their position the page**.

# Usage:
* Import `onebutton/multipletargets.js` on your html.
* Add `id = 'next_button'` to the button/link you want your users to click to move to your website's important sections.
* Add `class = 'target_element'` to the sections you want your magic button direct your users to.

That's it! You can try it out on [this codepen](http://codepen.io/gianlucahmd/pen/apyXjV), or read this [Medium post](https://medium.com/@gianlucahmd/jquery-tricks-one-button-multiple-targets-eb3a4d71f3dd) for in-depth explenation (if you need).