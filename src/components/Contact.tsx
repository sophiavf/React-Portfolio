import React, { createElement, useRef } from "react";
import { content } from "../Content";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
	const { Contact } = content;
	const form = useRef<HTMLFormElement>(null);

	const sendEmail = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		if (form.current == null) return;

		emailjs
			.sendForm(
				process.env.REACT_APP_YOUR_SERVICE_I ?? "",
				process.env.REACT_APP_YOUR_TEMPLATE_ID ?? "",
				form.current,
				process.env.REACT_APP_YOUR_PUBLIC_KEY ?? ""
			)
			.then(
				(result) => {
					console.log(result.text);
					toast.success(`Email sent successfully`);
					// Clear all input field values
					if (form.current) {
						form.current.reset();
					}
					// Success toast message
					toast.success("Email send Successfully");
				},
				(error) => {
					console.log(error.text);
					toast.error(error.text);
				}
			);
	};
	return (
		<section className="bg-dark_primary text-white" id="contact">
			<Toaster />
			<div className="md:container px-5 py-14">
				<h2 className="title text-white" data-aos="fade-down">
					{Contact.title}
				</h2>
				<h4 className="subtitle text-white" data-aos="fade-down">{Contact.subtitle}</h4>
				<br />
				<div className="flex gap-10 md:flex-row flex-col">
					<form
						ref={form}
						onSubmit={sendEmail}
						data-aos="fade-up"
						className="flex-1 flex flex-col gap-5"
					>
						{/* Input name as same as email template values*/}
						<input
							type="text"
							name="from_name"
							placeholder="Name"
							required
							className="border border-white p-3 rounded"
						/>
						<input
							type="email"
							name="user_email"
							placeholder="Email"
							required
							pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
							className="border border-white p-3 rounded"
						/>
						<textarea
							name="message"
							placeholder="Message"
							className="border border-white p-3 rounded h-44"
							required
						></textarea>
						<button className="btn bg-white text-dark_primary">Submit</button>
					</form>
					<div className="flex-1 flex flex-col gap-5">
						{Contact.social_media.map((content, i) => (
							<div
								key={i}
								data-aos="fade-down"
								data-aos-delay={i * 430}
								className="flex items-center gap-2"
							>
								<h4 className="text-white">{createElement(content.icon)}</h4>
								<a href={content.link} className="font-Poppins" target="_blank">
									{content.text}
								</a>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
