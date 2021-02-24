import React, { Component } from 'react'
import UserData from './repoData.component'
export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nextURL: '',
            display_data: false
        }
    }
    getUserData = (nextURL) => {
        this.setState({
            nextURL: nextURL,
            display_data: true
        })
    }

    render() {
        let showrepo;
        if (this.state.nextURL && this.state.display_data) {
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
                    <p className='user-bio'>{this.props.user.bio}</p>
                </div>
                <div className="repo-info">
                    <div className='get-repo'
                        onClick={() => this.getUserData(`${this.props.user.url}/repos`)} >
                        <b>{this.props.user.public_repos}</b>
                        <p>Repos</p>
                    </div>
                </div>   
                {showrepo}
            </div>
        )
    }
}