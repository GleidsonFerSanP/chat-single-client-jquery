var CentiChat = function(config) {
    'use strict';

    /*injectAllClassesHere*/

    var _self = this;
    var _utils = new Utils();

    this._theme = new CentiChatTheme(config);
    config._theme = this._theme;
    this._templateWindow = new CentiChatWindow(this._theme);
    this._templateMinWindow = new CentiChatMinWindow(this._theme);


    (function() {
        var _connection = new CentiChatConnection(config);
    })();

};