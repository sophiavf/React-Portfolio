import { content } from "../Content";
import React from "react";
import TechnologyBox from "./TechnologyBox";

export default function Skills() {
	const { skills } = content;

	return (
		<section className="min-h-fit bg-bg_light_primary" id="skills">
			{/* content */}
			<div className="md:container px-5 py-14">
				<h2 className="title" data-aos="fade-down">
					{skills.title}
				</h2>
				<h4 className="subtitle" data-aos="fade-down">
					{skills.subtitle}
				</h4>
				<br />
				<TechnologyBox displayAll={true} />
			</div>
		</section>
	);
}
