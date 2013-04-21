define(['jquery', 'quo'], function ($) {

  // Left panel active, swipe to activate the center
  $$('#main').swipeLeft(function() {
    $('#main').removeClass('left').addClass('center');
  });

  // Right panel active, swipe to activate the center
  $$('#main.right').swipeRight(function() {
    $('#main').removeClass('right').addClass('center');
  });

  // Left panel active, click to activate the center
  $$('#panel-toggle-left').tap(function() {
    if ($('#main.left').length) {
      $('#main').removeClass('left').addClass('center');
    }
    else if ($('#main.center').length) {
    $('#main').removeClass('center').addClass('left');
    }
  });

  // Right panel active, click to activate the center
  $$('#panel-toggle-right').tap(function() {
    if ($('#main.right').length) {
      $('#main').removeClass('right').addClass('center');
    }
    else if ($('#main.center').length) {
    $('#main').removeClass('center').addClass('right');
    }
  });

});