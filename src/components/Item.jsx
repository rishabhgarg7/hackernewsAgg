import React, { Component } from "react";
import "./Item.css";

class Item extends Component {
  static defaultProps = {
    title: "hdhbdhb",
    votes: 23
  };
  render() {
    return (
      <div className="Item">
        <h3>
          {this.props.votes} {this.props.title}
        </h3>
      </div>
    );
  }
}

export default Item;
