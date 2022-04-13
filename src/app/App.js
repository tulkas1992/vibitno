import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import icons from "./icons";
import routes from "./config/routes";

// Screens
import LoginScreen from "../login/Screen";
import ForgotPasswordScreen from "../forgot-password/Screen";
import RegisterAccountScreen from "../register-account/Screen";
import ResetPasswordScreen from "../reset-password/Screen";
import DashboardScreen from "../dashboard/DashboardScreen";
import SettingsScreen from "../settings/Screen";

class App extends Component {
  constructor(props) {
    super(props);

    library.add(
      icons.faEye,
      icons.faEyeSlash,
      icons.faCheck,
      icons.faMinusCircle,
      icons.faExclamationTriangle,
      icons.faTimes,
      icons.faPencilAlt,
      icons.faTrashAlt,
      icons.faChevronRight,
      icons.faChevronDown,
      icons.faChevronLeft,
      icons.faEnvelope,
      icons.faCog,
      icons.faBell,
      icons.faCircleNotch
    );
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={routes.signin} component={LoginScreen} />
          <Route
            exact
            path={routes.forgotPassword}
            component={ForgotPasswordScreen}
          />
          <Route
            exact
            path={routes.resetPassword}
            component={ResetPasswordScreen}
          />
          <Route
            path={routes.registerAccount}
            component={RegisterAccountScreen}
          />
          <Route path={routes.dashboard} component={DashboardScreen} />
          <Route path={routes.settings.settings} component={SettingsScreen} />
        </Switch>
      </Router>
    );
  }
}

export default App;
