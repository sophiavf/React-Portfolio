/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			Poppins: "Poppins",
			Roboto: "Roboto",
			Inria: "Inria Serif",
		},
		container: {
			center: true,
			padding: "4rem",
		},
		extend: {
			colors: {
				dark_primary: "#0D0B0A",
				bg_light_primary: "#E4B982ff",
				gray: "#B7C5D3",
				bg_medium_primary: "#733F2C",
				bg_light_secondary: "#D9A05B",
			},
			backgroundImage: {
				primaryLinear: "linear-gradient(180deg, #401F14 0.48%, #D9A05B 100%)",
			},
			dropShadow: {
				primary: "-5px 35px 40px rgba(223, 229, 236, 0.9)",
			},
		},
	},
	plugins: [],
};
