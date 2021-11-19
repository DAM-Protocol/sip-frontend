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
      primary: "Poppins, sans-serif",
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
    },
    secondary: {},
    neutral: {
      gray: "#181818",
      black: "#090909",
      white: "#fff",
    },
    lightbackground: "#181818",
    background: "#090909",
    sidebar: "#181818",
    navbar: "#090909",
    text: "#fff",
  },
};
