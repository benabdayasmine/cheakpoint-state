import React, { Component } from "react";
import Classcomponents from "./componentq/Classcomponents";
import "./App.css";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  render() {
    return (
      <div className="App">
        <div class="main">
          <button
            className="button-80"
            onClick={() => {
              this.setState({ show: !this.state.show });
            }}
          >
            {this.state.show ? "Hide Profile" : "Show Profile"}
          </button>
        </div>
        {this.state.show ? (
          <div className="container">
            <Classcomponents /> {/* called cmponet */}
          </div>
        ) : (
          <h1>Click the button bellow</h1>
        )}
      </div>
    );
  }
}
