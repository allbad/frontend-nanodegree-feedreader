/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

    /* First test suite is all about the RSS feeds definitions,
    *  the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {

        /* Tests to make sure that the allFeeds variable has been
         * defined and that it is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Test that loops through each feed in the allFeeds object and
         * ensures it has a URL defined and that the URL is not empty.
         */
        it('have a URL defined for each feed', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            });
        });

        /* Test that loops through each feed in the allFeeds object and
         * ensures it has a name defined and that the name is not empty.
         */
        it('have a name defined for each feed', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            });
        });
    });

    /* Test suite named "The menu" */
    describe('The Menu', function() {
        var body = $('body'),
            menuIconLink = $('.menu-icon-link');

        /* Test that ensures the menu element is hidden by default.
         */
        it('is hidden by default', function() {
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

        /* Test that ensures the menu changes visibility when the menu icon
         * is clicked. This test has two expectations: does the menu display
         * when clicked and does it hide when clicked again.
         */
        it('toggles visibility when the menu icon is clicked', function() {
            expect(body.hasClass('menu-hidden')).toBe(true);

            menuIconLink.click();
            expect(body.hasClass('menu-hidden')).toBe(false);

            menuIconLink.click();
            expect(body.hasClass('menu-hidden')).toBe(true);
        });
    });

    /* Test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        /* Test that ensures when the loadFeed function is called and
         * completes its work, there is at least a single .entry element
         * within the .feed container.
         */

        // require the use of Jasmine's beforeEach and asynchronous done() function
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        it('load at least one .entry element', function() {
            var entry = $('.entry');
            expect(entry.length).toBeGreaterThan(0);
        });
    });

    /* Test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {

        /* Test that ensures when a new feed is loaded by the loadFeed function
         * that the content actually changes.
         */

        var currentFeed;

        beforeEach(function(done) {
            currentFeed = $('.feed').html();
            loadFeed(1, function() {
                done();
            });
        });

        it('checks content changes when new feed is loaded', function(done) {
            var newFeed = $('.feed').html();
            expect(currentFeed).not.toBe(newFeed);
            done();
        });

    });
}());
