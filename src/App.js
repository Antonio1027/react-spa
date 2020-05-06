import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';


class App extends Component {
  
  state = {
    persons: [
      {name: 'Max', age: 23},
      {name: 'Manu', age: 24},
      {name: 'Stephany', age: 26},
    ],
    showPersons: false
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Max', age: 23},
        {name: event.target.value, age: 24},
        {name: 'Stephany', age: 26},
      ]
    })
  }

  style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    paddin: '8px',
    cursor: 'pointer'
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
            {this.state.persons.map((person, index) => {
              return <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age}/>
            })}
          </div>
      );
    }

    return (
      <div className="App" >
        <button
          style={this.style} 
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </div>
    );
  }
}
export default App;