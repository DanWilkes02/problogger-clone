import React from  'react';
import './App.css';
import logo from './logo.jpg';



class HeaderBar extends React.Component{
  render(){
    return(
      <div>
        <a className="homeButton" href="http://localhost:3000" >
            <img className="logo" src={logo}/>
        </a>


        <div className="headerButtons">
          <a className="headerButton" href="https://problogger.com/start-here/">Start Here</a>
          <a className="headerButton" href="https://problogger.com/blog/">Blog</a>
          <a className="headerButton" href="https://problogger.com/podcast">Podcast</a>
          <a className="headerButton" href="https://problogger.com/learn">eBooks</a>
          <a className="headerButton" href="https://problogger.com/recommended-blogging-resources">Resources</a>
          <a className="headerButton" href="http://jobs.problogger.net/">Jobs</a>
          <a className="headerButton" href="http://problogger.com/events/">Events</a>
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
