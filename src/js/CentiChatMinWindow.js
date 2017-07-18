var CentiChatMinWindow = function() {
    var _html = [];
    _html.push('<div class="centi-chat-windowmin centi-button-window-minimize" ' + _theme.cssMinwindow + '>');
    _html.push('<div ' + _theme.cssIconContent + '>');
    _html.push('<div style="cursor: pointer;">');
    _html.push(_theme.iconChat);
    _html.push('</div>');
    _html.push('</div>');
    _html.push('</div>');

    $(document).ready(function() {

        $(document.body).append(_html.join(""));

        (function() {

            $('.centi-button-window-minimize').on('click', function() {
                if (_environment.loginIsOn)
                    $('.centi-chat-window').toggle();
                else
                    $('.centi-chat-form').toggle();
                $(this).toggle();
            });

            $(".centi-chat-windowmin").hover(function() {
                $(this).css("background-color", config.colorThemeSecondary);
            }, function() {
                $(this).css("background-color", config.colorThemePrimary);
            });
        })();


    });

}