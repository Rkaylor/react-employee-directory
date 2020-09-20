import React from 'react';
import Main from './components/main';
import Wrapper from './components/wrapper.js';
import Header from './components/header';
import "./App.css";

function App() {
  return (
    <div className="App">
   <Wrapper>
     <Header />
     <Main />
   </Wrapper>
    </div>
  );
}

export default App;
