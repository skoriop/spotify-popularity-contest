import AnimatedNumbers from "react-animated-numbers";

import "./style.css";

const Song = ({ song, reveal, gameState }) => {
	return (
		<div
			className="song-view"
			style={{
				backgroundImage: `linear-gradient(
			rgba(120, 120, 120, 0.75),
			rgba(120, 120, 120, 0.75)
		),
		url(${song?.album?.images[0]?.url})`,
			}}
		>
			<h1 className="song-title">{song?.name}</h1>
			<h3 className="song-artist">
				{song?.artists?.map((i) => {
					return " | " + i.name;
				})}
				{" |"}
			</h3>
			{reveal && (
				<div className={"song-popularity state" + gameState}>
					<AnimatedNumbers
						animateToNumber={song?.popularity}
						configs={[{ mass: 1, tension: 180, friction: 60 }]}
					></AnimatedNumbers>
				</div>
			)}
		</div>
	);
};

export default Song;
