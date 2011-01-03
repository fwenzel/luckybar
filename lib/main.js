/* Imports */
const preferences = require("preferences-service");

/* Constants */
const lucky_pref = 'keyword.URL',
      lucky_url = ('http://www.google.com/search?ie=UTF-8&oe=UTF-8&rls=' +
                   'org.mozilla:en-US:official&client=firefox-a&sourceid=' +
                   'navclient&gfns=1&q=');


// On load/startup/install, set the keyword URL appropriately.
exports.main = function(options, callbacks) {
    preferences.set(lucky_pref, lucky_url);
    console.log(lucky_pref + " set to " + lucky_url);
};

// On deactivate or uninstall, reset everything to normal.
exports.onUnload = function(reason) {
    preferences.reset(lucky_pref);
    console.log(lucky_pref + ' reset to default.');
};

