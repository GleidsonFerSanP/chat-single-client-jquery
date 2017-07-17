var CentiChatConnection = function(config) {

    if (!config) {
        console.error('Object config not present! wss destyne path is request for this object');
        return;
    }
    var _self = this;
    var _ws = null

    this._create = (function() {
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
            }
        }
    })();

    return {
        create: this._create
    }
    // this.execute = function() {
    //     _self._create();
    // }

    // this._register = function register() {
    //     var commandRegister = 'login|' + System.User + '|' + System.SessionID;
    //     console.debug(_ws);
    //     console.info('registered websocket');
    //     try {
    //         _ws.send(commandRegister);
    //     } catch (error) {
    //         $log.error(error);
    //     }
    // }

    // this._connect = (function(time) {
    //     setTimeout(function() {
    //         if (_ws.readyState !== 1) {
    //             conn = new Connection();
    //             conn.execute();
    //         }
    //     }, time);
    // })();
};