import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Nav extends Component {
  render() {
    return (
      <div >
        <Link to="article">Article</Link>
        <Link to="news"><button>News</button></Link>
      </div>
    );
  }
}

export default Nav;