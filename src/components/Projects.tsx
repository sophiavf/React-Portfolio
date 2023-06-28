import React from "react";
import { content } from "../Content";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function Projects() {
	const { Projects } = content;
	return (
		<section className="bg-bg_light_primary">
			<div className="md:container px-5 pt-14 min-h-50 flex-col justify-between">
				<div>
					<h2 className="title">{Projects.title}</h2>
					<h4 className="subtitle">{Projects.subtitle}</h4>
					<br />
				</div>
				<div className="flex items-center lg:flex-wrap flex-col-reverse gap-5 pb-14">
					<Swiper
						pagination={{
							clickable: true,
						}}
						data-aos="fade-left"
						spaceBetween={20}
						modules={[Pagination]}
						className="rounded-3xl pb-16 max-w-xl drop-shadow-primary self-start"
					>
						{Projects.project_content.map((content, i) => (
							<SwiperSlide
								key={i}
								className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
							>
								<div className="flex justify-center ">
									<img className="rounded shadow min-h-72 max-h-72" src={content.image} alt="..." />
								</div>
								<div className="flex flex-col gap-1 mt-2">
									<h5 className="font-bold font-Poppins">{content.title}</h5>
									<button className="font-bold text-gray self-end">
										READ MORE
									</button>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
}
export default Projects;
