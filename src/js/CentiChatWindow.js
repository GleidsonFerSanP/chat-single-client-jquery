var CentiChatWindow = function(config) {
    var _html = [];
    _html.push('<div class="centi-chat-window" ' + config.cssWindow + '>');
    _html.push('<div class="centi-chat-header" ' + config.cssHeader + '>');
    _html.push('<p ' + config.cssTitle + '>');
    _html.push(config.title ? config.title : 'Centi Soluções');
    _html.push('</p>');
    _html.push('<div class="centi-chat-button-close" ' + config.cssIconContent + '>');
    _html.push('<div style="cursor: pointer;">');
    _html.push(config.cssIconClose);
    _html.push('</div>');
    _html.push('</div>');
    _html.push('</div>');
    _html.push('<div class="centi-chat-content-timeline" ' + config.cssTimeline + '>');
    _html.push('</div>');
    _html.push('<div class="centi-chat-content-textarea">');
    _html.push('<textarea class="centi-chat-textarea" name="message" placeholder="Digite uma mensagem" ' + config.cssTextarea + '/>');
    _html.push('</div>');
    _html.push('</div>');

    function getTemplateSendMessage(message) {
        var template = [
            '<div ' + config.cssTalkBubbleSend + ' chat_message_color_send chat_send_message">',
            '<div ' + config.cssTalkText + ' class="talktext">',
            '<span>',
            message.Msg,
            '</span>',
            '<div ' + config.cssTalkBubbleSendAfter + '></div>',
            '</div>',
            '</div>',
            '<p ' + config.cssTalkDate + ' class="chat_message_date">',
            message.DateTime,
            '</p>',
        ].join("");

        return template;
    }

    function getTemplateReceivedMessage(message) {
        var template = [
            '<div ' + config.cssTalkBubbleReceived + ' class="talk-bubble tri-right round left-top talk-bubble-received chat_message_color_receiver">',
            '<div ' + config.cssTalkText + ' class="talktext">',
            '<span>',
            message.Msg,
            '</span>',
            '<div ' + config.cssTalkBubbleReceivedAfter + '></div>',
            '</div>',
            '</div>',
            '<p ' + config.cssTalkDate + ' class="chat_message_date">',
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
                $('.centi-chat-window').toggle();
            });

            $('.centi-chat-textarea').on('keydown', function(e) {
                var value = $(this).val();
                if (e.which === 13) {
                    var message = {
                        Msg: value,
                        DateTime: _utils.formateDate(new Date())
                    }
                    appendSendMessage(message);
                    appendReceivedMessage(message);
                    e.preventDefault();
                }
            });

        })();


    });
};