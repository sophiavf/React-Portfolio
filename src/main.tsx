import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Root from "./routes/Root";
const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Link,
} from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
	},
]);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
