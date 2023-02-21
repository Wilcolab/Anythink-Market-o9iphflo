import React from 'react'
import {  Route } from 'react-router';

function PrivateRoute({ component: Component, token, ...rest }) {
	return (
		<Route
			{...rest}
			render={(props) =>
				token ? (
					<Component {...props} />
				) : (
					null
				)
			}
		/>
	);
}

export default PrivateRoute