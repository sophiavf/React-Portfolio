import React from "react";
import { content } from "../Content";

interface TechnologyBoxProps {
	technologies?: string[]; // Optional array of technologies to filter
	displayAll?: boolean;
}

export default function TechnologyBox({
	technologies = [],
	displayAll = false,
}: TechnologyBoxProps) {
	const { skills } = content;
	let filteredTechnologies = skills.skills_content;

	if (technologies.length > 0) {
		filteredTechnologies = skills.skills_content.filter(
			(tech: { name: any; logo: any }) => technologies.includes(tech.name)
		);
	} else if (!displayAll) {
		return null;
	}
	// Sort the technologies in ascending order based on name
	filteredTechnologies.sort((a, b) => a.name.localeCompare(b.name));
	
	return (
		<>
			<div className="flex flex-wrap gap-2 justify-center">
				{filteredTechnologies.map((skill, i) => (
					<div
						key={i}
						data-aos="fade-up"
						data-aos-delay={i * 80}
						className="bg-white sm:cursor-pointer flex group items-center gap-2 px-5 py-2 rounded-md border-2 border-slate-200"
						style={{ display: "inline-flex" }}
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
		</>
	);
}
