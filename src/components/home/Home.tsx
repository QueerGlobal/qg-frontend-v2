import React, { FC } from "react";
import Footer from "../common/footer/Footer";
import LandingPage from "../landingPage/LandingPage";

const Home: FC = () => {
	return (
		<div>
			<LandingPage />
			<Footer />
		</div>
	);
};

export default Home;
