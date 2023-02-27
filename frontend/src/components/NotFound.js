import React from "react";

function NotFound() {
	return (
		<div className="text-center">
			<h1 className="mb-5">Page Not Found</h1>
			<p className="mt-5 p-5 w-75 mx-auto">
				Oops, Looks like you've stumbled upon an item that currently does not
				exist. But don't worry, there are plenty of other cool items to choose
				from in the Anythink marketplace. Take a look around and find something
				new!
			</p>
			<div>
				<a href="/" className="text-light font-weight-bold">
					Return Home
				</a>
			</div>
		</div>
	);
}

export default NotFound;
