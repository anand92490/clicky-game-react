import React, { Component } from 'react';
import MatchCard from "./components/MatchCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import matches from "./matchcards.json.js";
import './App.css';

class App extends Component {
  state = {  };


  render() { 
    return ( 
      <Wrapper>
      <Title>
        <h1>Clicky Game!</h1>
        <h4>Click on an image to earn points, but don't click on any more than once!</h4>
      </Title>
      <MatchCard />
    </Wrapper>
    
     );
  }
}
 
export default App;