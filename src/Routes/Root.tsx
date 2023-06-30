import Navbar from "../Layouts/Navbar";
import Hero from "../Components/Hero";
import Skills from "../Components/Skills";
import Service from "../Components/WhatIOffer";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import DownloadResume from "../Components/DownloadResume";
import Footer from "../Layouts/Footer";
import React, { useEffect } from "react";

//Animation
import Aos from "aos";
import "aos/dist/aos.css";

export default function Root() {
	useEffect(() => {
		Aos.init({
			duration: 1800,
			offset: 100,
		});
	}, []);
	return (
		<div className="">
			<Navbar />
			<Hero />
			<Skills />
			<Projects />
			<Service />
			<DownloadResume />
			<Contact />
			<Footer />
		</div>
	);
}
