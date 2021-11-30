export const theme = {
	font: {
		size: {
			normal: "1rem",
			mainheading: "2.5rem",
			subheading: "1.3rem",
		},

		weight: {
			semibold: "500",
			bold: "700",
			normal: "400",
		},

		family: {
			primary: "Lato, sans-serif",
		},
	},

	breakpoints: {
		mobile: "460px",
		tablet: "768px",
		desktop: "1200px",
	},
};

export const lightTheme = {
	body: "#fff",
	text: "#121212",
	primary: "#6200ee",
};

export const darkTheme = {
	/* body: "#121212",
  	text: "#fff",
  	primary: "#bb86fc", */
	...theme,

	colors: {
		primary: {
			pink: "#FF0074",
			// gradiantpink: "#B60354",
			gradiantpink: "#5E062E",
			gold: "#FFB200",
			red: "#F43E22",
		},
		secondary: {},
		neutral: {
			gray: "#181818",
			black: "#221E30",
			white: "#ffffff",
			red: "#F43E22",
		},

		lightbackground: "#838198",
		graybackground: "#282838",
		darkbackground: "#16161E",
		background: "#101427",

		highlight: "#444451",
		alert: "#AE1317",

		navbar: "#090909",
		text: "#ffffff",
	},
};
