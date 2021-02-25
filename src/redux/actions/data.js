import axios from 'axios'

export const getRepos = (data_url) => (dispatch) => {
    axios.get(data_url)
    .then((res) => {
        console.log('resdata')
        console.log(res.data)
        dispatch({ type: 'GET_REPOS', payload: res.data })
    })
}
