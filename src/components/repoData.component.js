import React from 'react'
import axios from 'axios'

export default class UserData extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
        this.axiosGet = this.axiosGet.bind(this);
    }
    componentDidMount() {
        this.axiosGet(this.props.data)
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.data !== this.props.data) {
            this.axiosGet(this.props.data)
        }
    }
    axiosGet(data_url) {
        axios.get(data_url)
        .then(res => {
            console.log(res)
            this.setState({
                data: res.data
            });
        })
        .catch(err => {
            console.log(err)
        })
    }
    render() {
        return (
            <div className='user-data-grid'>
                <ul>
                    {this.state.data.map(repodata =>
                    <li key={repodata.id} className='repos-list'>
                        <h3><a className='user-repos-name' href={repodata.html_url}>{repodata.full_name}</a></h3>
                        <div className='user-repos-stars'>
                            <i className="fas fa-star"></i>
                        </div>
                    </li>)}
                </ul>
            </div>
        )
    }
}