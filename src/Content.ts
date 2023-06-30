// import images
import Hero_person from "./assets/images/Hero/person.png";

import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import typescript from "./assets/images/Skills/typeScript.png";
import firebase from "./assets/images/Skills/firebase.png";
import git from "./assets/images/Skills/git.png";
import tailwindCss from "./assets/images/Skills/tailwindCSS.png";
import reactRouter from "./assets/images/Skills/reactRouter.png";
import jest from "./assets/images/Skills/jest.png";
import vite from "./assets/images/Skills/Vitejs-logo.svg";
import express from "./assets/images/Skills/expressjs.png";
import javaScript from "./assets/images/Skills/JavaScript.png";
import playwright from "./assets/images/Skills/playwright.svg";
import java from "./assets/images/Skills/java.png";
import googleCloudFunctions from "./assets/images/Skills/googleCloudFunctions.png";

import project1 from "./assets/images/Projects/MunichTechEventAggregator.gif";
import project2 from "./assets/images/Projects/WeatherApp.gif";

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
			link: "#what I offer",
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
		title: "Software Developer",
		firstName: "SOPHIA",
		LastName: "FAIRBAIRN",
		btnText: "Hire Me",
		image: Hero_person,
		hero_content: [
			{
				count: "4+",
				text: "Years of transferable experience in project management and marketing",
			},
			{
				count: "2+",
				text: "Years of studying computer engineering & honing my skills through projects",
			},
		],
	},
	//https://icons8.de/icons/
	skills: {
		title: "Skills",
		subtitle: "MY TECHNICAL SKILLS",
		skills_content: [
			{
				name: "TypeScript",
				logo: typescript,
			},
			{
				name: "Node.js",
				logo: nodejs,
			},
			{
				name: "React.js",
				logo: reactjs,
			},
			{
				name: "Firebase",
				logo: firebase,
			},
			{
				name: "Git",
				logo: git,
			},
			{
				name: "Tailwind CSS",
				logo: tailwindCss,
			},
			{
				name: "React Router",
				logo: reactRouter,
			},
			{
				name: "Jest",
				logo: jest,
			},
			{
				name: "Vite",
				logo: vite,
			},
			{
				name: "Express.js",
				logo: express,
			},
			{
				name: "JavaScript",
				logo: javaScript,
			},
			{
				name: "Playwright",
				logo: playwright,
			},
			{
				name: "Java",
				logo: java,
			},
			{
				name: "Google Cloud Functions",
				logo: googleCloudFunctions,
			},
		],
		icon: MdArrowForward,
	},
	WhatIOffer: {
		title: "Transferable skills & Experience",
		subtitle: "WHAT I OFFER",
		WhatIOffer_content: [
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
		subtitle: "MY CREATIONS",
		project_content: [
			{
				title: "Munich Tech Event Aggregator",
				id: "MunichTechEventAggregator",
				image: project1,
				livePreview: "https://my-tech-event-aggregator.web.app/",
				repo: "https://github.com/sophiavf/My-Project-Event-App",
				purposeAndGoal: "",
				stackExplanation: "",
				problemsAndProcess: "",
				roadmap: "",
			},
			{
				title: "Weather App",
				id: "WeatherApp",
				image: project2,
				livePreview: "https://sophiavf.github.io/Project-Weather-App/",
				repo: "https://github.com/sophiavf/Project-Weather-App",
				purposeAndGoal: "",
				stackExplanation: "",
				problemsAndProcess: "",
				roadmap: "",
			},
			{
				title: "My Portfolio Site",
				id: "MyPortfolioSite",
				image: project2,
				livePreview: "",
				repo: "",
				purposeAndGoal: "",
				stackExplanation: "",
				problemsAndProcess: "",
				roadmap: "",
			},
		],
	},
	downloadResume: {
		title: "",
		subtitle: "",
		para: "",
		btnText: "Download Resume",
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
