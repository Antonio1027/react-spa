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

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 23},
        {name: 'Manu', age: 24},
        {name: 'Stephany', age: 26},
      ]
    })
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
    return (
      <div className="App" >
        <button
          style={this.style} 
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {
          this.state.showPersons === true ?
            <div>
              <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age}
              />
              <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this,'Max!')}
                changed={this.nameChangeHandler}>I like soccer
              </Person>
              <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age}
              />
            </div> : null
        }
      </div>
    );
  }
}
export default App;