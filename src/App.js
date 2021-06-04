import React from 'react';
import Header from './Components/Header';
import LoadList from './Components/LoadList';
import ToolBar from './Components/ToolBar';
import ModalLoadCard from './Components/ModalLoadCard';

function App() {
  return (
      <div className = "app">
      
        <Header/>
        <ToolBar/>
        <LoadList/>
        <ModalLoadCard/>

      </div>
  );
}

export default App;
