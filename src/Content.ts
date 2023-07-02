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
import vite from "./assets/images/Skills/Vitejslogo.svg";
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
					"As a proactive software developer, I prioritize staying up-to-date with best practices and technologies by attending industry events. However, I noticed a lack of a centralised view for relevant tech events in Munich. To address this, I developed an application for my personal use that consolidates tech events from Meetup and Eventbrite into a centralised database which is then displayed on my frontend. The application utilises TypeScript, React, Playwright for data collection, Firebase (hosting, serverless functions, and Firestore database), and Tailwind CSS to enable more efficient event discovery. Jest was used to write unit and integration tests for the backend code.",
				stackExplanation:
					"I opted for Firebase because it's a robust and efficient backend-as-a-service platform by Google. It streamlines full-stack application development and offers easy integration with Google Cloud products. Firebase will also facilitate adding user authorization in the future. Firestore, a NoSQL database within Firebase, is used to store event records.",
				problemsAndProcess: [
					"Collecting data from Meetup and Eventbrite was challenging due to their different data delivery methods. For Eventbrite, I used Playwright to listen for responses containing specific text, capturing JSON data efficiently. Meetup's data was extracted from a script tag in server-side generated content.",
					"I upgraded to Firebase's paid tier to support the external HTTP requests made by the scrapers. To ensure accuracy and reliability as well as avoid any high usage bills, I thoroughly tested the scrapers with Playwright and Jest",
					"Three cloud functions, running daily, were implemented: 1)'Cleanup Events' removes past events. 2) 'Meetup Scraper' collects tech events in Munich from meetup.com. 3) 'Eventbrite Scraper' gathers free tech events from eventbrite.com. After scraping, the application compares the new data with the existing records in the database and removes any events no longer available, accounting for cancellations or changes by organizers.",
				],
				roadmap: [
					"Expand the application to allow users to search for tech events in different cities.",
					"Implement user authorization for personalized features like favoriting events.",
					"Display data on event frequencies to help organizers strategically schedule their events.",
				],
			},
			{
				title: "My Portfolio Site",
				id: "MyPortfolioSite",
				image: project3,
				livePreview: "https://devbysophia.online/",
				repo: "https://github.com/sophiavf/React-Portfolio",
				purposeAndGoal:
					"I embarked on creating a personal website to not only showcase my intriguing projects and diverse skill set but also to refine my proficiency in React. This platform will serve as a testament to my dedication and passion for web development.",
				stackExplanation:
					"I chose Vite as my bundler for its seamless integration with Github Pages and blazing fast build times. React.js was an obvious choice to enable component reusability and facilitate a more organized codebase. TypeScript was harnessed to ensure type safety, thus mitigating the risk of bugs. To further streamline the user experience, React Router was employed for effortless navigation among components. Tailwind CSS was key for bringing my aesthetic vision to life, ensuring a sleek and responsive modern design.",
				problemsAndProcess: [
					"Achieving a harmonious balance between responsiveness and aesthetics, particularly in the hero and projects components, was at times a challenging task. My endeavor to craft an engaging and fluid experience for all device types was met with several iterations and testing using the help of the development server and Chrome DevTools.",
				],
				roadmap: [
					"Skills Showcase: Store skills in an array of objects, each containing an icon and the name. This will allow for a streamlined and reusable display of my technical proficiencies.",
					"Project Technologies: Introduce a component on each project page that meticulously details the technologies and tools utilized.",
					"Experience Timeline: Incorporate a dynamic visual component on the root router to visually portray my education and relevant experiences.",
					"Blog Section: A dedicated space linking to articles I’ve penned, serving as a window into my thoughts and musings on various subjects.",
				],
			},
			{
				title: "Weather App",
				id: "WeatherApp",
				image: project2,
				livePreview: "https://sophiavf.github.io/Project-Weather-App/",
				repo: "https://github.com/sophiavf/Project-Weather-App",
				purposeAndGoal:
					"I created a weather application that is not only secure and responsive but also a playground for deepening my expertise in React hooks. With a keen eye on proficiently managing the application's state, React hooks like useState, useEffect, and context were utilized to achieve ease of reuse and avoid prop-drilling.",
				stackExplanation:
					"The weather application boasts a serverless architecture, combining the framework Express.js with the versatility of Netlify’s AWS serverless functions. This synergy not only streamlined the hosting process but also ensured that the API keys remained protected. Tailwind CSS was used to style the components, making the application visually appealing and responsive.",
				problemsAndProcess: [
					"For this project I was faced with the challenge of scarce and outdated documentation, particularly regarding the utilization of Express for crafting an API on Netlify. The documentation was from three years ago, and some of the features had since been deprecated. Through troubleshooting and research I made it work. To make the app more dynamic, it automatically fetches the user's location based on their IP address and uses the current weather condition to retrieve a relevant photo to be used as the background.",
				],
				roadmap: [],
			},
		],
	},
	downloadResume: {
		title: "Resume",
		subtitle: "REVIEW MY EXPERIENCE & FORMAL QUALIFICATIONS",
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
				text: "Send me an Email",
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
