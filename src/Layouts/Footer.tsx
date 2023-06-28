import React from "react";

export default function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="text-center">
			<h6 className="mb-3">Sophia Fairbairn</h6>
			<p>© All CopyRights Reserved{currentYear} </p>
		</footer>
	);
}
