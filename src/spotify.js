// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

// Redirect to spotify login page
export const authEndpoint = "https://accounts.spotify.com/authorize";

// Redirect the user from spotify login page to home page of this website
const redirectUri = "http://localhost:3000/";

const clientId = "";

// Features that the user can do
// This is a list of permission that the user can do
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

// Get the token from URL that was sent from spotify
export const getTokenFromUrl = () => {
    // Get a part of the URL after #
    return window.location.hash
        .substring(1)       // Get the first string
        .split("&")
        .reduce((initial, item) => {
            // #accessToken=mysecretkey&name=test => [#accessToken, mysecretkey&name, test ]
            var parts = item.split("=");

            // Get the accessToken
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;
        }, {});
  };

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;