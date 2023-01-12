import { useEffect } from "react";

import Header from "../Header";
import About from "../About";
import Game from "../Game";
import Footer from "../Footer";

import { getToken } from "../../middleware/auth";

import "./style.css";

const App = () => {
	useEffect(() => {
		if (!localStorage.getItem("token") && window.location.hash) getToken();
	}, []);
	return (
		<div>
			<Header />
			{localStorage.getItem("token") ? <Game /> : <About />}
			<Footer />
		</div>
	);
};

export default App;
