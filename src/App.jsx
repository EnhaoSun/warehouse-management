import React, { Component } from "react";
import Column from "./component/Column";

export default class App extends Component {
  render() {
    let boxs = [
      {
        id: 1,
        info: "This is box1;\n * Contains 10 types of button",
      },
      {
        id: 2,
        info: "This is box2",
      },
      {
        id: 3,
        info: "This is box3",
      },
      {
        id: 4,
        info: "This is box4",
      },
      {
        id: 5,
        info: "This is box5",
      },
    ];

    return (
      <div className="App">
        <Column boxs={boxs} />
      </div>
    );
  }
}
