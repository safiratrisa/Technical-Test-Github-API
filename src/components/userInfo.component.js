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
        console.log('fhjshfksjdhfdskj')
        console.log(this.props.display_data)
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