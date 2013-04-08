define(['jquery', 'twig'], function ($) {

  // The twig engine.
  var twigEngine = require('twig');

  // Standard template names.
  var baseTemplates = ['main', 'menu', 'map', 'mapfilters'];

  // Place to store all the twig templates.
  window.twigTemplates = {};

  // Function to load a template.
  window.getTwigTemplate = function(templateName, render) {
    twigTemplates[templateName] = twigEngine.twig({
        id: templateName,
        href: 'templates/' + templateName + '.twig',
        async: false
    });

    if (render && $('#' + templateName)) {
      $('#' + templateName).html(twigTemplates[templateName].render());
    }
  }

  // Get standard templates.
  $.each(baseTemplates, function(index, templateName) {
    getTwigTemplate(templateName, true);
  });

});