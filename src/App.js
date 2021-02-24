import React, { Component } from 'react';
import axios from 'axios'
class App extends Component {
  constructor(props) {
    super(props);
    this.checkUsername = this.checkUsername.bind(this);
    this.state = {
      user: '',
      error: ''
    }
  }
  checkUsername = () => {
    const username = this.input.value
    axios.get(`http://api.github.com/users/${username}`)
    .then(res => {
      this.setState({
        error: '',
        user: res.data
      });
    })
    .catch(err => {
      this.setState({
        user: '',
        error: err.response.data.message
      });
    })
  }
  render() { 
    const error = this.state.error
    const name = this.state.user.name
    let userProfile;
    if (name) {
      userProfile = <h1>Username Exists</h1>
    } else if (error) {
      userProfile = <h1>Username Does Not Exist</h1>
    }
    return (
      <div>
        <div>
        <input
          type="text"
          ref={inputUsername => (this.input = inputUsername)}
        />
        <button onClick={this.checkUsername}>Check</button>
        </div>
        {userProfile}
      </div>
    );
  }
}

export default App;
