import React, { Component } from 'react';
import Nav from './comp/nav/nav'
import Content from './comp/content/content'

class App extends Component {
  render() {

    return (
      <div className="App">
        <Nav></Nav>
        <Content></Content>
      </div>
    );
  }
}

export default App;
