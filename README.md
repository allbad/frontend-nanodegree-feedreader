# Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

# Thanks to ...

For initial help with getting used to Jasmine -

* [Evan Hahn](http://evanhahn.com/how-do-i-jasmine/)
* [Tuts+](http://code.tutsplus.com/tutorials/testing-your-javascript-with-jasmine--net-21229)
* [Codeship](https://blog.codeship.com/jasmine-testing-javascript/
)
* [Codeship again](https://blog.codeship.com/jasmine-async-testing/)
* [Integralist](http://www.integralist.co.uk/posts/guide-to-js-testing.html)

For useful tips (not yet implemented)

* [Test Driven Websites](http://testdrivenwebsites.com/2010/08/04/custom-jquery-matchers-in-jasmine/)

# How to use ...

Clone or download this repository to your desktop and then simply open index.html into a browser.  Preferred browser is Chrome.

You can also see a demo at [Github Pages](http://allbad.github.io/frontend-nanodegree-feedreader/)

# The tests

RSS Feeds

* are defined
* have a URL defined for each feed
* have a name defined for each feed

The Menu

* is hidden by default
* toggles visibility when the menu icon is clicked

Initial Entries

* load at least one .entry element

New Feed Selection

* checks content changes when new feed is loaded