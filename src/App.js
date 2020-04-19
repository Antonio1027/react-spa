import React from 'react';
import './App.css';
import Person from './Person/Person';


function App() {
  return (
    <div className="App">
      <Person name="Max" age="12"/>
      <Person name="Manu" age="29">I like soccer</Person>
      <Person name="Louis" age="32"/>
    </div>
  );
}

export default App;
