import React from 'react'
import { Redirect, Route } from 'react-router';

function PrivateRoute({ component: Component, token, ...rest }) {
	return (
		<Route
			{...rest}
			render={(props) =>
				token ? (
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