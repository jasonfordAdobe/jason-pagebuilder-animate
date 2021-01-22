define([
    'jquery',
    'joshjs'
], function ($) {
    'use strict';

    return function (config, element) {
        var element = $(element);
        console.log("ELEMENT: " + element.data('element'));
        
        const josh = new Josh({
            initClass: "josh-js",
            animateInMobile: true,
            offset: 0.3,
            onDOMChange: true
        });

        console.log("hello");
    };
});