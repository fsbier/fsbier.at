(function($, Drupal) {

  'use strict';

  Drupal.behaviors.fsbier = {
    attach: function(context, settings) {
      $('#togglemeplz').hover(
        function () {
          $(this).text('"Soll ich mir den Kalender gönnen?"')
        },
        function () {
          $(this).text('"Soll ich mir den Kalender kaufen?"')
        }
      )
      
    }
  };

})(jQuery, Drupal);
