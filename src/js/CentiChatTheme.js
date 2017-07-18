var CentiChatTheme = function() {
    $("head").append("<link href='https://fonts.googleapis.com/css?family=roboto' rel='stylesheet' type='text/css'>");
    var _self = this;
    config._theme = this;

    this.colorThemePrimary = (!config['theme'] || !config['theme'].primary) ? '#82bf2e' : config['theme'].primary;
    this.colorThemeSecondary = (!config['theme'] || !config['theme'].secondary) ? '#4a7016' : config['theme'].secondary;
    var _height = !config['height'] ? '300px' : config['height'] + 'px';
    var _width = !config['width'] ? '200px' : config['width'] + 'px';
    var _background = '#FFF';
    var _border = '1px solid ' + this.colorThemePrimary;

    this.cssWindow = (function() {
        var _styles = {
            'height': _height,
            'width': _width,
            'background': _self.colorThemeSecondary,
            'border': _border,
            'position': 'fixed',
            'right': '5px',
            'bottom': '5px',
            'border-radius': '5px 5px 0 0',
            'display': 'none'
        };
        return _utils.generateStyle(_styles);
    })();

    this.cssMinwindow = (function() {
        var _styles = {
            'height': '50px',
            'width': '50px',
            'background': _self.colorThemePrimary,
            'border': _border,
            'position': 'fixed',
            'right': '5px',
            'bottom': '250px',
            'border-radius': '40px',
            'cursor': 'pointer'
        };
        return _utils.generateStyle(_styles);
    })();

    this.cssHeader = (function() {
        var _styles = {
            'height': "40px",
            'width': "100%",
            'background': _self.colorThemePrimary,
            'border': _border,
            'text-align': 'center',
            'border-radius': '3px 3px 0 0',
            'display': 'flex'
        };
        return _utils.generateStyle(_styles);
    })();

    this.cssTitle = (function() {
        var _styles = {
            'margin': '10px 0 0 10px',
            'color': "#FFF",
            'font-weight': "bold",
            'font-size': '20px',
            'font-family': '\'Roboto\', sans-serif',
            'width': '100%;'
        };
        return _utils.generateStyle(_styles);
    })();

    this.cssFormInputText = (function() {
        var _styles = {
            'width': 'calc(100% - 8px)',
            'border-radius': '3px',
            'border': '1px solid grey',
            'height': '30px',
            'font-size': '16px',
            'padding-left': '5px',
            'color': 'grey',
            'margin-bottom': '12px'
        };
        return _utils.generateStyle(_styles);
    })();

    this.cssFormLabel = (function() {
        var _styles = {
            'font-size': '14px',
            'color': _self.colorThemePrimary,
        };
        return _utils.generateStyle(_styles);
    })();
    this.cssFormInformation = (function() {
        var _styles = {
            'margin': '10px',
            'color': _self.colorThemePrimary,
            'text-align': 'center',
            'font-family': '\'Roboto\', sans-serif',
        };
        return _utils.generateStyle(_styles);
    })();

    this.cssFormButton = (function() {
        var _styles = {
            'width': 'calc(100% - 8px)',
            'border-radius': '2px',
            'border': '1px solid ' + _self.colorThemePrimary,
            'height': '40px',
            'font-size': '16px',
            'font-weight': 'bold',
            'color': '#FFF',
            'padding-left': '5px',
            'background': _self.colorThemePrimary,
            'margin-bottom': '12px',
            'cursor': 'pointer',
        };
        return _utils.generateStyle(_styles);
    })();

    this.cssForm = (function() {
        var _styles = {
            'margin': '10px 0 0 10px',
            'color': "#FFF",
            'font-weight': "bold",
            'font-size': '20px',
            'font-family': '\'Roboto\', sans-serif'
        };
        return _utils.generateStyle(_styles);
    })();

    this.cssTimeline = (function() {
        var _styles = {
            'height': "calc(100% - 150px)",
            'border-bottom': '1px solid ' + _self.colorThemePrimary,
            'padding': '10px',
            'overflow': 'auto',
            'overflow-x': 'hidden',
            'background': '#FFF'
        };
        return _utils.generateStyle(_styles);
    })();

    this.cssTalkBubbleSend = (function() {
        var _styles = {
            'margin': '5px 65px',
            'display': 'inline-block',
            'position': 'relative',
            'width': '200px',
            'height': 'auto',
            'background-color': 'silver',
            'border-radius': '5px'
        };
        return _utils.generateStyle(_styles);
    })();
    this.cssTalkBubbleReceived = (function() {
        var _styles = {
            'margin': '5px 15px',
            'display': 'inline-block',
            'position': 'relative',
            'width': '200px',
            'height': 'auto',
            'background-color': '#e5ed74',
            'border-radius': '5px'
        };
        return _utils.generateStyle(_styles);
    })();

    this.cssTalkBubbleSendAfter = (function() {
        var _styles = {
            'right': '-8px',
            'top': '0',
            'border': '12px solid',
            'border-color': 'silver transparent transparent silver',
            'position': 'absolute'
        };
        return _utils.generateStyle(_styles);
    })();

    this.cssTalkBubbleReceivedAfter = (function() {
        var _styles = {
            'content': '\' \'',
            'position': 'absolute',
            'width': 0,
            'height': 0,
            'left': '-8px',
            'right': 'auto',
            'top': '0',
            'bottom': 'auto',
            'border': '12px solid',
            'border-color': '#e5ed74 transparent transparent'
        };
        return _utils.generateStyle(_styles);
    })();

    this.cssTalkText = (function() {
        var _styles = {
            'padding': '3px 10px',
            'text-align': 'left',
            'line-height': '1.5em',
            'word-break': 'break-all',
            'font-family': '\'Roboto\', sans-serif'
        };
        return _utils.generateStyle(_styles);
    })();

    this.cssTalkDate = (function() {
        var _styles = {
            'font-size': '10px',
            'text-align': 'center',
            'opacity': '.7',
            'font-family': '\'Roboto\', sans-serif'
        };
        return _utils.generateStyle(_styles);
    })();

    this.cssTextarea = (function() {
        var _styles = {
            'padding': '5px',
            'height': "100%",
            'width': "100%",
            'border': 'none',
            'resize': 'none',
            'font-size': '16px',
            'font-family': '\'Roboto\', sans-serif',
            'min-height': '110px'
        };
        return _utils.generateStyle(_styles);
    })();
    this.cssIconContent = (function() {
        var _styles = {
            'margin': '2px 0',
            'position': 'absolute',
            'right': '5px',
            'display': 'flex'
        };

        return _utils.generateStyle(_styles);
    })();

    this.iconClose = (function() {
        return [
            '<svg style="width:30px;height:30px" viewBox="0 0 24 24">',
            '<path fill="#FFF" d="M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z" />',
            '</svg>'
        ].join("");
    })();

    this.iconMinimize = (function() {
        return [
            '<svg style="width:24px;height:24px" viewBox="0 0 24 24">',
            '<path fill="#FFF" d="M20,14H4V10H20" />',
            '</svg>'
        ].join("");
    })();
    this.iconChat = (function() {
        return [
            '<svg style="width:40px;height:40px" viewBox="0 0 24 24">',
            '<path fill="#FFF" d="M9.5,4C5.36,4 2,6.69 2,10C2,11.89 3.08,13.56 4.78,14.66L4,17L6.5,15.5C7.39,15.81 8.37,16 9.41,16C9.15,15.37 9,14.7 9,14C9,10.69 12.13,8 16,8C16.19,8 16.38,8 16.56,8.03C15.54,5.69 12.78,4 9.5,4M6.5,6.5A1,1 0 0,1 7.5,7.5A1,1 0 0,1 6.5,8.5A1,1 0 0,1 5.5,7.5A1,1 0 0,1 6.5,6.5M11.5,6.5A1,1 0 0,1 12.5,7.5A1,1 0 0,1 11.5,8.5A1,1 0 0,1 10.5,7.5A1,1 0 0,1 11.5,6.5M16,9C12.69,9 10,11.24 10,14C10,16.76 12.69,19 16,19C16.67,19 17.31,18.92 17.91,18.75L20,20L19.38,18.13C20.95,17.22 22,15.71 22,14C22,11.24 19.31,9 16,9M14,11.5A1,1 0 0,1 15,12.5A1,1 0 0,1 14,13.5A1,1 0 0,1 13,12.5A1,1 0 0,1 14,11.5M18,11.5A1,1 0 0,1 19,12.5A1,1 0 0,1 18,13.5A1,1 0 0,1 17,12.5A1,1 0 0,1 18,11.5Z" />',
            '</svg>'
        ].join("");
    })();
}