/* Imports */
const preferences = require("preferences-service");
var store = require("simple-storage").storage;

/* Constants */
const lucky_pref = 'keyword.URL',
      lucky_url = ('http://www.google.com/search?ie=UTF-8&oe=UTF-8&rls=' +
                   'org.mozilla:en-US:official&client=firefox-a&sourceid=' +
                   'navclient&gfns=1&q=');


// On load/startup/install, set the keyword URL appropriately.
exports.main = function(options, callbacks) {
    // Do not clobber over the setting on every startup.
    if (['install', 'enable'].indexOf(options.loadReason) == -1)
        return;

    // Remember previous setting to reset to on uninstall.
    store.previous_url = preferences.get(lucky_pref)

    // "fix" keyword URL.
    preferences.set(lucky_pref, lucky_url);
    console.log(lucky_pref + " set to " + lucky_url);
};

// On deactivate or uninstall, reset everything to normal.
exports.onUnload = function(reason) {
    // Only reset setting on uninstall and disable.
    if (['uninstall', 'disable'].indexOf(reason) == -1)
        return;

    // Reset preference only if it wasn't changed since.
    if (preferences.get(lucky_pref) == lucky_url) {
        preferences.set(lucky_pref, store.previous_url);
        console.log(lucky_pref + ' reset to previous value:' +
                    store.previous_url);
    } else {
        console.log('Keyword URL was changed since LuckyBar was installed. ' +
                    'Preference was not reset.')
    }
};
