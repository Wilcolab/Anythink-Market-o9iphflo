import React from "react";
import { Route, Redirect } from "react-router";

function PrivateRoute({ currentUser, component }) {
	return (
		<Route
			render={() =>
				currentUser?.isAuthenticated ? component() : <Redirect to="/" />
			}
		/>
	);
}

export default PrivateRoute;
