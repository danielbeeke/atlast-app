require.config({
    paths: {
        jquery: '../components/jquery/jquery',
        quo: '../components/quojs/quo',
    }
});

require(['app', 'jquery', 'quo'], function (app, $, $$) {
    'use strict';
    // use app here
    console.log(app);
    console.log('Running jQuery %s', $().jquery);
});