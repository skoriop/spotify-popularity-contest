export const authURL = "https://accounts.spotify.com/authorize";
export const clientID = "0ea2c97a52d349df80c25161b3e1f7ae";
export const redirectURL = window.location.origin + window.location.pathname;

export const scopes = [
	"playlist-read-private",
	"playlist-read-collaborative",
	"user-follow-read",
	"user-top-read",
	"user-read-recently-played",
	"user-library-read",
];

export const loginURL = `${authURL}?client_id=${clientID}&redirect_uri=${redirectURL}&scope=${scopes.join(
	"%20"
)}&response_type=token&show_dialog=true`;

export const getToken = () => {
	const token = window.location.hash.substring(1).split("&")[0].substring(13);
	window.location.hash = "";
	localStorage.setItem("token", token);
	window.location.reload();
};
