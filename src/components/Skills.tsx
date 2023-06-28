import { createElement } from "react";
import { content } from "../Content";
import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		maxWidth: "23rem",
		width: "90%",
	},
	overlay: {
		padding: "2rem",
	},
};

interface skillContent {
	name: string;
	para: string;
	logo: any;
}

Modal.setAppElement("#root");

const Skills = () => {
	const { skills } = content;
	const [modalIsOpen, setIsOpen] = useState(false);
	const [selectSkill, setSelectSkill] = useState<skillContent | null>(null);
	function openModal() {
		setIsOpen(true);
	}
	function closeModal() {
		setIsOpen(false);
	}

	return (
		<section className="min-h-fit bg-bg_light_primary" id="skills">
			{/* modal */}
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
			>
				<div className="flex items-center gap-2">
					<img className="h-10" src={selectSkill?.logo} alt="..." />
					<h6>{selectSkill?.name}</h6>
				</div>
				<br />
				<ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7">
					<li>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Perspiciatis quasi repellat quo modi. Atque mollitia modi
						voluptatibus qui, adipisci iure asperiores tempore iusto aspernatur
						dicta, voluptate iste sequi assumenda nostrum!
					</li>
					<li>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
						veniam dolorum in labore nemo et placeat blanditiis, dicta
						cupiditate voluptates deserunt excepturi magni! Harum autem dolores
						minima quam suscipit. Necessitatibus?
					</li>
					<li>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
						nam possimus magni commodi illo reprehenderit accusamus corporis
						veritatis laboriosam deserunt odit fuga mollitia assumenda, porro
						ea.
					</li>
				</ul>
				<br />
				<div className="flex">
					<button onClick={closeModal} className="btn">
						Close
					</button>
				</div>
			</Modal>
			{/* content */}
			<div className="md:container px-5 py-14">
				<h2 className="title">{skills.title}</h2>
				<h4 className="subtitle">{skills.subtitle}</h4>
				<br />
				<div className="flex flex-wrap gap-4 justify-center">
					{skills.skills_content.map((skill, i) => (
						<div
							key={i}
							className="bg-white sm:cursor-pointer relative flex group w-full items-center gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
						>
							<img
								src={skill.logo}
								alt="..."
								className="w-10 group-hover:scale-125 duration-200"
							/>
							<div>
								<h6>{skill.name}</h6>
								<p className="italic">{skill.para}</p>
							</div>
							<div
								onClick={() => {
									setSelectSkill(skill);
									openModal();
									console.log(skill);
								}}
								className="text-xl absolute top-3 right-3"
							>
								{createElement(skills.icon)}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
