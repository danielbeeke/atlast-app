/************************************************
 * Hacks
 *
 * quo.js requirejs compatibility
 * https://groups.google.com/forum/#!topic/quojs/o3Sh6KxPg3I
 ************************************************/

require.config({
    paths: {
        jquery: '../components/jquery/jquery',
        twig: '../components/twig.js/twig',
        hammer: '../components/hammerjs/dist/hammer',
        jqueryHammer: '../components/hammerjs/dist/jquery.hammer',
        quo: '../components/quojs/quo.debug',
        leaflet: '../components/leaflet/dist/leaflet',
    }
});

window.afterBootstrapFunctions = {};

require(['app'], function (app, $) {
  'use strict';
});