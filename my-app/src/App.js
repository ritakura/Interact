import React from 'react';
import Navbar from './navbar';
import Game from './game';
import About from './about';
import Adhd from './adhd';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      height: window.innerHeight,
      view: "home",
      classNames: require('classnames'),
    }
  }

  set_view = (v) => {
    this.setState({view: v});
    console.log("onClick: ", this.state.view);
  }

  render() {
    let active_view;
    if (this.state.view === "home") {
      active_view = <Game/>;
    } else if (this.state.view === "about") {
      active_view = <About/>;
    } else if (this.state.view === "adhd") {
      active_view = <Adhd/>;
    }
    return (
      <div className="App">
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet"/>

        <div className="navbar">
          <div class="title" onClick={() => {this.set_view("home")}}>Interact</div>
          <div class="tabs">
              <div className={this.state.classNames('tab', (this.state.view === "about") && 'selected')} onClick={() => {this.set_view("about")}} >About</div>
              <div className={this.state.classNames('tab', (this.state.view === "adhd") && 'selected')} onClick={() => {this.set_view("adhd")}}>ADHD</div>
          </div>
        </div>
        <div class="active-page">{active_view}</div>
      </div>
    );
  };
}

export default App;
