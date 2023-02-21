import React from 'react'
import { Redirect, Route } from 'react-router';

function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
	return (
		<Route
			{...rest}
			render={(props) =>
				isAuthenticated ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: "/login",
						}}
					/>
				)
			}
		/>
	);
}

export default PrivateRoute