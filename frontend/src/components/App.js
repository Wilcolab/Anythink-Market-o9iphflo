import agent from "../agent";
import Header from "./Header";
import React from "react";
import { connect } from "react-redux";
import { APP_LOAD, REDIRECT } from "../constants/actionTypes";
import { Route, Switch } from "react-router-dom";
import Item from "./Item";
import Editor from "./Editor";
import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import ProfileFavorites from "./ProfileFavorites";
import Register from "./Register";
import Settings from "./Settings";
import { store } from "../store";
import { push } from "react-router-redux";
import PrivateRoute from "./PrivateRoute";

const mapStateToProps = (state) => {
  return {
    appLoaded: state.common.appLoaded,
    appName: state.common.appName,
    currentUser: state.common.currentUser,
    redirectTo: state.common.redirectTo,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLoad: (payload, token) =>
    dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
  onRedirect: () => dispatch({ type: REDIRECT }),
});

class App extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      // this.context.router.replace(nextProps.redirectTo);
      store.dispatch(push(nextProps.redirectTo));
      this.props.onRedirect();
    }
  }

  componentWillMount() {
    const token = window.localStorage.getItem("jwt");
    if (token) {
      agent.setToken(token);
    }

    this.props.onLoad(token ? agent.Auth.current() : null, token);
  }
  render() {
    if (this.props.appLoaded) {
      return (
				<div>
					<Header
						appName={this.props.appName}
						currentUser={this.props.currentUser}
					/>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
						<PrivateRoute
							path="/editor/:slug"
							exact
							component={Editor}
							token={this.props.currentUser}
						/>
						<PrivateRoute path="/editor" exact component={Editor} token={this.props.currentUser} />
						<Route path="/item/:id" component={Item} />
						<PrivateRoute path="/settings" exact component={Settings} token={this.props.currentUser} />
						<Route path="/@:username/favorites" component={ProfileFavorites} />
						<Route path="/@:username" component={Profile} />
					</Switch>
				</div>
			);
    }
    return (
      <div>
        <Header
          appName={this.props.appName}
          currentUser={this.props.currentUser}
        />
      </div>
    );
  }
}

// App.contextTypes = {
//   router: PropTypes.object.isRequired
// };

export default connect(mapStateToProps, mapDispatchToProps)(App);
