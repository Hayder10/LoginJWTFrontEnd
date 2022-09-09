import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";



import Login from "./views/Login";
import Private from "./views/Private";
import Register from "./views/Register";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<BrowserRouter basename={basename}>
			<Switch>
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Register} />
				<Route exact path="/private" component={Private} />
			</Switch>
		</BrowserRouter>
	);
};

export default Layout;
