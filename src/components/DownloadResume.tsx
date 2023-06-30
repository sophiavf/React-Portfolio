import React from "react";
import { content } from "../Content";

export default function DownloadResume() {
	const { downloadResume } = content;
	return (
		<section className="bg-white">
			<div className="md:container px-5 pt-14">
				<h2 className="title" data-aos="fade-down">
					{downloadResume.title}
				</h2>
				<h4 className="subtitle" data-aos="fade-down">
					{downloadResume.subtitle}
				</h4>
				<br />
				<div className="flex items-center md:flex-row flex-col-reverse ">
					<div
						data-aos="fade-left"
						className="border-2 border-dark_primary max-w-sm
         p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
					>
						<p className="leading-7">{downloadResume.para}</p>
						<br />
						<button className="btn bg-dark_primary text-white">
							{downloadResume.btnText}
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
