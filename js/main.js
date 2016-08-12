"use strict";

// create an object to structure all of the required javascript. Allows easy separation and organisation of code.
var futurelearn = {

  init: function() {

    console.log("init run");

    this.hideNav();
    this.toggleNav();
  },

  hideNav: function() {
    $('.js-hide').hide();
  },

  toggleNav: function() {

    $('.js-show-hide').on('click', function() {
      $( '.' + $(this).attr('aria-controls') ).toggle();
      // This needs to toggle but I ran out of time :(
      $(this).attr('aria-expanded', true);
    });
  }

}



futurelearn.init();