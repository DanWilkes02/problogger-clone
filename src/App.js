import React from  'react';
import './App.css';



class HeaderBar extends React.Component{
  render(){
    return(
      <div>
        <button className="homeButton"></button>

        <div className="headerButtons">
          <a className="headerButton">a</a>
          <a className="headerButton">b</a>
          <a className="headerButton">c</a>
          <a className="headerButton">d</a>
          <a className="headerButton">e</a>
          <a className="headerButton">f</a>
          <a className="headerButton">g</a>
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
