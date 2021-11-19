import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { ThemeProvider } from "styled-components";
import reportWebVitals from "./reportWebVitals";
import { MoralisProvider } from "react-moralis";
import GlobalStyle from "./theme/globalStyles";
import { darkTheme } from "./theme/theme";

ReactDOM.render(
	<MoralisProvider
		appId="zA1uN8A3fRR8owsiFDr2sjULWgBHpvofSpKiOJRi"
		serverUrl="https://6jshdrz5hhij.usemoralis.com:2053/server">
		<React.StrictMode>
			<ThemeProvider theme={darkTheme}>
				<GlobalStyle />
				<App />
			</ThemeProvider>
		</React.StrictMode>
	</MoralisProvider>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
