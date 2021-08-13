import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// import { Provider } from "react-redux";
import App from "./App";
// import store from "./store";
import ThreadContextProvider from "./context";

render(
	<ThreadContextProvider>
		<Router>
			<App />
		</Router>
	</ThreadContextProvider>,
	document.getElementById("root")
);
