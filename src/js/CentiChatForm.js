var CentiChatForm = function() {

    var _html = [];
    _html.push('<div class="centi-chat-form" ' + _theme.cssWindow + '>');
    _html.push('<div class="centi-chat-header" ' + _theme.cssHeader + '>');
    _html.push('<p ' + _theme.cssTitle + '>');
    _html.push(config.title ? config.title : 'Centi Soluções');
    _html.push('</p>');
    _html.push('<div id="centi-chat-button-close-form" class="centi-chat-button-close-form" ' + _theme.cssIconContent + '>');
    _html.push('<div style="cursor: pointer;">');
    _html.push(_theme.iconClose);
    _html.push('</div>');
    _html.push('</div>');
    _html.push('</div>');
    _html.push('<div class="centi-chat-content-information" ' + _theme.cssFormInformation + '>');
    _html.push('<p>Por favor, identifique-se: </p>');
    _html.push('</div>');
    _html.push('<div class="centi-chat-content-form" ' + _theme.cssForm + '>');
    _html.push('<form name="centi-chat-form">');
    _html.push('<label ' + _theme.cssFormLabel + ' for="centi-chat-form-name">Nome*: </label>');
    _html.push('<input ' + _theme.cssFormInputText + ' name="centi.chat.user.name" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" value="' + _environment.user.name + '" placeholder="Insira o seu nome" id="centi-chat-form-name">')
    _html.push('<label ' + _theme.cssFormLabel + ' for="centi-chat-form-email">Email*: </label>');
    _html.push('<input ' + _theme.cssFormInputText + ' name="centi.chat.user.email" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" value="' + _environment.user.email + '" placeholder="Insira o seu email" id="centi-chat-form-email">')
    _html.push('<label ' + _theme.cssFormLabel + ' for="centi-chat-form-telephone">Fone*: </label>');
    _html.push('<input ' + _theme.cssFormInputText + ' name="centi.chat.user.telephone" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" value="' + _environment.user.telephone + '" placeholder="Insira o seu telefone" id="centi-chat-form-tel">')
    _html.push('<input ' + _theme.cssFormButton + ' class="centi-chat-form-button-init-chat" type="button" value="Iniciar Chat" id="centi-chat-form-button-init-chat">')
    _html.push('</form>');
    _html.push('</div>');
    _html.push('</div>');

    function addInvalidFieldCss($element) {
        $element.css('border', '1px solid red');
    }

    function changePlaceholderInvalidField($element, message) {
        $element.val('');
        var placeholder = $element.attr('placeholder');
        $element.attr('placeholder', message);
        $element.attr('data-placeholder', placeholder);
    }

    function restorePlaceholderInvalidField($element) {
        var placeholder = $element.attr('data-placeholder');
        $element.attr('placeholder', placeholder);
    }

    function rmInvalidFieldCss($element) {
        $element.css('border', '1px solid grey');
    }

    function addCookie($element) {
        var cookieName = $element.attr('name');
        var cookieValue = $element.val();
        Cookies.set(cookieName, cookieValue);
    }

    function cssValidate($input, isValid, message) {

        if (!isValid) {
            addInvalidFieldCss($input);
            changePlaceholderInvalidField($input, message);
            $input.parent().attr('valid', false);
        } else {
            addCookie($input);
            restorePlaceholderInvalidField($input);
            $input.parent().attr('valid', true);
        }

        $input.on('focus', function() {
            rmInvalidFieldCss($input);
            restorePlaceholderInvalidField($input);
        });
    }

    function isEmpty($input) {
        var value = $input.val();
        var valid = value === '' ? true : false;
        cssValidate($input, !valid, 'Preenchimento obrigat\u00f3rio');
        return valid;
    }

    function validateName() {
        var $input = $('#centi-chat-form-name');
        return isEmpty($input) ? false : true;
    }

    function isValidEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function validateEmail() {
        var $input = $('#centi-chat-form-email');
        if (isEmpty($input))
            return false;

        var emailValid = isValidEmail($input.val());
        cssValidate($input, emailValid, 'Insira um email v\u00e1lido');
        return emailValid;
    }

    function validateTel() {
        var $input = $('#centi-chat-form-tel');
        return isEmpty($input) ? false : true;
    }

    function validate() {
        if (!validateName() ||
            !validateEmail() ||
            !validateTel())
            return false;

        var $form = $('.centi-chat-form').find('form');
        var isValid = $form.attr('valid');
        return isValid === 'true' ? true : false;
    }

    $(document).ready(function() {
        $(document.body).append(_html.join(""));

        $("#centi-chat-form-tel").mask("(99) 99999-999?9");
        $('#centi-chat-form-button-init-chat').on('click', function() {

            if (!validate())
                return;
            _environment.loginIsOn = true;
            _connection = new CentiChatConnection(config, _environment);
            $('.centi-chat-form').hide();
            $('.centi-chat-window').show();
        });

        $('.centi-chat-button-close-form').on('click', function() {
            $('.centi-button-window-minimize').toggle();
            $('.centi-chat-window').hide();
            $('.centi-chat-form').hide();
        });

        $(".centi-chat-button-close-form").mouseover(function() {
            $(this).find(" > div").css("opacity", ".5");
        }).mouseout(function() {
            $(this).find(" > div").css("opacity", "1");
        });

    });

}