import React from 'react'
import {  Route } from 'react-router';

function PrivateRoute({ component: Component, token, ...rest }) {
	return (
		<Route
			{...rest}
			render={(props) =>
				token ? (
					<>
						<h1 className="text-center">Protected Content</h1>
						<Component {...props} />
					</>
				) : null
			}
		/>
	);
}

export default PrivateRoute