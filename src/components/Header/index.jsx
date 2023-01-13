import "./style.css";

const Header = () => {
	return (
		<div className="header-bar">
			<img className="header-logo" alt="Spotify Logo" src="logo.png" />
			<h1 className="header-title">Spotify Popularity Contest</h1>
		</div>
	);
};

export default Header;
