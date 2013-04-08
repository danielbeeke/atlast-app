/************************************************
 * Hacks
 *
 * quo.js requirejs compatibility
 * https://groups.google.com/forum/#!topic/quojs/o3Sh6KxPg3I
 ************************************************/

require.config({
    paths: {
        jquery: '../components/jquery/jquery',
        quo: '../components/quojs/quo',
        twig: '../components/twig.js/twig'
    }
});

require(['app'], function (app, $, $$) {
    'use strict';
});