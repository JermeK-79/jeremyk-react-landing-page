import React from "react";
import Navbar from "./NavBar";
import Hero from "./Hero";
import Card from "./Card";
import Footer from "./Footer";

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
			<div className="row mb-3">
				<div className="col-2"></div>
				<div className="col-8 container d-flex justify-content-evenly">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
				<div className="col-2"></div >
			</div>
			<Footer />
		</>
	);
};

export default Home;