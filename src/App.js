import React from  'react';
import './App.css';



class HeaderBar extends React.Component{
  render(){
    return(
      <div>
        <button className="homeButton"></button>

        <div className="headerButtons">
          <a className="headerButton">a</button>
          <a className="headerButton">b</button>
          <a className="headerButton">c</button>
          <a className="headerButton">d</button>
          <a className="headerButton">e</button>
          <a className="headerButton">f</button>
          <a className="headerButton">g</button>
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
