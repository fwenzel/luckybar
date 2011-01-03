const widgets = require("widget");
const tabs = require("tabs");
const panels = require("panel");
const data = require("self").data;

let my_widget = widgets.Widget({
    label:"Mozilla website",
    contentURL:"http://www.mozilla.org/favicon.ico",
    onClick:function(widget){
        tabs.open("http://mozilla.org");
    }
});

console.log("Jetpack sample addon running.");
/*Your code is here below*/

