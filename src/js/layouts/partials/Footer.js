import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="app-footer">
        <span>
          <a href="#" target="blank">Real</a>
          {' '}
          &copy; 2019 creativeLabs.
        </span>
        <span className="ml-auto">
          Powered by
          {' '}
          <a href="#" target="blank">Test</a>
        </span>
      </footer>
    );
  }
}

export default Footer;
