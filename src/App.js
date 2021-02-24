import React, { Component } from 'react';
import axios from 'axios'
class App extends Component {
  componentDidMount () {
    this.checkUsername()
  }
  checkUsername = () => {
    axios.get(`http://api.github.com/users/safiratrisa`)
    .then(res => {
        console.log(res.data)
    })
    .catch(err => {
        console.log(err.response)
    })
  }
  render() {   
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
