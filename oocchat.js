var resX = API.getScreenResolutionMantainRatio().Width;
var chatLines = 10;
var maxLines = 10;

var chatX = 0.00375 * resX;
var chatY = 32 * chatLines;

var oocMessages = [];

API.onUpdate.connect(function (sender, args) {
    API.drawText("Local OOC chat", chatX, chatY, 0.35, 231, 217, 176, 255, 0, 0, false, true, 0);
    for (var i = 0; i < oocMessages.length; i++) {
        var tx = chatX;
        var ty = chatY + (i + 1) * 20;
        API.drawText(oocMessages[i], tx, ty, 0.35, 205, 205, 205, 255, 0, 0, false, true, 0);
    }
});

API.onServerEventTrigger.connect(function (name, args) {
    if (name == "TRIGGER_OOC_MESSAGE") {
        if (oocMessages.length == maxLines) {
            oocMessages.shift();
        }
        var message = args[0];
        oocMessages.push(message);
    }
});
