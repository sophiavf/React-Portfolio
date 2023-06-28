import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Service from "../components/Services";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../Layouts/Footer";
import React from "react";

export default function Root() {
	return (
		<div className="">
			<Hero />
			<Skills />
			<Projects />
			<Service />
			<Contact />
			<Footer />
		</div>
	);
}
