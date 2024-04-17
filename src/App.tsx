import React from 'react';
import './App.css';
import  {Title}  from './components/Title';
import  DragAndDrop  from './components/DragAndDrop';

function App() {
  return (
    <div className="App min-h-[85vh]">
     <Title/>
     <DragAndDrop/>
    </div>
  );
}

export default App;
