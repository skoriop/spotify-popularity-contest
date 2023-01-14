import { useEffect, useState } from "react";

import Song from "../Song";

import { callAPI } from "../../middleware/api";

import "./style.css";

const Game = () => {
	const gameLength = 10;

	const [offset, setOffset] = useState(0);
	const [leftSong, setLeftSong] = useState({});
	const [rightSong, setRightSong] = useState({});

	const [turns, setTurns] = useState(0);
	const [score, setScore] = useState(0);
	const [reveal, setReveal] = useState(false);
	const [leftState, setLeftState] = useState(0);
	const [rightState, setRightState] = useState(0);
	const [gameOver, setGameOver] = useState(false);

	const [response, setResponse] = useState([]);
	useEffect(() => {
		callAPI(
			`/me/tracks?offset=${offset}&limit=50`,
			localStorage.getItem("token")
		)
			.then((res) => setResponse(res.data))
			.catch((e) => console.error(e));
	}, [offset]);

	const songList = response.items;
	const total = response.total;

	const newGame = () => {
		setScore(0);
		setTurns(0);
		setGameOver(false);
		getSongs();
	};

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
		setReveal(true);
		setTimeout(() => {
			if (leftSong?.popularity > rightSong?.popularity) {
				setLeftState(1);
				setRightState(-1);
			} else {
				setLeftState(-1);
				setRightState(1);
			}
			setTimeout(() => {
				if (
					(id === 0 &&
						leftSong?.popularity > rightSong?.popularity) ||
					(id === 1 && rightSong?.popularity > leftSong?.popularity)
				)
					setScore(score + 1);
				setLeftState(0);
				setRightState(0);
				setReveal(false);
				setTurns(turns + 1);
				if (turns === gameLength - 1) setGameOver(true);
				else getSongs();
			}, 1250);
		}, 3000);
	};

	return (
		<div className="game-view">
			{!gameOver && !leftSong.name && !rightSong.name && (
				<button onClick={() => newGame()} className="start-button">
					START
				</button>
			)}
			{!gameOver && leftSong.name && (
				<button onClick={() => check(0)} className="game-item">
					<Song
						song={leftSong}
						reveal={reveal}
						gameState={leftState}
					/>
				</button>
			)}
			{!gameOver && rightSong.name && (
				<button onClick={() => check(1)} className="game-item">
					<Song
						song={rightSong}
						reveal={reveal}
						gameState={rightState}
					/>
				</button>
			)}
			{!gameOver && <h1 className="score">SCORE: {score}</h1>}
			{gameOver && (
				<button onClick={() => newGame()} className="game-over">
					<h2>
						YOUR SCORE : {score}/{gameLength}
					</h2>
					<h2>PLAY AGAIN?</h2>
				</button>
			)}
		</div>
	);
};

export default Game;
