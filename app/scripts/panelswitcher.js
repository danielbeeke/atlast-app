define(['jquery', 'hammer'], function ($) {

  var el = document.getElementById('main');

  Hammer(el).on("swipeleft", function() {
      alert('you swiped left!');
  });

});