var CentiChatMinWindow = function(theme) {
    var _html = [];
    _html.push('<div class="centi-chat-windowmin centi-button-window-minimize" ' + theme.cssMinwindow + '>');
    _html.push('<div ' + theme.cssIconContent + '>');
    _html.push('<div style="cursor: pointer;">');
    _html.push(theme.cssIconChat);
    _html.push('</div>');
    _html.push('</div>');
    _html.push('</div>');

    $(document).ready(function() {

        $(document.body).append(_html.join(""));

        (function() {

            $('.centi-button-window-minimize').on('click', function() {
                $('.centi-chat-window').toggle();
                $(this).toggle();
            });

            $(".centi-chat-windowmin").hover(function() {
                $(this).css("background-color", theme.colorThemeSecondary);
            }, function() {
                $(this).css("background-color", theme.colorThemePrimary);
            });
        })();


    });

}