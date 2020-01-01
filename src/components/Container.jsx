import React, { Component } from "react";
import "./Container.css";
import Item from "./Item";
import axios from "axios";
const Url = "https://hacker-news.firebaseio.com/v0/topstories.json";
const storyurl = "https://hacker-news.firebaseio.com/v0/item/21927076.json";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = { titles: [] };
  }

  async componentDidMount() {
    let { data: topids } = await axios.get(Url);
    let top10 = topids.slice(0, 10);
    top10.map(itemid => {
      `$(storyurl)`;
    });
  }

  render() {
    return (
      <div className="Container">
        <h2>HackerNews Aggregator</h2>
        <Item />
      </div>
    );
  }
}

export default Container;
