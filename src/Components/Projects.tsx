import React from "react";
import { content } from "../Content";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

export default function Projects() {
	const { Projects } = content;

	SwiperCore.use([Autoplay]);
	return (
		<section className="bg-white" id="projects">
			<div className="md:container px-5 pt-14 flex-col justify-between">
				<div>
					<h2 className="title" data-aos="fade-down">
						{Projects.title}
					</h2>
					<h4 className="subtitle" data-aos="fade-down">
						{Projects.subtitle}
					</h4>
					<br />
				</div>
				<div className="flex items-center pb-14">
					<Swiper
						pagination={{
							clickable: true,
						}}
						data-aos="fade-left"
						spaceBetween={20}
						autoplay={{ delay: 2000 }}
						loop={true}
						modules={[Pagination]}
						className="rounded-3xl pb-16 md:w-7/12 w-11/12 drop-shadow-primary self-start"
						slidesPerView={1}
					>
						{Projects.project_content.map((content, i) => (
							<SwiperSlide
								key={i}
								className="bg-bg_light_primary rounded-3xl md:p-10 p-5 border-b-8 border-bg_medium_primary min-h-3/4 max-h-3/4"
							>
								<div className="flex-grow">
									<div className="">
										<img
											className="rounded shadow object-cover h-full w-full"
											src={content.image}
											alt="..."
											data-aos="fade-right"
										/>
									</div>
								</div>
								<div className="flex flex-col gap-1 mt-2">
									<h5 className="font-bold font-Poppins text-dark_primary">
										{content.title}
									</h5>
									<button className="btn self-end text-xs md:text-sm">
										<Link to={`/project/${content.id}`}>READ MORE</Link>
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
