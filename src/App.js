import React, { useState } from 'react';
import './App.css';

import Person from './Person/Person';


const App = props => {
  
  const [ personsState, setPersonsState ] = useState({
    persons: [
      {name: 'Max', age: 23},
      {name: 'Manu', age: 24},
      {name: 'Stephany', age: 26},
    ]
  });

  const [otherState, setOtherState] = useState('some other value')

  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
        {name: newName, age: 23},
        {name: 'Manu', age: 24},
        {name: 'Stephany', age: 26},
      ]
    })
  }

  const nameChangeHandler = (event) => {
    setPersonsState({
      persons: [
        {name: 'Max', age: 23},
        {name: event.target.value, age: 24},
        {name: 'Stephany', age: 26},
      ]
    })
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    paddin: '8px',
    cursor: 'pointer'
  }

  return (
    <div className="App">
      <button
        style={style} 
        onClick={() => switchNameHandler('Antonio de Jesus !!')}>Switch Name</button>
      <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age}
      />
      <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age}
        click={switchNameHandler.bind(this,'Max!')}
        changed={nameChangeHandler}>I like soccer
      </Person>
      <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age}
      />
    </div>
  );
}

export default App;