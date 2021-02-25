import React, { Component } from 'react';
import User from './components/userInfo.component'
import { getUser } from './redux/actions'
import { connect } from 'react-redux';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display_data: false
    }
  }
  showRepos = (repos) => {
    this.setState({
      display_data: repos
    })
  }
  render() {
    const error = this.props.user.error
    const name = this.props.user.user.name
    let userProfile;
    if (name) {
      userProfile = <User user={this.props.user.user} display_data={this.state.display_data} showRepos={this.showRepos}/>
    } else if (error) {
      userProfile = <h1>Username Does Not Exist</h1>
    }
    return (
      <div className="frame">
        <div className="input">
          <input
            type="text"
            ref={inputUsername => (this.input = inputUsername)}
            placeholder='Search Github Username...'
          />
          <button onClick={() => 
            {
              this.props.getUser(this.input.value)
              this.setState({
                display_data: false
              });
            }
            }>Search</button>
        </div>
        <div className="content">
          {userProfile}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.repos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(App)
