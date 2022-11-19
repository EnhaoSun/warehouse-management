import React, { Component } from "react";
import "./index.css";

export default class Box extends Component {
  state = {
    id: "",
    info: "",
  };

  static getDerivedStateFromProps(props) {
    return { ...props };
  }

  showInfo = () => {
    console.log(this.state.info);
  };

  render() {
    const { id } = this.state;
    return (
      <div className="box" onMouseUp={this.showInfo}>
        Box {id}
      </div>
    );
  }
}
