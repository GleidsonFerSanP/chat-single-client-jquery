var CentiChat = function(config) {
    'use strict';

    /*injectAllClassesHere*/

    if (!config) {
        console.log('Please add object config with chat configurations requireds, (wssPath)');
        return;
    }

    var _self = this;
    var _utils = new Utils();
    var _theme = new CentiChatTheme();
    var _environment = new CentiChatEnvironment();
    new CentiChatWindow();
    new CentiChatMinWindow();
    new CentiChatForm();
    var _connection = null;

};