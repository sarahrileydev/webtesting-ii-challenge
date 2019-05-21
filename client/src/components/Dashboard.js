import React, { Component } from "react";
import Display from "./Display";

class Dashboard extends Component {
  state = {
    ball: 0,
    strike: 0,
    foul: 0,
    hit: 0
  };

  ballHandler = () => {
    if (this.state.ball < 4 && this.state.strike < 3) {
      this.setState({ ball: this.state.ball + 1 });
    } else {
      this.setState({ ball: 0, strike: 0, foul: 0 });
    }
  };

  strikeHandler = () => {
    if (this.state.strike < 3 && this.state.ball < 4) {
      this.setState({ strike: this.state.strike + 1 });
    } else {
      this.setState({ ball: 0, strike: 0, foul: 0 });
    }
  };

  foulHandler = () => {
    if (this.state.strike < 2) {
      this.setState({
        strike: this.state.strike + 1,
        foul: this.state.foul + 1
      });
    } else {
      this.setState({ ball: 0, strike: 0, foul: 0 });
    }
  };

  hitHandler = () => {
    this.setState({ ball: 0, strike: 0, foul: 0 });
  };

  render() {
    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
        <Display
          ball={this.state.ball}
          ballHandler={this.ballHandler}
          strike={this.state.strike}
          strikeHandler={this.strikeHandler}
          foul={this.state.foul}
          foulHandler={this.foulHandler}
          hit={this.state.hit}
          hitHandler={this.hitHandler}
        />
      </div>
    );
  }
}

export default Dashboard;
