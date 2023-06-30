import React, { createElement, useState } from "react";
import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";

export default function Navbar() {
	const { nav } = content;
	const [showMenu, setShowMenu] = useState(false);
	const [active, setActive] = useState(0);

	return (
		<div className=" w-full flex justify-center">
			<div
				onClick={() => setShowMenu(!showMenu)}
				className="sm:cursor-pointer fixed top-10 left-10 z-[999] rounded-lg bg-bg_light_primary p-2"
			>
				<HiMenuAlt2 size={34} />
			</div>
			<nav
				className={`fixed bottom-10 z-[999] flex items-center gap-5 bg-white opacity-80 px-6 py-3 backdrop-blur-md rounded-full text-dark_primary duration-300 ${
					showMenu ? "bottom-10" : "bottom-[-100%]"
				}`}
			>
				{nav.map((item, i) => (
					<a
						key={i}
						href={item.link}
						onClick={() => setActive(i)}
						className={`text-xl p-2 rounded-full sm:cursor-pointer ${
							i === active && " bg-dark_primary text-white"
						}`}
					>
						{createElement(item.icon)}
					</a>
				))}
			</nav>
		</div>
	);
}
