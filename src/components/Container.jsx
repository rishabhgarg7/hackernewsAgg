import React, { Component } from "react";
import "./Container.css";
import Item from "./Item";
import axios from "axios";
const Url = "https://hacker-news.firebaseio.com/v0/topstories.json";
const storyurl = "https://hacker-news.firebaseio.com/v0/item/";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = { titles: [], isLoaded: false, scores: [] };
  }

  async componentDidMount() {
    let { data: topids } = await axios.get(Url);
    let top10ids = topids.slice(0, 10);
    let topurls = top10ids.map(itemid => storyurl + itemid + ".json");

    let newTitles = [];
    let newScores = [];

    for (let i = 0; i < topurls.length; i++) {
      let { data: dic } = await axios.get(topurls[i]);

      newTitles = [...newTitles, ...[dic.title]];
      newScores = [...newScores, ...[dic.score]];
    }
    this.setState({ titles: newTitles, isLoaded: true, scores: newScores });
  }

  render() {
    const arr = Array(10)
      .fill(1)
      .map((v, i) => i);
    return (
      <div className="Container">
        <h2>HN Aggregator</h2>
        {this.state.isLoaded
          ? arr.map(i => (
              <Item
                title={this.state.titles[i]}
                votes={this.state.scores[i]}
                key={i}
              />
            ))
          : "Loading..."}
      </div>
    );
  }
}

export default Container;
