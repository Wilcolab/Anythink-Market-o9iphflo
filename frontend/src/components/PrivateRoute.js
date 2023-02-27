import React from 'react'
import {  Route } from 'react-router';

function PrivateRoute({ children, auth, ...rest }) {
	return (
		<Route
			{...rest}
			render={({ location }) =>
				auth ? (
					<div>Protected Content</div>
				) : (
					null
				)
			}
		/>
	);
}

export default PrivateRoute