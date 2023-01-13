import "./style.css";

const Song = ({ id, song }) => {
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
		</div>
	);
};

export default Song;
