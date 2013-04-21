define(['jquery', 'twigloader'], function ($) {

  window.activatePopup = function(data, url) {
    $('#popup').html(twigTemplates['popup'].render());
    $('#popup').addClass('active').show();
    if (data != null) {
      $('#popup').html(twigTemplates['popup'].render(data));
    }
    else {
      $.getJSON(url + '?callback=?');
    }
  }

  window.atlastPopup = function(data) {
    $('#popup').addClass('active').show();
    $('#popup').html(twigTemplates['popup'].render(data));
  }

  $$('#close-popup').tap(function() {
    $('#popup').fadeOut(400, function() {
      $('#popup').removeClass('active');
    });
    $('body').trigger('popupClose');
  });

});