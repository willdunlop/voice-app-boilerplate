"use strict";

var helpers = require('../helpers');

var responses = {
  'launch': {
    "default": `This is the default help message for voice app`
  }
};

/**
 * @function getHelpText
 * Returns the help text for a specific intent
 */
var getHelpText = function(intent, state) {
  helpers.log(`Current Intent: ${intent}`);
  helpers.log(`Current Intent State: ${state}`);

  if (!state) {
    //  If no deep context is set, the default intent specific help is given
    state = "default"
  }
  
  return responses[intent][state];
}

module.exports = {
  getHelpText: getHelpText,
};