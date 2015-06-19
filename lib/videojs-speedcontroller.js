/*! videojs-speedcontroller - v0.0.0 - 2015-6-17
 * Copyright (c) 2015 burakbostancioglu
 * Licensed under the Apache-2.0 license. */
(function(window, videojs) {
  'use strict';

  var defaults = {
        option: true
      },
      speedcontroller;

  /**
   * Initialize the plugin.
   * @param options (optional) {object} configuration for the plugin
   */
  speedcontroller = function(options) {
    var settings = videojs.util.mergeOptions(defaults, options),
        player = this;

    // TODO: write some amazing plugin code
  };

  // register the plugin
  videojs.plugin('speedcontroller', speedcontroller);
})(window, window.videojs);
