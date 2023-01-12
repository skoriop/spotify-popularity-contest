import "./style.css";

const About = () => {
	const url = "https://www.google.com";
	return (
		<div className="about-body">
			<h3 className="about-text">
				Which songs from your playlist are more popular?
			</h3>
			<a href={url}>
				<img className="login" src="button.png" />
			</a>
		</div>
	);
};

export default About;
