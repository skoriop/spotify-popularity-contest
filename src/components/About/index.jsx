import { loginURL } from "../../middleware/auth";

import login from "../../assets/login.png";
import "./style.css";

const About = () => {
	return (
		<div className="about-body">
			<h3 className="about-text">
				Which songs from your playlist are more popular on Spotify?
			</h3>
			<a href={loginURL}>
				<img className="login" alt="Login to Spotify" src={login} />
			</a>
		</div>
	);
};

export default About;
