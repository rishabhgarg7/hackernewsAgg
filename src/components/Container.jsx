import React, { Component } from "react";
import "./Container.css";
import Item from "./Item";
import axios from "axios";
import { string } from "prop-types";
const Url = "https://hacker-news.firebaseio.com/v0/topstories.json";
const storyurl = "https://hacker-news.firebaseio.com/v0/item/";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = { titles: [] };
  }

  async componentDidMount() {
    let { data: topids } = await axios.get(Url);
    let top10ids = topids.slice(0, 10);
    let topurls = top10ids.map(itemid => storyurl + itemid + ".json");
  }

  render() {
    return (
      <div className="Container">
        <h2>HackerNews Aggregator</h2>
        <Item title="This is first title" />
        <Item title="This is first title" />
        <Item title="This is first title" />
        <Item title="This is first title" />
        <Item title="This is first title" />
      </div>
    );
  }
}

export default Container;
