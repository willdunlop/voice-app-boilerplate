'use strict';

process.env.DEBUG = 'actions-on-google:*';
process.env.VOICE_PLATFORM = 'google-home';
const { DialogflowApp } = require('actions-on-google');
const functions = require('firebase-functions');

//  Intents
// const intents = require('./intents/index');
const launch = require('./intents/launch');
const end = require('./intents/end');

//  export the application wrapped in firebase
//  TODO: Change this to use lambda instead
exports.voiceApp = functions.https.onRequest((request, response) => {
    const app = new DialogflowApp({ request, response });
    
    //  Generates a 
    let actionMap = new Map();
    actionMap.set('launch', launch);
    actionMap.set('end', end);

    app.handleRequest(actionMap);
});

