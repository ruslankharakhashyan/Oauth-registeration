
import React, { Component } from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';

class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
