import React from  'react';
import './App.css';



class HeaderBar extends React.Component{
  render(){
    return(
      <div>
        <button className="homeButton"></button>

        <div className="headerButtons">
          <a className="headerButton">a</a>
          <a className="headerButton">a</a>
          <a className="headerButton">a</a>
          <a className="headerButton">a</a>
          <a className="headerButton">a</a>
          <a className="headerButton">a</a>
          <a className="headerButton">a</a>
        </div>
      </div>
    );
  }
}







//------------------------------------

class App extends React.Component {
  render() {
    return (
      <HeaderBar/>
    );
  }
}

export default App;
