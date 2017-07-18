var CentiChatConnection = function() {

    if (!config) {
        console.error('Object config not present! wss destyne path is request for this object');
        return;
    }

    var _self = this;
    var _ws = null;

    (function() {
        _ws = new WebSocket(config.wss);

        _ws.onerror = function(error) {
            console.info('WebSocket Error ', error);
        };

        _ws.onmessage = function(e) {
            console.info(e);
        };

        _ws.onopen = function(params) {
            if (_ws.readyState === 1) {
                console.info('websocket connected');
                register();
            }
        }
    })();

    this.send = function(message) {
        var command = 'chat|gleidson.pinheiro|' + message;
        console.log('Send command', command);
        _ws.send(command);
    }

    function register() {
        console.log('_environment', _environment);
        var commandRegister = 'login|' + _environment.user.name + '|' + _environment.user.name;
        console.debug(_ws);
        console.info('registered websocket');
        try {
            _ws.send(commandRegister);
        } catch (error) {
            $log.error(error);
        }
    }

};