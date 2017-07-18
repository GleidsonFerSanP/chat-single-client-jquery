var CentiChatEnvironment = function() {

    var _environment = this;

    (function() {
        var name = Cookies.get('centi.chat.user.name');
        var email = Cookies.get('centi.chat.user.email');
        var tel = Cookies.get('centi.chat.user.telephone');

        _environment.user = {
            name: name,
            email: email,
            telephone: tel
        }
        _environment.loginIsOn = false;

    })()
}