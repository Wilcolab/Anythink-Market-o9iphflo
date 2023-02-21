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
					<div className='text-center'>
						<h1>Protected Content</h1>
					</div>
				)
			}
		/>
	);
}

export default PrivateRoute