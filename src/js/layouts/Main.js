import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <div className="site">
        <div className="site-main">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Main;
