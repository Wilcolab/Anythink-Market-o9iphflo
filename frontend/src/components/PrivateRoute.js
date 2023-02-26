import React from 'react'
import { Redirect, Route } from 'react-router';

function PrivateRoute({ children, auth, ...rest }) {
	return (
		<Route
			{...rest}
			render={({ location }) =>
				auth ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
}

export default PrivateRoute