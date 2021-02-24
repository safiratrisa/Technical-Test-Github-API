import React, { Component } from 'react';
import axios from 'axios'
class App extends Component {
  constructor(props) {
    super(props);
    this.checkUsername = this.checkUsername.bind(this);
  }
  checkUsername = () => {
    const username = this.input.value
    axios.get(`http://api.github.com/users/${username}`)
    .then(res => {
        console.log(res.data)
    })
    .catch(err => {
        console.log(err.response)
    })
  }
  render() {   
    return (
      <div>
        <input
          type="text"
          ref={inputUsername => (this.input = inputUsername)}
        />
        <button onClick={this.checkUsername}>Check</button>
      </div>
    );
  }
}

export default App;
