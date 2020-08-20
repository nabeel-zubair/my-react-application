import React from "react";
import { Route, withRouter, RouteComponentProps } from "react-router-dom";
import { State } from "../types";
import Navbar from "./Navbar";
import Routes from "../routes";

class App extends React.Component<RouteComponentProps, State> {
  constructor(props: RouteComponentProps) {
    super(props);
    this.state = {};
  }

  handleClick = (path: string) => {
    this.props.history.push(path);
  };

  render() {
    return (
      <div className="App">
        <Navbar handleClick={this.handleClick} />
        {Routes.map((route, index) => (
          <div key={index}>
            <Route path={route.path} component={route.component} />
          </div>
        ))}
      </div>
    );
  }
}

export default withRouter(App);
