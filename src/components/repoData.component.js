import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getRepos} from '../redux/actions'

export default function UserData(props) {
    const dispatch = useDispatch()
    const repos = useSelector(state => state.repos.repos)
    useEffect(() => {
        dispatch(getRepos(props.data))
    }, [dispatch, props.data])

    return (
        <div className='allrepo'>
            <ul>
                {repos.map(repodata =>
                <li key={repodata.id}>
                    <h3><a href={repodata.html_url}>{repodata.full_name}</a></h3>
                </li>)}
            </ul>
        </div>
    )
}