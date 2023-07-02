import React from "react";
import Footer from "../Layouts/Footer";
import { Link, useParams } from "react-router-dom";

import { content } from "../Content";

import { IoIosArrowBack } from "react-icons/io";

export default function ProjectPage() {
	const { projectId } = useParams();
	const { Projects } = content;

	const targetProject = Projects.project_content.find(
		(project) => project.id === projectId
	);

	return (
		<div className="flex flex-col min-h-screen">
			<div className="flex flex-col items-center justify-start flex-grow ">
				<Link to="/" className="flex items-center mt-4 cursor-pointer">
					<IoIosArrowBack className="mr-2" />
					Back to homepage
				</Link>
				<div className="flex flex-col items-center mt-4">
					<h1 className="mb-4">{targetProject?.title}</h1>
					<div>
						<img
							className="rounded shadow min-h-full"
							src={targetProject?.image}
							alt="..."
						/>
					</div>
					<div className="max-w-3xl mx-auto pt-8 md:px-0 px-5">
						<h2 className="text-2xl font-bold mb-2">
							Project Purpose and Goal
						</h2>
						<h5 className="mb-6">{targetProject?.purposeAndGoal}</h5>
						<h2 className="text-2xl font-bold mb-2">
							Web Stack and Explanation
						</h2>
						<h5 className="mb-6">{targetProject?.stackExplanation}</h5>
						<h2 className="text-2xl font-bold mb-2">
							Problems and Thought Process
						</h2>
						{targetProject?.problemsAndProcess &&
							targetProject.problemsAndProcess.length > 0 &&
							targetProject?.problemsAndProcess.map((paragraph, index) => (
								<h5 key={index} className="py-3">
									{paragraph}
								</h5>
							))}
						<h5 className="mb-6">{targetProject?.problemsAndProcess}</h5>
						<div>
							{targetProject?.roadmap && targetProject.roadmap.length > 0 && (
								<>
									<h2 className="text-2xl font-bold mb-2">Roadmap</h2>
									<ul className="list-disc ml-6">
										{targetProject.roadmap.map((backlogItem, index) => (
											<li key={index}>
												<h5>{backlogItem}</h5>
											</li>
										))}
									</ul>
								</>
							)}
						</div>
						<div className="flex justify-evenly w-full py-8 md:text-sm text-xs md:gap-0 gap-5">
							<button className="btn">
								{targetProject && (
									<a
										href={targetProject.livePreview}
										target="_blank"
										rel="noopener noreferrer"
									>
										Open live preview
									</a>
								)}
							</button>
							<button className="btn">
								{targetProject && (
									<a
										href={targetProject.repo}
										target="_blank"
										rel="noopener noreferrer"
									>
										Click to see code
									</a>
								)}
							</button>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
