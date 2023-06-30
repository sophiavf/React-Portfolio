import Navbar from "../Layouts/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Service from "../components/WhatIOffer";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import DownloadResume from "../components/DownloadResume";
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
