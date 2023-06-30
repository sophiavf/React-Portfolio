import { content } from "../Content";
import React from "react";

export default function Skills() {
	const { skills } = content;

	return (
		<section className="min-h-fit bg-bg_light_primary" id="skills">
			{/* content */}
			<div className="md:container px-5 py-14">
				<h2 className="title" data-aos="fade-down">
					{skills.title}
				</h2>
				<h4 className="subtitle" data-aos="fade-down">{skills.subtitle}</h4>
				<br />
				<div className="flex flex-wrap gap-4 justify-center">
					{skills.skills_content.map((skill, i) => (
						<div
							key={i}
							data-aos="fade-up"
							data-aos-delay={i * 100}
							className="bg-white sm:cursor-pointer flex group w-full items-center gap-5 p-3  rounded-md border-2 border-slate-200 max-w-[17rem]"
						>
							<img
								src={skill.logo}
								alt="..."
								className="w-10 group-hover:scale-125 duration-200"
							/>
							<div>
								<h6>{skill.name}</h6>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
