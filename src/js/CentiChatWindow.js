var CentiChatWindow = function() {
    var _html = [];
    _html.push('<div class="centi-chat-window" ' + _theme.cssWindow + '>');
    _html.push('<div class="centi-chat-header" ' + _theme.cssHeader + '>');
    _html.push('<p ' + _theme.cssTitle + '>');
    _html.push(config.title ? config.title : 'Centi Soluções');
    _html.push('</p>');
    _html.push('<div class="centi-chat-button-close" ' + _theme.cssIconContent + '>');
    _html.push('<div style="cursor: pointer;">');
    _html.push(_theme.iconClose);
    _html.push('</div>');
    _html.push('</div>');
    _html.push('</div>');
    _html.push('<div class="centi-chat-content-timeline" ' + _theme.cssTimeline + '>');
    _html.push('</div>');
    _html.push('<div class="centi-chat-content-textarea">');
    _html.push('<textarea class="centi-chat-textarea" name="message" placeholder="Digite uma mensagem" ' + _theme.cssTextarea + '/>');
    _html.push('</div>');
    _html.push('</div>');

    function getTemplateSendMessage(message) {
        var template = [
            '<div ' + _theme.cssTalkBubbleSend + ' chat_message_color_send chat_send_message">',
            '<div ' + _theme.cssTalkText + ' class="talktext">',
            '<span>',
            message.Msg,
            '</span>',
            '<div ' + _theme.cssTalkBubbleSendAfter + '></div>',
            '</div>',
            '</div>',
            '<p ' + _theme.cssTalkDate + ' class="chat_message_date">',
            message.DateTime,
            '</p>',
        ].join("");
        return template;
    }

    function getTemplateReceivedMessage(message) {
        var template = [
            '<div ' + _theme.cssTalkBubbleReceived + ' class="talk-bubble tri-right round left-top talk-bubble-received chat_message_color_receiver">',
            '<div ' + _theme.cssTalkText + ' class="talktext">',
            '<span>',
            message.Msg,
            '</span>',
            '<div ' + _theme.cssTalkBubbleReceivedAfter + '></div>',
            '</div>',
            '</div>',
            '<p ' + _theme.cssTalkDate + ' class="chat_message_date">',
            message.DateTime,
            '</p>',
        ].join("");

        return template;
    }

    function getTimeline() {
        return $('.centi-chat-content-timeline');
    }

    function appendReceivedMessage(message) {
        var template = getTemplateReceivedMessage(message);
        getTimeline().append(template);
        getTimeline().animate({ scrollTop: 9999 }, 'slow');
    }

    function prependReceivedMessage(message) {
        var template = getTemplateReceivedMessage(message);
        getTimeline().prepend(template);
    }

    function appendSendMessage(message) {
        var template = getTemplateSendMessage(message);
        getTimeline().append(template);
        getTimeline().animate({ scrollTop: 9999 }, 'slow');
        console.log(_connection);
    }

    function prependSendMessage(message) {
        var template = getTemplateSendMessage(message);
        getTimeline().prepend(template);
    }

    $(document).ready(function() {

        $(document.body).append(_html.join(""));

        (function() {

            $('.centi-chat-button-close').on('click', function() {
                $('.centi-button-window-minimize').toggle();
                $('.centi-chat-window').hide();
                $('.centi-chat-form').hide();
            });

            $('.centi-chat-textarea').on('keydown', function(e) {
                var value = $(this).val();
                if (e.which === 13) {
                    $(this).val('');
                    var message = {
                        Msg: value,
                        DateTime: _utils.formateDate(new Date())
                    }
                    appendSendMessage(message);
                    _connection.send(value);
                    appendReceivedMessage(message);
                    e.preventDefault();
                }
            });

            $(".centi-chat-button-close").mouseover(function() {
                $(this).find(" > div").css("opacity", ".5");
            }).mouseout(function() {
                $(this).find(" > div").css("opacity", "1");
            });

        })();
    });
};