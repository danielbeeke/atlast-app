define(['jquery', 'twigloader'], function ($) {

  var clickedButtonOffset;

  window.reloadMenu = function () {
    $.getJSON('http://atlas.dev.atlastlab.com/atlas/menu?callback=?');
  }

  window.atlastMenu = function(data) {
    $('#menu').html(twigTemplates['menu'].render(data));

    $('.menu-item[data-type="popup"]').click(function() {
      var button = this;
      clickedButtonOffset = $(this).offset();
      $('#menu-item-expander').css({
        left: clickedButtonOffset.left,
        top: clickedButtonOffset.top,
        display: 'block'
      });

      setTimeout(function(){
        $('#menu-item-expander').addClass('transition-expand');
        $('#menu-item-expander').css({
          top: 0,
        });
      }, 100);

      setTimeout(function(){
        activatePopup(null, 'http://atlas.dev.atlastlab.com/atlas/info/' + $(button).attr('data-id'));
      }, 800);
    });
  }

  $('body').on('popupClose', function(event) {
    if ($('#menu-item-expander.transition-expand').length) {
      $('#menu-item-expander').animate({
        top: clickedButtonOffset.top,
        left: clickedButtonOffset.left,
        padding: 0,
        height: '45px'
      }, 700, function() {
        $('#menu-item-expander').fadeOut(1000, function() {

        });
      });



    }
  });

  reloadMenu();

});