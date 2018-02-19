/**
*   @function: launchIntent
*   @param: {Object} app
*   A welcome intent that runs when the action/skill is launched
*   This intent sets some necessary global variables and provides the user with a brief
*   introduction to the voice application
*/

'use strict';
//  TODO: add config file to handle imports accross the whole app
const { currentIntentHandlers, log, ask } = require('../helpers');

const launch = function(app) {
    log('Launch Intent');

    const { userStorage } = app;
    const environment = process.env.VOICE_PLATFORM;

    //  Reset and redefine context state
    currentIntentHandlers.clear(userStorage);
    currentIntentHandlers.clearIntentState(userStorage);
    currentIntentHandlers.set('launch', userStorage);

    //  Build initial welcome message 
    const welcomeSpeech = 'Welcome to the voice App. What would you like to know?';
    ask({
        environment, 
        string: welcomeSpeech , 
        app: app,
    });
}

module.exports = launch;