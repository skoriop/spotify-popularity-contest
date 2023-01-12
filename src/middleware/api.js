import axios from "axios";

export const callAPI = async (url, token) => {
	const fullURL = "https://api.spotify.com/v1" + url;
	const response = await axios.get(fullURL, {
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	});
	return response;
};
