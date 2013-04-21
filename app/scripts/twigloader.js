/********************************************************
 * Twigloader
 *
 * Loads basic templates and provides
 * getTwigTemplate() to load new templates on the fly
 *
 ********************************************************/

define(['jquery', 'twig'], function ($) {

  // The twig engine.
  var twigEngine = require('twig');

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

  // Standard template names.
  var baseTemplates = ['main', 'menu', 'map', 'mapfilters'];

  // Get standard templates.
  $.each(baseTemplates, function(index, templateName) {
    getTwigTemplate(templateName, true);
  });

});