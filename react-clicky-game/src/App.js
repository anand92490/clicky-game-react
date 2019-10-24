import React from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import './App.css';

function App() {
  return (
    <Wrapper>
      <Title>
        <h1>Clicky Game!</h1>
        <h4>Click on an image to earn points, but don't click on any more than once!</h4>
      </Title>
    </Wrapper>
    
  );
}

export default App;
