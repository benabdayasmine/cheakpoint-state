import React, { Component } from "react";
import Photo from "./yass1.jpg";
export default class Classcomponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: Photo,
      fullName: "Yasmine",
      bio: "I am a student",
      job: "Web developer",
      count: 0,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }
  render() {
    return (
      <div>
        <div class="card">
          <div className="espace">
            <img src={this.state.image} />
            <h1>{this.state.fullName} </h1>
            <h3>{this.state.des}</h3>
            <h5>{this.state.job}</h5>
            <p>{this.state.bio}</p>
          </div>
          <h1> {this.state.count} s</h1>
        </div>
      </div>
    );
  }
}
