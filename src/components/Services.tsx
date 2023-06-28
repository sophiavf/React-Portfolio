import React, { createElement } from "react";
import { content } from "../Content";

function Services() {
	const { services } = content;
	return (
		<section>
			<div className="md:container px-5 py-14">
				<h2 className="title">{services.title}</h2>
				<h4 className="subtitle">{services.subtitle}</h4>
				<br />
				<div className="flex gap-5 justify-between flex-wrap group">
					{services.service_content.map((content, i) => (
						<div
							key={i}
							className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm hover:!blur-none "
						>
							<div className="flex flex-col items-center">
								<h3 className="text-dark_primary">{createElement(content.logo)}</h3>
								<h6 className="my-3">{content.title}</h6>
								<h5 className="leading-7">{content.para}</h5>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Services;
