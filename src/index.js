import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { ThemeProvider } from "styled-components";
import reportWebVitals from "./reportWebVitals";
import { MoralisProvider } from "react-moralis";
import GlobalStyle from "./theme/globalStyles";
import { darkTheme } from "./theme/theme";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
	<React.StrictMode>
		<MoralisProvider
			appId="rFyOa0CRJzi1GGLIWHgSkTszbiq5BMAMEuwg2UV8"
			serverUrl="https://mi0usx4zzfwt.usemoralis.com:2053/server">
			<BrowserRouter>
				<ThemeProvider theme={darkTheme}>
					<GlobalStyle />
					<App />
				</ThemeProvider>
			</BrowserRouter>
		</MoralisProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
