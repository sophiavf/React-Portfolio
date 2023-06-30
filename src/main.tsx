import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Root from "./routes/Root";
import ErrorPage from "./routes/ErrorPage";
import ProjectPage from "./routes/ProjectPage";
const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
import { BrowserRouter, Route, Routes } from "react-router-dom";

root.render(
	<div>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Root />} />
				<Route path="/project/:projectId" element={<ProjectPage />} />,
			</Routes>
		</BrowserRouter>
	</div>
);
