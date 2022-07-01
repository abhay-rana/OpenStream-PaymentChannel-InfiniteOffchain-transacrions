import React, { useEffect } from "react";
import ErrorBoundary from "./error-boundary";
import useTilg from "tilg";
import Header from "./header";
import View from "./View";

const Routes = () => {
	console.log("inside the routes");
	useTilg();
	useEffect(() => {
		console.log("routes is mounted");
	}, []);

	return (
		<>
			<ErrorBoundary>
				<div>Routes</div>
				{console.log("routes is rendered")}
				<Header />
				<View />
				<Routess />
			</ErrorBoundary>
		</>
	);
};

export default Routes;
