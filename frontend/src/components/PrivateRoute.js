import React from 'react'
import {  Route } from 'react-router';

function PrivateRoute({ children, auth, ...rest }) {
	return (
		<Route
			{...rest}
			render={({ location }) =>
				auth ? (
					children
				) : (
					null
				)
			}
		/>
	);
}

export default PrivateRoute