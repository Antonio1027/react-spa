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

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {name: 'Antonio', age: 23},
        {name: 'Manu', age: 24},
        {name: 'Stephany', age: 26},
      ]
    })
  }

  console.log(personsState,otherState)

  return (
    <div className="App">
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>I like soccer</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
}

export default App;