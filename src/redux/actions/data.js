import axios from 'axios'

export const getRepos = (data_url) => (dispatch) => {
    axios.get(data_url)
    .then((res) => {
        dispatch({ type: 'GET_REPOS', payload: res.data })
    })
}
export const getUser = (username) => (dispatch) => {
    axios.get(`http://api.github.com/users/${username}`)
    .then((res) => {
        dispatch({ type: 'GET_USER', payload: res.data })
    })
    .catch(err => {
        dispatch({ type: 'GET_USER_ERROR', payload: err.response.data.message })
      })
}
