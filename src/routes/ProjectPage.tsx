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
			<div className="flex flex-col items-center justify-start flex-grow">
				<Link to="/" className="flex items-center mt-4 cursor-pointer">
					<IoIosArrowBack className="mr-2" />
					Back to homepage
				</Link>
				<div className="flex flex-col items-center mt-4">
					<h1 className="text-4xl font-bold mb-4">{targetProject?.title}</h1>
					<div>
						<img
							className="rounded shadow min-h-full"
							src={targetProject?.image}
							alt="..."
						/>
					</div>
					<div className="max-w-3xl mx-auto">
						<h2 className="text-2xl font-bold mb-2">
							Project Purpose and Goal
						</h2>
						<p className="mb-6"></p>
						<h2 className="text-2xl font-bold mb-2">
							Web Stack and Explanation
						</h2>
						<p className="mb-6"></p>
						<h2 className="text-2xl font-bold mb-2">
							Problems and Thought Process
						</h2>
						<p className="mb-6"></p>
						<h2 className="text-2xl font-bold mb-2">Roadmap</h2>
						<p className="mb-6"></p>
						<div className="flex justify-between">
							<button className="btn">
								<Link
									to={{ pathname: targetProject?.livePreview }}
									target="_blank"
								>
									Open live preview
								</Link>
							</button>
							<button className="btn">
								<Link to={{ pathname: targetProject?.repo }} target="_blank">
									Click to see code
								</Link>
							</button>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
