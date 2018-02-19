"use strict";
var consts = require('./constants');

var helpers = {
    /**
     *  @function: log
     *  @param: {String} message - A written string to be logged to the console
     *  @param: {Any} data - Any data that is to be logged to the console
     *  This function helps to centralise all the logging across the entire app so that all logs can be 
     *  controlled and toggled from one point.
     */
    log : function (message, data) {
        console.log(message, data ? data : 'undefined');
    },

    /**
     * currentIntentHandlers
     * The getters, setters and clearers for current intent states. Primarily used to keep track of conversation
     * flow
     */
    currentIntentHandlers: {
        set: function(value, dataStore) {
            dataStore[consts.attributes.currentIntent] = value;
        },
        get: function(dataStore) {
            return dataStore[consts.attributes.currentIntent];
        },
        clear: function(dataStore) {
            dataStore[consts.attributes.currentIntent] = null;
        },
        setIntentState: function(value, dataStore) {
            dataStore[consts.attributes.currentIntentState] = value;
        },
        getIntentState: function(dataStore) {
            return dataStore[consts.attributes.currentIntentState];
        },
        clearIntentState: function(dataStore) {
            dataStore[consts.attributes.currentIntentState] = null;
        },
    },

    /**
     *  @function: setData
     *  @param: {Object} Option - Contains the arguments to be used by the function
     * 
     *  Global options 
     *      @param {String} evironment: Usually passed as a node server varialble. eg. process.env.SOME_VAR.
     *              Defines the platform being used
     * 
     *  Google Home options
     *      @param: {Object} dataStore - The object where platform data is stored
     *      @param: {Object} key - The key used to specify which data to change
     *      @param: {Object} value - The value to change the data to 
     */

    setData: function(options = {}) {
        //  Terminates the function if no environment is defined
        if (!options.hasOwnProperty('enviornment')) return;

        switch (options.environment) {
            case 'google-home':
                var { dataStore, key, value } = options;
                dataStore[key] = value;
                break;
            default:
                break;
        }
    },

    /**
     *  @function: getData
     *  @param: {Object} Option - Contains the arguments to be used by the function
     * 
     *  Global options 
     *      @param {String} evironment: Usually passed as a node server varialble. eg. process.env.SOME_VAR.
     *              Defines the platform being used
     * 
     *  Google Home options
     *      @param: {Object} dataStore - The object where platform data is stored
     *      @param: {Object} key - The key used to specify which data to change
     */

    getData: function(options = {}) {
        //  Terminates the function if no environment is defined
        if (!options.hasOwnProperty('environment')) return null;

        switch (options.environment) {
            case 'google-home':
                return options.dataStore[options.key];
            default:
                return null;
        }
    },

    /**
     *  @function ask
     *  @param {Object} options - Contains the arguments to be used by the function
     * 
     *  Global options 
     *      @param {String} evironment: Usually passed as a node server varialble. eg. process.env.SOME_VAR.
     *              Defines the platform being used
     * 
     *  Google Home options:
     *      @param: {String} string: A string of text to be read out by the bot
     *      @param: {Object} app: The app object or reference to the original sdk function to call
     */

    ask: function(options = {}) {
        //  Terminates the function if no environment is defined
        if (!options.hasOwnProperty('environment')) return;

        switch (options.environment) {
            case 'google-home':
                if (options.hasOwnProperty('app')) {
                    options.app.ask(options.string);
                }
                break;
            default:
                break;
        }
    }

};

module.exports = helpers;