// import images
import Hero_person from "./assets/images/Hero/person.png";

import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import typescript from "./assets/images/Skills/typeScript.png";
import firebase from "./assets/images/Skills/firebase.png";
import git from "./assets/images/Skills/git.png";
import tailwindCss from "./assets/images/Skills/tailwindCSS.png";
import reactRouter from "./assets/images/Skills/reactRouter.png";

import project1 from "./assets/images/Projects/MunichTechEventAggregator.gif";
import project2 from "./assets/images/Projects/WeatherApp.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward } from "react-icons/md";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { GoProjectRoadmap, GoGraph, GoCreditCard } from "react-icons/go";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

const currentYear = new Date().getFullYear();

export const content = {
	nav: [
		{
			link: "#home",
			icon: TbSmartHome,
		},
		{
			link: "#skills",
			icon: BiUser,
		},
		{
			link: "#services",
			icon: RiServiceLine,
		},
		{
			link: "#projects",
			icon: RiProjectorLine,
		},
		{
			link: "#contact",
			icon: MdOutlinePermContactCalendar,
		},
	],
	hero: {
		title: "Web Developer",
		firstName: "SOPHIA",
		LastName: "FAIRBAIRN",
		btnText: "Hire Me",
		image: Hero_person,
		hero_content: [
			{
				count: "4+",
				text: "Years of Experinse in Web development",
			},
			{
				count: "20+",
				text: "Projects Worked in my career",
			},
		],
	},
	//https://icons8.de/icons/
	skills: {
		title: "Skills",
		subtitle: "MY TOP SKILLS",
		skills_content: [
			{
				name: "TypeScript",
				para: "Lorem ipsum text  dummy",
				logo: typescript,
			},
			{
				name: "Node.js",
				para: "Lorem ipsum text  dummy",
				logo: nodejs,
			},
			{
				name: "React.js",
				para: "Lorem ipsum text  dummy",
				logo: reactjs,
			},
			{
				name: "Firebase",
				para: "Lorem ipsum text  dummy",
				logo: firebase,
			},
			{
				name: "Git",
				para: "Lorem ipsum text  dummy",
				logo: git,
			},
			{
				name: "Tailwind CSS",
				para: "Lorem ipsum text  dummy",
				logo: tailwindCss,
			},
			{
				name: "React Router",
				para: "Lorem ipsum text  dummy",
				logo: reactRouter,
			},
		],
		icon: MdArrowForward,
	},
	services: {
		title: "Transferable skills & Experience",
		subtitle: "WHAT I OFFER",
		service_content: [
			{
				title: "Project & Product Management",
				para: "With experience in account management at a software company, I've collaborated with key stakeholders to scope, test, and implement new features for web applications. This experience has allowed me to understand the software development lifecycle and the importance of clear communication between technical and non-technical teams as well as QA. I've led client calls and projects from conception to completion, ensuring all deliverables met project requirements and were delivered on time. This experience will be invaluable in a software development role where project management skills are crucial.",
				logo: GoProjectRoadmap,
			},
			{
				title: "Marketing",
				para: "As a Social Media Consultant and Marketing Project Manager, I've developed and executed content strategies, channel distribution plans, and schedules, resulting in a significant increase in web traffic. I've also designed and implemented a Messenger chatbot to provide information and connect prospects with sales consultants. This experience has given me a deep understanding of user engagement and the role of technology in marketing, which will be beneficial in developing software that meets user needs and market demands.",
				logo: GoGraph,
			},
			{
				title: "Finance / Accounting",
				para: "During my time as an Account Manager, I streamlined bulk financial payment processing by introducing process automation improvements that reduced processing time by 20%, enhancing efficiency and accuracy. My Bachelor's degree in Commerce, majoring in Accounting and Commercial Law, has provided me with a solid foundation in financial principles. This knowledge will be useful in developing software for financial applications and understanding the financial implications of software development decisions.",
				logo: GoCreditCard,
			},
		],
	},
	Projects: {
		title: "Projects",
		subtitle: "MY CREATION",
		project_content: [
			{
				title: "Munich Tech Event Aggregator",
				image: project1,
			},
			{
				title: "Social Media web",
				image: project2,
			},
			{
				title: "My Portfolio Site",
				image: project2,
			},
		],
	},
	Contact: {
		title: "Contact Me",
		subtitle: "GET IN TOUCH",
		social_media: [
			{
				text: "sophiafairbairn@gmail.com",
				icon: GrMail,
				link: "mailto:sophiafairbairn@gmail.com",
			},
			{
				text: "Sophia Fairbairn",
				icon: AiFillLinkedin,
				link: "https://www.linkedin.com/in/sophiafairbairn/",
			},
			{
				text: "sophiavf",
				icon: AiFillGithub,
				link: "https://github.com/sophiavf",
			},
		],
	},
	Footer: {
		text: `All © Copy Right Reserved ${currentYear}`,
	},
};
