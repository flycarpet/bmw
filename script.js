document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("km-form");
    const result = document.getElementById("result");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const currentKm = formData.get("currentKm");
        result.textContent = `Huidige Kilometerstand: ${currentKm}`;
    });
});
// Client ID en API key van de Developer Console
var CLIENT_ID = '861911512672-s1cb2mem0i2deerevrsbd4mq6tdqqauk.apps.googleusercontent.com';
var API_KEY = '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';

// Google Sheets API v4
var SCOPES = "https://www.googleapis.com/auth/spreadsheets";

/**
 *  Laadt de API-client en de auth2 bibliotheek.
 */
function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}

/**
 *  Initialisatie van de API-clientbibliotheek en stelt de signIn status in.
 */
function initClient() {
    gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        scope: SCOPES
    }).then(function () {
        // Luister naar de signIn status veranderingen.
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

        // Verwerkt de huidige signIn status.
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    });
}

/**
 * Update de UI op basis van de signIn status
 * @param {boolean} isSignedIn
 */
function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
        // Code voor als de gebruiker is ingelogd.
    } else {
        // Code voor als de gebruiker is uitgelogd.
    }
}
