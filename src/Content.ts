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
import gitlab from "./assets/images/Skills/gitlab.png";
import netlify from "./assets/images/Skills/netlify.png";
import webpack from "./assets/images/Skills/webpack.png";
import css from "./assets/images/Skills/css.png";
import html from "./assets/images/Skills/html.png";
import npm from "./assets/images/Skills/npm.png";

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

// import certification logos
import dataCamp from "./assets/images/Certifications/dataCamp.webp";
import udemy from "./assets/images/Certifications/logo-udemy.svg"

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
		title: "Technical Skills",
		subtitle: "LANGUAGES AND TOOLS",
		skills_content: [
			{
				name: "TypeScript",
				logo: typescript,
				category: "language",
			},
			{
				name: "Node.js",
				logo: nodejs,
				category: "language",
			},
			{
				name: "React.js",
				logo: reactjs,
				category: "framework",
			},
			{
				name: "Firebase",
				logo: firebase,
				category: "platform",
			},
			{
				name: "Git",
				logo: git,
				category: "tool",
			},
			{
				name: "Tailwind CSS",
				logo: tailwindCss,
				category: "framework",
			},
			{
				name: "React Router",
				logo: reactRouter,
				category: "framework",
			},
			{
				name: "Jest",
				logo: jest,
				category: "framework",
			},
			{
				name: "Vite",
				logo: vite,
				category: "tool",
			},
			{
				name: "Express.js",
				logo: express,
				category: "framework",
			},
			{
				name: "JavaScript",
				logo: javaScript,
				category: "language",
			},
			{
				name: "Playwright",
				logo: playwright,
				category: "framework",
			},
			{
				name: "Java",
				logo: java,
				category: "language",
			},
			{
				name: "Gitlab",
				logo: gitlab,
				category: "platform",
			},
			{
				name: "Netlify",
				logo: netlify,
				category: "platform",
			},
			{
				name: "Webpack",
				logo: webpack,
				category: "bundler",
			},
			{
				name: "HTML",
				logo: html,
				category: "language",
			},
			{
				name: "CSS",
				logo: css,
				category: "language",
			},
			{
				name: "NPM",
				logo: npm,
				category: "tool",
			},
		],
		icon: MdArrowForward,
	},
	aboutMe: [
		{
			Certifications: {
				title: "Certificates",
				subtitle: "",
				certifications_content: [
					{
						title: "Intermediate R",
						IssuingOrg: [{ name: "DataCamp", logo: dataCamp }],
						issueDate: new Date("October, 2020"),
						URL: "https://www.datacamp.com/statement-of-accomplishment/course/f6e7ffb0d0d9f687332689045f3887cdd0d646f3",
						skills: [
							"Statistical Data Analysis",
							"Data Analysis",
							"Data Modeling",
						],
					},
					{
						title: "Introduction to Relational Databases in SQL",
						IssuingOrg: [{ name: "DataCamp", logo: dataCamp }],
						issueDate: new Date("January, 2021"),
						URL: "https://www.datacamp.com/statement-of-accomplishment/course/aa6e8c6bd22d17e7a776c4d12c88fbb9e2f7df6d?raw=1",
						skills: [
							"SQL commands",
							"Enforce data consistency with attribute constraints",
							"Uniquely identify records with key constraints",
							"Glue together tables with foreign keys",
						],
					},
					{
						title: "Computer Science Career Path",
						IssuingOrg: [{ name: "Codecademy", logo: dataCamp }],
						issueDate: "",
						URL: "https://www.codecademy.com/profiles/Sophiavf/certificates/5b5001a11d176d7acd8b2bf8",
						skills: [
							"Conditionals and Control Flow",
							"Loops",
							"Functions",
							"The apply family",
							"Utilities",
						],
					},
					{
						title:
							"Introduction to Project Management Principles and Practices Specialization",
						IssuingOrg: [{ name: "Coursera", logo: dataCamp }],
						issueDate: "",
						URL: "https://www.coursera.org/account/accomplishments/specialization/8JBM5FJ8VHL7",
						skills: [
							"Managing Project Budgets",
							"Risk Management",
							"Scheduling",
							"Project Management",
							"Project Planning",
						],
					},
					{
						title: "GitLab CI: Pipelines, CI/CD and DevOps for Beginners",
						IssuingOrg: [{ name: "Udemy", logo: udemy }],
						issueDate: "",
						URL: "https://www.udemy.com/certificate/UC-89b23b54-de07-44d3-8068-d2e8dbe11d7d/?utm_campaign=email&utm_source=sendgrid.com&utm_medium=email",
						skills: [
							"Automatic deployments using AWS",
							"Automate your builds, tests, and deployments",
							"Build pipelines with code quality checks, unit tests, API testing",
							"Dynamic environments",
							"Learn industry 'best practices' in building CI/CD pipelines",
						],
					},
				],
			},
		},
		{
			education: {
				title: "Education",
				subtitle: "",
				certifications_content: [
					{
						title: "",
						start: "",
						finish: "",
						instituition: "",
					},
					{
						title: "",
						start: "",
						finish: "",
						instituition: "",
					},
				],
			},
		},
	],
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
				technologies: [
					"TypeScript",
					"React.js",
					"Playwright",
					"Jest",
					"Firebase",
					"Tailwind CSS",
					"Node.js",
					"Git",
					"React Router",
					"Vite",
				],
				livePreview: "https://my-tech-event-aggregator.web.app/",
				repo: "https://github.com/sophiavf/My-Project-Event-App",
				purposeAndGoal:
					"The aim of this project was to address the absence of a single resource for tracking technology-related events in Munich. Consequently, I created an application to amalgamate data from Meetup and Eventbrite, presenting it through a frontend interface. The tool is developed using TypeScript, React, Playwright for data scraping, Firebase for backend services, and Tailwind CSS for styling. Moreover, Jest is utilized for backend testing to ensure robustness.",
				stackExplanation:
					"Backend Service: Firebase was chosen due to its comprehensive back-end-as-a-service capabilities. It streamlines the development process and integrates efficiently with Google Cloud products. The potential future integration of user authorization was also a consideration. Database: Firestore, a NoSQL database within Firebase, was adopted for storing event information.",
				problemsAndProcess: [
					"Extracting data from Meetup and Eventbrite was complex due to varied data formats. Playwright was used with Eventbrite to monitor responses containing specific text, thus capturing JSON data. For Meetup, data extraction was performed from a script tag in server-rendered content. The event summary for Meetup came back in markdown notation, which when rendered as is caused CSS formatting issues so it is converted into HTML using a plugin.",
					"To accommodate external HTTP requests made by the data collectors, I upgraded to Firebase's paid tier. To avoid inaccuracy and ensure cost-effectiveness, extensive testing was performed using Playwright and Jest.",
					"Using a Procedure-driven approach, three cloud functions were deployed to run daily to scheduled times which perform tasks updating the database with new events, updating existing records, and removing old or irrelevant events: 1) Cleanup Events - deletes outdated events. 2) Meetup Scraper - aggregates technology events in Munich from meetup.com. 3) Eventbrite Scraper - accumulates free technology events from eventbrite.com.",
					"After data collection, the application cross-references the newly scraped data with existing records to update changes or removals due to event cancellations or alterations.",
				],
				roadmap: [
					"Geographic Expansion: Evolve the application to facilitate tech event searches in various cities.",
					"User Authorization: Implement user authentication to enable personalized features such as event bookmarking.",
					"Data Visualization: Exhibit data on event frequencies to assist event organizers in planning their schedules strategically.",
				],
			},
			{
				title: "My Portfolio Site",
				id: "MyPortfolioSite",
				image: project3,
				technologies: [
					"TypeScript",
					"React.js",
					"Tailwind CSS",
					"Git",
					"React Router",
					"Vite",
				],
				livePreview: "https://devbysophia.online/",
				repo: "https://github.com/sophiavf/React-Portfolio",
				purposeAndGoal:
					"I constructed this personal website to exhibit my portfolio and skills in a structured manner. Additionally, I used this project as an opportunity to improve my React skills. The idea is to have a functional evidence of my ongoing engagement and commitment to development.",
				stackExplanation:
					"Bundler: I adopted Vite because it integrates well with GitHub Pages and exhibits efficient build times - this ensures faster deployment cycles. Main Framework: React.js was utilized because its component-centric architecture is conducive to reusable code and structured coding practices. Type Checking: TypeScript was integrated to enforce type consistency; this aids in preemptively catching errors and improves code quality. Navigation Handling: To achieve clutter-free navigation, React Router was used; this library makes it easier to switch between components and adds to user experience. Styling: Tailwind CSS was chosen due to its provision for custom styling options, which is imperative for a responsive and modern look.",
				problemsAndProcess: [
					"A major challenge was to achieve a balance between responsive design and aesthetic appeal, mainly in the hero and project sections. To establish this, I undertook multiple rounds of code tweaking and optimization, leveraging the development server and Chrome DevTools.",
				],
				roadmap: [
					"Skills Representation: I have structured to accumulate skills in an array of objects with each containing an icon and the skill name. This format will ensure an efficient and reusable manner of displaying skills.",
					"Technology Details: I will add a section on each project page, listing the technologies and tools used. This serves to inform the viewer of the technicalities of each project.",
					"Experience Chart: I will incorporate a component that graphically displays my educational and professional milestones.",
					"Blogs: I plan to have an allocated area linking to my articles, facilitating an avenue for sharing my professional viewpoints and analyses.",
				],
			},
			{
				title: "Weather App",
				id: "WeatherApp",
				image: project2,
				technologies: [
					"JavaScript",
					"React.js",
					"Express.js",
					"Node.js",
					"Git",
					"Vite",
					"Netlify",
					"Tailwind CSS",
				],
				livePreview: "https://sophiavf.github.io/Project-Weather-App/",
				repo: "https://github.com/sophiavf/Project-Weather-App",
				purposeAndGoal:
					"The objective behind developing this weather application was to create a secure and responsive tool while simultaneously enhancing my familiarity with React hooks. The focus was primarily on efficient state management using React hooks such as useState, useEffect, and context, to foster reusability and circumvent prop-drilling.",
				stackExplanation:
					"Architecture and Framework: The application is based on a serverless architecture, utilizing Express.js in conjunction with Netlify’s AWS serverless functions. This combination streamlined the deployment process while ensuring the security of API keys. Styling: Tailwind CSS was employed for styling components, which contributed to both the visual appeal and responsiveness of the application.",
				problemsAndProcess: [
					"One of the primary challenges was the lack of up-to-date documentation regarding the integration of Express for building an API on Netlify. The available documentation was outdated by three years and included deprecated features. Through a combination of troubleshooting and research, I was able to navigate these limitations.",
					"Additionally, to enhance the application’s dynamism, it was programmed to automatically determine the user's location based on their IP address. The application then fetches the prevailing weather conditions for that location, and selects an appropriate background image accordingly.",
				],
				roadmap: [],
			},
		],
	},
	downloadResume: {
		title: "Resume",
		subtitle: "REVIEW MY CREDENTIALS",
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
