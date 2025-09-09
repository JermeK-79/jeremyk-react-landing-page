import React from "react";
import Navbar from "./NavBar";
import Hero from "./Hero";
import Card from "./Card";

//include images into your bundle


//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="row">
				<div className="col-2"></div>
				<div className="col-8 container d-flex">
				<Hero />
				</div>
				<div className="col-2"></div>
			</div>
			<Card />
		</>
	);
};

export default Home;