import React, { Component } from "react";
import Box from "../Box";
import "./index.css";

export default class Column extends Component {
  render() {
    const { boxs } = this.props;
    return (
      <div className="column">
        {boxs.map((box) => {
          return <Box key={box.id} id={box.id} info={box.info} />;
        })}
      </div>
    );
  }
}
