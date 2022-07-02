import { Route, Switch } from "wouter";

import ErrorBoundary from "./ErrorBoundary";
import PageNotFound from "./404";
import Home from "./Home";
import Create from "./create";
import Receive from "./receive";

const AppRoutes = () => {
	return (
		<ErrorBoundary>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/create" exact component={Create} />
				<Route path="/receive" exact component={Receive} />
				<Route component={PageNotFound} />
			</Switch>
		</ErrorBoundary>
	);
};

export default AppRoutes;
