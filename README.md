# Spotify Popularity Contest

Guess which song is more popular according to Spotify by using the [Spotify Web API](https://developer.spotify.com/documentation/web-api/)  
&nbsp;

## Built with:

-   [React](https://reactjs.org)
-   [Axios](https://axios-http.com)
-   [React Animated Numbers](https://github.com/heyman333/react-animated-numbers)

&nbsp;

## Update:

Since Spotify [doesn't allow new apps to be accessed by new users](https://developer.spotify.com/documentation/web-api/guides/development-extended-quota-modes/) without me adding them to the whitelist, here's a temporary alternative:

-   Go [here](https://developer.spotify.com/console/get-current-user-saved-tracks/) and click _Get Token_
-   Select the `user-library-read` checkbox and then click _Request Token_
-   Copy the _OAuth Token_ (make sure it's completely selected, double-click doesn't work fully)
-   In [the website](https://spotify-popularity-contest.netlify.app/), open Developer Tools and go to _Application -> Local Storage -> https://spotify-popularity-contest.netlify.app/_
-   Double click below _Key_ to create a new entry
-   Set the key to "token" (without quotes) and the value to the OAuth token from Spotify
