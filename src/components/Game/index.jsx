import { useEffect, useState } from "react";
import Song from "../Song";

import { callAPI } from "../../middleware/api";

import "./style.css";

const Game = () => {
	const token = localStorage.getItem("token");

	const [offset, setOffset] = useState(0);
	const [leftSong, setLeftSong] = useState({});
	const [rightSong, setRightSong] = useState({});

	const [response, setResponse] = useState([]);
	useEffect(() => {
		callAPI(`/me/tracks?offset=${offset}&limit=50`, token)
			.then((res) => setResponse(res.data))
			.catch((e) => console.error(e));
	}, [offset]);

	const songList = response.items;
	const total = response.total;

	const getSongs = () => {
		if (!total) return null;
		let s1, s2;
		do {
			s1 = songList[Math.floor(Math.random() * 50)];
			s2 = songList[Math.floor(Math.random() * 50)];
		} while (s1?.track.name === s2?.track.name);
		setLeftSong(s1);
		setRightSong(s2);
		setOffset(Math.floor(Math.random() * (total - 50)));
	};

	return (
		<div className="game-view">
			<button onClick={getSongs}>clickme</button>
			<Song />
		</div>
	);
};

export default Game;
