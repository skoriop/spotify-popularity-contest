import "./style.css";

const About = () => {
	return (
		<div className="about-body">
			<p className="about-text">
				Guess which song from your playlist is more popular
			</p>
			<button className="login">
				<img className="login-logo" />
				<p className="login-text">Login with Spotify</p>
			</button>
		</div>
	);
};

export default About;
