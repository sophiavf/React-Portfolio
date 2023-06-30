// import photos
import Hero_person from "./assets/images/Hero/person.png";

// skills icons
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

// project gifs abd pics
import project1 from "./assets/images/Projects/MunichTechEventAggregator.gif";
import project2 from "./assets/images/Projects/WeatherApp.gif";
import project3 from "./assets/images/Projects/MyPortfolioSite.gif";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdOutlinePermContactCalendar } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoProjectRoadmap, GoGraph, GoCreditCard } from "react-icons/go";
import { BiCodeAlt, BiHome } from "react-icons/bi";
import { RiProjectorLine } from "react-icons/ri";
import { HiOutlineDocument } from "react-icons/hi";

import { LuHelpingHand } from "react-icons/lu";

const technologyObjects = [
	{
		image: reactjs,
		name: "",
	},
	{
		image: typescript,
		name: "",
	},
];

const currentYear = new Date().getFullYear();

export const content = {
	nav: [
		{
			link: "#home",
			icon: BiHome,
		},
		{
			link: "#skills",
			icon: BiCodeAlt,
		},
		{
			link: "#projects",
			icon: RiProjectorLine,
		},
		{
			link: "#whatIoffer",
			icon: LuHelpingHand,
		},
		{
			link: "#resume",
			icon: HiOutlineDocument,
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
				technologies: [typescript, reactjs, reactRouter, playwright, jest],
				livePreview: "https://my-tech-event-aggregator.web.app/",
				repo: "https://github.com/sophiavf/My-Project-Event-App",
				purposeAndGoal:
					"As a proactive software developer, I prioritise staying up-to-date with best practices and technologies through industry events. However, I noticed a lack of a centralised view for relevant tech events in Munich. To address this, I developed an application for my personal use that consolidates tech events from Meetup and Eventbrite into a centralised database which is then displayed on my frontend. The application utilises TypeScript, React, Playwright for data collection, Firebase (hosting, serverless functions, and Firestore database), and Tailwind CSS to enable more efficient event discovery. Jest was used to write unit and integration tests for the backend code.",
				stackExplanation:
					"I chose Firebase, a google back end as a service platform, which streamlines the process of building full-stack apps on top of google cloud products. It also allows me to add authorization later. For the database, I am using Firestore which is a no SQL database to store the event records.",
				problemsAndProcess: [
					"One of the challenges I encountered was obtaining data from both Meetup and Eventbrite, as they utilize different approaches for data delivery. For Eventbrite, instead of scraping the website DOM, I used Playwright to set up a listener for responses containing specific text, which efficiently captured the JSON data for all events. As Eventbrite uses traditional pagination, it was necessary to cycle through all pages to retrieve complete event data.",
					"On the other hand, Meetup employs an infinite scrolling approach. In the server-side generated content, a script tag contains all the events. By extracting this information, I was able to retrieve the desired data from Meetup.",
					"Given that my event scrapers required external HTTP requests, I upgraded to the paid tier of Firebase. To avoid potential issues when running on Google Cloud Functions, I conducted thorough testing using the Playwright testing library and Jest. This ensured the accuracy of the extracted data and verified the proper functioning of the Firestore functions.",
					"I implemented three scheduled cloud functions in total: 'Cleanup Events' function removes events that have already occurred. 'Meetup Scraper' function retrieves all tech events in Munich from meetup.com. 'Eventbrite Scraper' function retrieves all free tech events from eventbrite.com. During the scraper runs, a comparison is performed between the newly scraped events and those in the database, removing any events that are no longer available on the websites, which may be due to cancellations or changes made by the organizers.",
				],
				roadmap: [
					"Allow users to search for tech events in various cities, beyond just Munich.",
					"Implement authorization functionality to enable users to favorite events and personalize their experience.",
					"Display information on the frequency of events on certain days, aiding event organizers in avoiding clashes and helping attendees choose from a wider range of options.",
				],
			},
			{
				title: "Weather App",
				id: "WeatherApp",
				image: project2,
				livePreview: "https://sophiavf.github.io/Project-Weather-App/",
				repo: "https://github.com/sophiavf/Project-Weather-App",
				purposeAndGoal: "",
				stackExplanation: "",
				problemsAndProcess: [],
				roadmap: ["Ford", "BMW", "Fiat"],
			},
			{
				title: "My Portfolio Site",
				id: "MyPortfolioSite",
				image: project3,
				livePreview: "devbysophia.online",
				repo: "https://github.com/sophiavf/React-Portfolio",
				purposeAndGoal: "",
				stackExplanation: "",
				problemsAndProcess: [],
				roadmap: ["Ford", "BMW", "Fiat"],
			},
		],
	},
	downloadResume: {
		title: "Resume",
		subtitle: "Review my Experience & Formal Qualifications",
		para: "If you have any further questions about my skills or experience, please don't hesitate to contact me below",
		btnText: "Download Resume",
		btnLink:
			"https://drive.google.com/file/d/1XEJR-zIFEx4oiIwg0ZiKfrFB-rRTGTzL/view?usp=sharing",
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
		text: `© ${currentYear} Sophia. All rights reserved.`,
	},
};
