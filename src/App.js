import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOuput/UserOutput';

class App extends Component {

  state = {
    username: "antonio.shilon"
  }

  bindUsernameHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <div className="FormContainer">
        <div>
          <UserInput 
            changed={this.bindUsernameHandler}
            currentName={this.state.username}
          />
        </div>
        <UserOutput username={this.state.username}/>
      </div>
    );
  }
}

export default App;
