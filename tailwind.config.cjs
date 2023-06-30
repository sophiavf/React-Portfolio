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
				dark_primary: "#253237",
				bg_light_primary: "#c2dfe3",
				gray: "#B7C5D3",
				bg_medium_primary: "#9db4c0",
				bg_light_secondary: "#c2dfe3",
			},
			backgroundImage: {
				primaryLinear: "linear-gradient(180deg, #253237 0.48%, #c2dfe3 100%)",
			},
			dropShadow: {
				primary: "-5px 35px 40px rgba(223, 229, 236, 0.9)",
			},
				},
			},
	plugins: [],
};
