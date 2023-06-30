import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Root from "./routes/Root";
import ProjectPage from "./routes/ProjectPage";
const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}

root.render(
	<div>
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Root />} />
				<Route path="/project/:projectId" element={<ProjectPage />} />,
			</Routes>
		</BrowserRouter>
	</div>
);
