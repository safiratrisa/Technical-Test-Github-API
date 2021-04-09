import React, { Component } from 'react'
import UserData from './repoData.component'
export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nextURL: ''
        }
    }
    getUserData = (nextURL) => {
        this.setState({
            nextURL: nextURL
        })
        this.props.showRepos(true)
    }

    render() {
        let showrepo;
        if (this.state.nextURL && this.props.display_data) {
            showrepo = <UserData data={this.state.nextURL} />
        }
        return (
            <div className='user-profile'>
                <div className='image'>
                    <img src={this.props.user.avatar_url} alt="" />
                </div>
                <div className="user-info">
                    <p>{this.props.user.name}</p>
                    <p>{this.props.user.location}</p>
                </div>
                <div className="repo-info">
                    <p>{this.props.user.public_repos} Repos</p>
                    <div className='get-repo'
                        onClick={() => this.getUserData(`${this.props.user.url}/repos`)} >
                        <p>View Github Repositories</p>
                    </div>
                </div>
                <div className="showrepo">
                    {showrepo}
                </div>
            </div>
        )
    }
}