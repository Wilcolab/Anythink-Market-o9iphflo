import React from "react";
import { Route, Redirect } from "react-router";

function PrivateRoute({ currentUser, children }) {
	return (
		<Route render={() => (currentUser ? children : <Redirect to="/login" />)} />
	);
}

export default PrivateRoute;
