import { useEffect, useState } from "react";
import Song from "../Song";

import { callAPI } from "../../middleware/api";

import "./style.css";

const Game = () => {
	const token = localStorage.getItem("token");

	const [offset, setOffset] = useState(0);
	const [leftSong, setLeftSong] = useState({});
	const [rightSong, setRightSong] = useState({});
	const [score, setScore] = useState(0);

	const [response, setResponse] = useState([]);
	useEffect(() => {
		callAPI(`/me/tracks?offset=${offset}&limit=50`, token)
			.then((res) => setResponse(res.data))
			.catch((e) => {
				console.error(e);
				if (localStorage.getItem("token"))
					localStorage.removeItem("token");
				window.location.reload();
			});
	}, [offset]);

	const songList = response.items;
	const total = response.total;

	const getSongs = () => {
		if (!total) return null;
		let s1, s2;
		do {
			s1 = songList[Math.floor(Math.random() * 50)].track;
			s2 = songList[Math.floor(Math.random() * 50)].track;
		} while (s1?.name === s2?.name || s1?.popularity === s2?.popularity);
		setLeftSong(s1);
		setRightSong(s2);
		setOffset(Math.floor(Math.random() * (total - 50)));
	};

	const check = (id) => {
		// console.log(leftSong.popularity + " vs " + rightSong.popularity);
		if (id === 0) {
			if (leftSong?.popularity > rightSong?.popularity) {
				setScore(score + 1);
			}
		} else {
			if (rightSong?.popularity > leftSong?.popularity) {
				setScore(score + 1);
			}
		}
		getSongs();
	};

	return (
		<div className="game-view">
			{!leftSong.name && !rightSong.name && (
				<button onClick={() => getSongs()} className="start-button">
					START
				</button>
			)}
			{leftSong.name && (
				<button onClick={() => check(0)} className="game-item">
					<Song song={leftSong} />
				</button>
			)}
			{rightSong.name && (
				<button onClick={() => check(1)} className="game-item">
					<Song song={rightSong} />
				</button>
			)}
			<h1 className="score">SCORE: {score}</h1>
		</div>
	);
};

export default Game;
