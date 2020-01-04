import React, { Component } from "react";
import Header from "./Header";

export default class Page extends Component {
  render() {
    return (
      <div>
        <Header />
        <p>Page Component</p>
        {this.props.children}
      </div>
    );
  }
}
